# 🏆 Sistema de Indicações - Firebase + Vercel

Um sistema completo de gerenciamento de indicações com premiação, totalmente online sem necessidade de instalar nada.

## ⚡ Setup Rápido (3 passos)

### 1️⃣ Clonar do GitHub
```bash
git clone https://github.com/SEU_USUARIO/indicacoes.git
cd indicacoes
```

### 2️⃣ Fazer primeiro commit
```bash
git add .
git commit -m "Setup inicial"
git push origin main
```

### 3️⃣ Deploy no Vercel
1. Acesse https://vercel.com
2. Clique em "Add New Project"
3. Selecione seu repositório "indicacoes"
4. Clique em "Deploy"
5. **Pronto! Seu site está online!** 🎉

---

## 🔧 Configurar Firebase (Uma vez)

### No Firebase Console (https://console.firebase.google.com)

#### 1. Adicionar Firestore Rules
1. Firestore Database → **Regras**
2. Copiar todo conteúdo de `firestore.rules` deste projeto
3. Colar no Firebase Console e **Publicar**

#### 2. Criar Primeiro Usuário
1. **Authentication** → Clique em "Add User"
2. Preencha com seu email e senha (ex: admin@empresa.com / Senha123!)
3. Clique em "Create User"

#### 3. Registrar Usuário no Firestore
1. **Firestore Database** → **Coleção**
2. Clique em "Create collection" → nome: `usuarios`
3. Clique em "Add document"
4. ID do documento = **UID que apareceu na autenticação** (copiar exatamente)
5. Adicione estes campos:
   ```
   nome: "Seu Nome"
   email: "admin@empresa.com"
   perfil: "admin"
   status: "ativo"
   senhaTemporaria: false
   criadoEm: (timestamp agora)
   ```
6. Clique em "Salvar"

---

## 🌐 Acessar Seu Sistema

Depois que tudo estiver configurado:

**URL:** https://indicacoes.vercel.app

(Ou qualquer domínio customizado que você configure)

**Login com:**
- Email: admin@empresa.com
- Senha: Sua senha

---

## 📝 Criar Mais Usuários

### Para adicionar novos usuários:

1. **Firebase Console** → **Authentication**
   - Clique em "Add User"
   - Email e Senha
   - Copiar o UID gerado

2. **Firestore** → **Coleção usuarios**
   - New Document
   - ID = UID copiado
   - Dados:
   ```
   nome: "Nome do Usuário"
   email: "email@empresa.com"
   perfil: "usuario" ou "admin"
   status: "ativo"
   senhaTemporaria: false
   criadoEm: (agora)
   ```

---

## 🚀 Atualizar o Sistema

Sempre que fizer alterações:

```bash
git add .
git commit -m "Descrição da mudança"
git push origin main
```

Vercel faz deploy automático em 1-2 minutos. Sem necessidade de fazer nada manualmente.

---

## 📱 Funcionalidades

✅ **Login/Logout** - Autenticação com Firebase  
✅ **Dashboard** - Visão geral do sistema  
✅ **Indicações** - Criar, editar, listar indicações  
✅ **Pagamentos** - Registrar pagamentos  
✅ **Relatórios** - Gerar relatórios por período  
✅ **Cálculo Automático** - Previsão de pagamento em 180 dias  

---

## 🆘 Troubleshooting

### "Usuário não encontrado no sistema"
- Confirme que o usuário existe em `Firestore > usuarios`
- Verifique se o ID do documento é igual ao UID do Auth

### "Erro de autenticação"
- Confirme que as Firestore Rules estão publicadas
- Recarregue a página (F5)

### Mudanças não aparecem
- Vercel pode levar 1-2 minutos para fazer deploy
- Verifique em https://vercel.com/indicacoes/deployments

---

## 📚 Estrutura de Arquivos

```
/
├── index.html                 (Login)
├── cadastro.html              (Nova indicação)
├── indicacoes.html            (Listar indicações)
├── pagamentos.html            (Registrar pagamentos)
├── relatorios.html            (Relatórios)
├── css/
│   └── main.css              (Estilos)
├── firebase-config.js         (Config Firebase)
├── auth.js                    (Autenticação)
├── indicacoes.js              (Lógica de indicações)
└── firestore.rules            (Regras de segurança)
```

---

## 🔐 Segurança

- Autenticação via Firebase Auth
- Senhas criptografadas pelo Firebase
- Firestore Rules controlam acesso aos dados
- Todos os dados ficam no Brasil (Google Cloud)

---

## 💬 Suporte

Para mais informações:
- Firebase: https://firebase.google.com/docs
- Vercel: https://vercel.com/docs
- JavaScript ES6 Modules: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Modules

---

**Versão 1.0 | 2024**
