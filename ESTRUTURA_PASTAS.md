# 📂 ESTRUTURA DE PASTAS CORRETA

Seu projeto no GitHub deve ter a seguinte estrutura:

```
indicacoes/
│
├── index.html                    (Tela de login)
├── firebase-config.js            (Configuração Firebase)
├── auth.js                       (Autenticação)
├── indicacoes.js                 (Lógica de indicações)
├── main.css                      (Estilos)
├── firestore.rules               (Regras de segurança Firebase)
│
├── README.md                     (Documentação principal)
├── GUIA_PASSO_A_PASSO.md         (Este guia)
├── package.json                  (Metadados do projeto)
├── vercel.json                   (Config do Vercel)
├── .gitignore                    (O que não enviar pro GitHub)
│
└── (Adicione depois se precisar):
    ├── css/
    │   └── main.css              (Estilos - opcional se separado)
    └── pages/
        ├── cadastro.html
        ├── indicacoes.html
        ├── pagamentos.html
        └── relatorios.html
```

---

## ⚠️ IMPORTANTE

Os arquivos `.js` podem estar:

### Opção 1: Na raiz (mais simples)
```
indicacoes/
├── index.html
├── firebase-config.js
├── auth.js
├── indicacoes.js
└── main.css
```

### Opção 2: Em subpastas (mais organizado)
```
indicacoes/
├── index.html
├── css/
│   └── main.css
├── js/
│   ├── firebase-config.js
│   ├── auth.js
│   └── indicacoes.js
├── pages/
│   ├── dashboard.html
│   ├── cadastro.html
│   ├── indicacoes.html
│   ├── pagamentos.html
│   └── relatorios.html
```

---

## ✅ RECOMENDADO PARA VOCÊ

Use a **Opção 1 (raiz)** para começar! É mais simples.

Depois que tiver tudo funcionando, você pode reorganizar em pastas.

---

## 🚀 PASSO A PASSO

1. Crie uma pasta `indicacoes` no seu computador

2. Coloque todos estes arquivos dentro dela:
   - index.html
   - firebase-config.js
   - auth.js
   - indicacoes.js
   - main.css
   - firestore.rules
   - README.md
   - GUIA_PASSO_A_PASSO.md
   - package.json
   - vercel.json
   - .gitignore

3. Abra Terminal/Cmd nessa pasta

4. Execute:
```bash
git init
git add .
git commit -m "Upload inicial"
git push origin main
```

5. Configure Vercel para fazer deploy dessa pasta

---

**PRONTO! Seu site estará online!** 🎉
