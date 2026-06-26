import { db } from './firebase-config.js';
import {
  collection, addDoc, updateDoc, doc, getDoc, getDocs, deleteDoc,
  query, where, orderBy, serverTimestamp, Timestamp
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

export function calcularPrevisaoPagamento(dataAdmissao, tipoContrato, dataTerminoContrato) {
  const admissao = new Date(dataAdmissao);
  const pos180 = new Date(admissao);
  pos180.setDate(pos180.getDate() + 180);

  if (tipoContrato === 'determinado' && dataTerminoContrato) {
    const termino = new Date(dataTerminoContrato);
    return termino < pos180 ? termino : pos180;
  }
  return pos180;
}

export function formatDate(date) {
  if (!date) return '';
  if (date.toDate) date = date.toDate();
  if (typeof date === 'string') date = new Date(date);
  return date.toLocaleDateString('pt-BR');
}

export function toInputDate(date) {
  if (!date) return '';
  if (date.toDate) date = date.toDate();
  if (typeof date === 'string') date = new Date(date + 'T00:00:00');
  return date.toISOString().split('T')[0];
}

export function toTimestamp(dateStr) {
  if (!dateStr) return null;
  return Timestamp.fromDate(new Date(dateStr + 'T00:00:00'));
}

export async function criarIndicacao(dados, userId) {
  const valorPremio = dados.valorPremio || 500;
  const previsaoPagamento = calcularPrevisaoPagamento(
    dados.dataAdmissao,
    dados.tipoContrato,
    dados.dataTerminoContrato
  );

  const indicacao = {
    matriculaIndicado: dados.matriculaIndicado,
    nomeIndicado: dados.nomeIndicado,
    setorIndicado: dados.setorIndicado,
    dataAdmissao: toTimestamp(dados.dataAdmissao),
    tipoContrato: dados.tipoContrato,
    dataTerminoContrato: dados.dataTerminoContrato ? toTimestamp(dados.dataTerminoContrato) : null,
    matriculaIndicador: dados.matriculaIndicador,
    nomeIndicador: dados.nomeIndicador,
    setorIndicador: dados.setorIndicador,
    status: 'previsto',
    valorPremio: Number(valorPremio),
    previsaoPagamento: Timestamp.fromDate(previsaoPagamento),
    dataPagamento: null,
    dataDesligamentoIndicado: null,
    motivoCancelamento: null,
    criadoEm: serverTimestamp(),
    criadoPor: userId,
    atualizadoEm: serverTimestamp()
  };

  const ref = await addDoc(collection(db, 'indicacoes'), indicacao);
  return ref.id;
}

export async function atualizarIndicacao(id, dados, userId, motivo = '') {
  const ref = doc(db, 'indicacoes', id);
  const snap = await getDoc(ref);
  if (!snap.exists()) throw new Error('Indicação não encontrada.');

  const update = { ...dados, atualizadoEm: serverTimestamp() };

  if (dados.dataAdmissao || dados.tipoContrato || dados.dataTerminoContrato) {
    const atual = snap.data();
    const adm = dados.dataAdmissao || toInputDate(atual.dataAdmissao);
    const tipo = dados.tipoContrato || atual.tipoContrato;
    const termino = dados.dataTerminoContrato !== undefined
      ? dados.dataTerminoContrato
      : (atual.dataTerminoContrato ? toInputDate(atual.dataTerminoContrato) : null);
    const nova = calcularPrevisaoPagamento(adm, tipo, termino);
    update.previsaoPagamento = Timestamp.fromDate(nova);
    if (dados.dataAdmissao) update.dataAdmissao = toTimestamp(dados.dataAdmissao);
    if (dados.dataTerminoContrato !== undefined) update.dataTerminoContrato = dados.dataTerminoContrato ? toTimestamp(dados.dataTerminoContrato) : null;
  }

  await updateDoc(ref, update);
}

export async function registrarPagamento(id, dataPagamento, userId) {
  const ref = doc(db, 'indicacoes', id);
  await updateDoc(ref, {
    status: 'pago',
    dataPagamento: toTimestamp(dataPagamento),
    atualizadoEm: serverTimestamp()
  });
}

export async function cancelarIndicacao(id, motivo, userId) {
  const ref = doc(db, 'indicacoes', id);
  await updateDoc(ref, {
    status: 'cancelado',
    motivoCancelamento: motivo,
    atualizadoEm: serverTimestamp()
  });
}

export async function excluirIndicacao(id, userId) {
  const ref = doc(db, 'indicacoes', id);
  const snap = await getDoc(ref);
  if (!snap.exists()) throw new Error('Indicação não encontrada.');
  
  const dado = snap.data();
  if (dado.status === 'pago') {
    throw new Error('Não é possível excluir uma indicação que já foi paga.');
  }

  await deleteDoc(ref);
}

export async function registrarDesligamento(id, dataDesligamento, userId) {
  const ref = doc(db, 'indicacoes', id);
  const snap = await getDoc(ref);
  if (!snap.exists()) throw new Error('Indicação não encontrada.');
  const dado = snap.data();
  const adm = dado.dataAdmissao.toDate();
  const deslig = new Date(dataDesligamento + 'T00:00:00');
  const dias = Math.floor((deslig - adm) / (1000 * 60 * 60 * 24));

  let novoStatus = dado.status;
  if (dias < 180 && dado.tipoContrato !== 'determinado') {
    novoStatus = 'colaborador_desligado';
  }

  await updateDoc(ref, {
    dataDesligamentoIndicado: toTimestamp(dataDesligamento),
    status: novoStatus,
    atualizadoEm: serverTimestamp()
  });
}

export async function getIndicacao(id) {
  const snap = await getDoc(doc(db, 'indicacoes', id));
  if (!snap.exists()) return null;
  return { id: snap.id, ...snap.data() };
}

export async function listarIndicacoes(filtros = {}) {
  let q = collection(db, 'indicacoes');
  const constraints = [orderBy('criadoEm', 'desc')];

  if (filtros.status && filtros.status !== 'todos') {
    constraints.unshift(where('status', '==', filtros.status));
  }

  q = query(q, ...constraints);
  const snap = await getDocs(q);
  let lista = snap.docs.map(d => ({ id: d.id, ...d.data() }));

  if (filtros.dataInicio) {
    const inicio = new Date(filtros.dataInicio + 'T00:00:00');
    lista = lista.filter(i => i.criadoEm?.toDate() >= inicio);
  }
  if (filtros.dataFim) {
    const fim = new Date(filtros.dataFim + 'T23:59:59');
    lista = lista.filter(i => i.criadoEm?.toDate() <= fim);
  }

  if (filtros.mesAdmissao) {
    const [ano, mes] = filtros.mesAdmissao.split('-').map(Number);
    lista = lista.filter(i => {
      if (!i.dataAdmissao) return false;
      const data = i.dataAdmissao.toDate ? i.dataAdmissao.toDate() : new Date(i.dataAdmissao);
      return data.getFullYear() === ano && (data.getMonth() + 1) === mes;
    });
  }

  const hoje = new Date();
  for (const ind of lista) {
    if (ind.status === 'previsto' && ind.previsaoPagamento) {
      const prev = ind.previsaoPagamento.toDate();
      if (prev <= hoje) {
        await updateDoc(doc(db, 'indicacoes', ind.id), {
          status: 'aguardando_pagamento',
          atualizadoEm: serverTimestamp()
        });
        ind.status = 'aguardando_pagamento';
      }
    }
  }

  return lista;
}

export const STATUS_LABELS = {
  previsto: 'Previsto',
  aguardando_pagamento: 'Aguardando Pagamento',
  pago: 'Pago',
  colaborador_desligado: 'Desligado Antes do Prazo',
  cancelado: 'Cancelado'
};

export const STATUS_COLORS = {
  previsto: '#3b82f6',
  aguardando_pagamento: '#f59e0b',
  pago: '#10b981',
  colaborador_desligado: '#ef4444',
  cancelado: '#6b7280'
};
