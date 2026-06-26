# 📖 GUIA PASSO-A-PASSO - Sistema de Indicações

## VOCÊ JÁ TEM:
- ✅ Repositório GitHub: **INDICACOES**
- ✅ Projeto Firebase: **indicacao-ol**
- ✅ Projeto Vercel criado

---

## 📥 PASSO 1: Fazer Download dos Arquivos

1. Baixe todos os arquivos deste projeto
2. Crie uma pasta no seu computador chamada `indicacoes`
3. Coloque todos os arquivos lá

---

## 🔧 PASSO 2: Enviar para GitHub

1. Abra Terminal/Cmd na pasta `indicacoes`

2. Configure o Git (primeira vez apenas):
```bash
git config --global user.name "Seu Nome"
git config --global user.email "seu@email.com"
```

3. Prepare o repositório:
```bash
git add .
git commit -m "Upload inicial do sistema"
git push origin main
```

**Pronto! Os arquivos estão no GitHub!**

---

## 🌐 PASSO 3: Fazer Deploy no Vercel

1. Acesse https://vercel.com (faça login)

2. Clique em "Add New..." → "Project"

3. Procure seu repositório "indicacoes" e clique

4. Clique em "Deploy"

5. **Espere 2-3 minutos... Seu site estará ONLINE!** 🎉

Você receberá uma URL como:
```
https://indicacoes.vercel.app
```

---

## 🔐 PASSO 4: Configurar Firebase

### 4.1 - Atualizar Firestore Rules

1. Acesse: https://console.firebase.google.com
2. Selecione projeto **indicacao-ol**
3. Vá em **Firestore Database** → **Regras**
4. Copie TODO o conteúdo de `firestore.rules` deste projeto
5. Cole no Firebase
6. Clique em **Publicar**

### 4.2 - Criar Seu Usuário Admin

1. No Firebase Console, clique em **Authentication**
2. Clique em "Add User" (ou "Create user")
3. Preencha:
   - Email: `admin@empresa.com` (ou seu email)
   - Password: `SenhaForte123!`
4. Clique em **Create User**
5. **COPIE O UID** que apareceu (algo como: `abc123def456...`)

### 4.3 - Registrar no Firestore

1. **Firestore Database** → clique em "Start collection"
2. Nome: `usuarios`
3. Primeiro documento:
   - Document ID: **Cole o UID que copiou acima**
   - Clique em "Next"

4. Adicione estes campos:
   ```
   Campo: nome          | Tipo: string | Valor: Admin
   Campo: email         | Tipo: string | Valor: admin@empresa.com
   Campo: perfil        | Tipo: string | Valor: admin
   Campo: status        | Tipo: string | Valor: ativo
   Campo: senhaTemporaria | Tipo: boolean | Valor: false
   Campo: criadoEm      | Tipo: timestamp | Valor: (data/hora agora)
   ```

5. Clique em **Save**

---

## ✨ AGORA SIM!

Seu sistema está 100% funcional!

**Acesse:** https://indicacoes.vercel.app

**Login com:**
- Email: admin@empresa.com
- Senha: SenhaForte123!

---

## ➕ ADICIONAR MAIS USUÁRIOS

1. Firebase Console → **Authentication** → "Add User"
2. Email e senha → **Create User** → Copiar UID

3. Firestore → **usuarios** → "Add Document"
   - Document ID: Cole o UID
   - Preencha os campos (nome, email, perfil, status, senhaTemporaria, criadoEm)
   - Save

**Pronto! Novo usuário criado!**

---

## 🔄 FAZER ATUALIZAÇÕES

Sempre que fizer mudanças nos arquivos:

```bash
git add .
git commit -m "Descrição da mudança"
git push origin main
```

Vercel atualiza automaticamente em 1-2 minutos! ⚡

---

## 🆘 PROBLEMAS COMUNS

| Problema | Solução |
|----------|---------|
| "Usuário não encontrado" | Verifique se criou o documento em `usuarios` com o UID correto |
| "Erro de autenticação" | Publique as Firestore Rules |
| "Página em branco" | Espere deploy do Vercel terminar, limpe cache (Ctrl+F5) |
| Mudanças não aparecem | Verifique em vercel.com se deployment foi bem-sucedido |

---

## 📚 PRÓXIMOS PASSOS

- Editar `index.html` para mudar o título
- Adicionar logo próprio
- Customizar cores do `css/main.css`
- Adicionar mais páginas conforme necessário

**Tudo é possível! Qualquer mudança no código aparece automaticamente.**

---

## 🎓 APRENDER MAIS

Este sistema usa:
- **HTML** - Estrutura das páginas
- **CSS** - Estilos e aparência
- **JavaScript** - Lógica do sistema
- **Firebase** - Banco de dados e autenticação
- **Vercel** - Hospedagem na nuvem

Todos totalmente online, sem instalar nada no seu computador!

---

**Sucesso! 🚀**
