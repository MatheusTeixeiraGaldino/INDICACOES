#!/bin/bash

# Script de Setup - Sistema de Indicações
# Execute este script para configurar tudo automaticamente

echo "🏆 Sistema de Indicações - Setup Automático"
echo "==========================================="
echo ""

# Verificar se está na pasta correta
if [ ! -f "index.html" ]; then
    echo "❌ Erro: Execute este script na pasta raiz do projeto (onde está index.html)"
    exit 1
fi

echo "✅ Pasta correta detectada"
echo ""

# Verificar Git
if ! command -v git &> /dev/null; then
    echo "❌ Git não está instalado. Instale de https://git-scm.com"
    exit 1
fi

echo "✅ Git detectado"
echo ""

# Inicializar Git
if [ ! -d ".git" ]; then
    echo "📝 Inicializando repositório Git..."
    git init
    git add .
    git commit -m "Commit inicial - Sistema de Indicações"
    echo "✅ Repositório criado"
    echo ""
else
    echo "ℹ️ Git já foi inicializado"
    echo ""
fi

# Configurar Git (se necessário)
echo "🔧 Configurando Git..."
echo "Digite seu nome (ou pressione Enter para pular):"
read -r gitname
if [ -n "$gitname" ]; then
    git config user.name "$gitname"
fi

echo "Digite seu email (ou pressione Enter para pular):"
read -r gitemail
if [ -n "$gitemail" ]; then
    git config user.email "$gitemail"
fi

echo ""
echo "✅ Próximos passos:"
echo ""
echo "1️⃣ Execute:"
echo "   git push origin main"
echo ""
echo "2️⃣ Acesse https://vercel.com"
echo "   → Add Project"
echo "   → Selecione 'indicacoes'"
echo "   → Deploy"
echo ""
echo "3️⃣ Configure Firebase:"
echo "   → Publique firestore.rules"
echo "   → Crie usuário em Authentication"
echo "   → Registre em Firestore > usuarios"
echo ""
echo "4️⃣ Acesse seu site:"
echo "   https://indicacoes.vercel.app"
echo ""
echo "🎉 Sistema pronto para usar!"
