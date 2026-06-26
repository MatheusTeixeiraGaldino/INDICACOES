# ⚡ GUIA RÁPIDO - Comandos Principais

## 🚀 Primeiros Passos

### 1. Enviar código para GitHub
```bash
cd sua_pasta_indicacoes
git add .
git commit -m "mensagem do que foi alterado"
git push origin main
```

### 2. Vercel atualiza automaticamente!
Aguarde 1-2 minutos... seu site está online!

---

## 🔑 Chaves do Firebase (JÁ CONFIGURADO)

Seu projeto usa:
- **Project ID:** indicacao-ol
- **API Key:** AIzaSyCWSKibWwaeszD-PAg5i-2HZ-nV4wJcJ0Q

*(Essas chaves estão salvas em `firebase-config.js`)*

---

## 📝 Arquivos Importantes

| Arquivo | O que faz |
|---------|----------|
| `index.html` | Tela de login |
| `firebase-config.js` | Conexão com Firebase |
| `auth.js` | Autenticação de usuários |
| `indicacoes.js` | Lógica de indicações |
| `main.css` | Estilos e aparência |
| `firestore.rules` | Segurança do banco de dados |

---

## 🔐 Usuário de Teste

**Email:** admin@empresa.com  
**Senha:** SenhaForte123!

(Use para testar o sistema)

---

## 🎯 Workflow Recomendado

1. **Fazer mudanças nos arquivos** (HTML, CSS, JS)
2. **Fazer commit:**
   ```bash
   git add .
   git commit -m "Descrição da mudança"
   git push origin main
   ```
3. **Acessar:** https://indicacoes.vercel.app
4. **Recarregar página** (Ctrl+F5 ou Cmd+Shift+R)
5. **Ver mudanças aparecerem!**

---

## 🛠️ Editar Cores/Design

Todos os estilos estão em `main.css`

Procure por:
```css
:root {
  --primary: #1a7f37;      /* Verde primário */
  --accent: #0969da;       /* Azul acentuação */
  --danger: #cf222e;       /* Vermelho perigo */
  /* ... mais cores */
}
```

---

## ➕ Adicionar Nova Página

1. Crie arquivo `novoArquivo.html`
2. Use como template:
```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Nova Página</title>
  <link rel="stylesheet" href="../css/main.css">
</head>
<body>
  <div class="app-layout">
    <!-- Sidebar igual às outras páginas -->
    <!-- ... conteúdo ... -->
  </div>
  <script type="module">
    import { requireAuth, logout } from '../auth.js';
    const user = requireAuth();
    // seu código aqui
  </script>
</body>
</html>
```

---

## 🚨 Erros Comuns

| Erro | Causa | Solução |
|------|-------|--------|
| "Módulo não encontrado" | Caminho de import errado | Verifique `import from ...` |
| "Usuário não autenticado" | Firestore Rules não publicadas | Publique as regras no Firebase |
| Mudanças não aparecem | Cache do navegador | Ctrl+F5 ou limpe cache |
| "Erro 404" | Página não existe | Verifique o caminho do URL |

---

## 📞 Links Úteis

- **Firebase Console:** https://console.firebase.google.com
- **Vercel Dashboard:** https://vercel.com/dashboard
- **GitHub:** https://github.com/seu_usuario/indicacoes
- **Seu Site:** https://indicacoes.vercel.app

---

## ✅ Checklist de Setup

- [ ] Arquivos no GitHub
- [ ] Vercel fazendo deploy
- [ ] Firebase Rules publicadas
- [ ] Usuário admin criado no Firebase
- [ ] Documento em Firestore/usuarios
- [ ] Login funcionando
- [ ] Consegue acessar as páginas

---

**Qualquer dúvida, reimporte os arquivos e comece novamente!**

Não há risco, tudo está na nuvem. 🌐
