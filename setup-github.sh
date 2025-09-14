#!/bin/bash

# ================================================
# Script d'initialisation Git et GitHub
# Landing Page Carter-Cash Re-FAP
# ================================================

echo "🚀 Initialisation du projet Carter-Cash Re-FAP"
echo "=============================================="

# Couleurs pour l'affichage
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Vérifier si Git est installé
if ! command -v git &> /dev/null; then
    echo -e "${RED}❌ Git n'est pas installé. Veuillez l'installer d'abord.${NC}"
    exit 1
fi

# Vérifier si on est déjà dans un repo Git
if [ -d .git ]; then
    echo -e "${YELLOW}⚠️  Un repository Git existe déjà.${NC}"
    read -p "Voulez-vous le réinitialiser ? (y/n) " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        rm -rf .git
        echo -e "${GREEN}✅ Repository Git supprimé${NC}"
    else
        echo "Annulation..."
        exit 0
    fi
fi

# Initialiser Git
echo -e "${GREEN}📁 Initialisation de Git...${NC}"
git init

# Configurer Git (optionnel)
read -p "Voulez-vous configurer votre nom et email Git ? (y/n) " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    read -p "Entrez votre nom : " git_name
    read -p "Entrez votre email : " git_email
    git config user.name "$git_name"
    git config user.email "$git_email"
    echo -e "${GREEN}✅ Configuration Git mise à jour${NC}"
fi

# Ajouter tous les fichiers
echo -e "${GREEN}📝 Ajout des fichiers...${NC}"
git add .

# Premier commit
echo -e "${GREEN}💾 Création du premier commit...${NC}"
git commit -m "🚀 Initial commit - Landing page Carter-Cash Re-FAP

- Structure HTML complète avec SEO optimisé
- Design CSS responsive mobile-first
- JavaScript pour recherche de magasins et formulaire
- Documentation complète
- Assets et images placeholder"

# Renommer la branche en main
git branch -M main

# Configuration GitHub
echo
echo -e "${YELLOW}🔗 Configuration GitHub${NC}"
echo "================================"
echo
read -p "Avez-vous déjà créé le repository sur GitHub ? (y/n) " -n 1 -r
echo

if [[ $REPLY =~ ^[Nn]$ ]]; then
    echo
    echo -e "${YELLOW}📋 Instructions pour créer le repository :${NC}"
    echo "1. Allez sur https://github.com/new"
    echo "2. Nom du repository : carter-cash-refap"
    echo "3. Description : Landing page Carter-Cash Re-FAP"
    echo "4. Visibilité : Public (pour GitHub Pages)"
    echo "5. NE PAS initialiser avec README (on l'a déjà)"
    echo "6. Cliquez sur 'Create repository'"
    echo
    read -p "Appuyez sur Entrée une fois le repository créé..." -n 1 -r
    echo
fi

# Ajouter l'origine distante
read -p "Entrez votre nom d'utilisateur GitHub : " github_username
remote_url="https://github.com/${github_username}/carter-cash-refap.git"

echo -e "${GREEN}🔗 Ajout de l'origine distante...${NC}"
git remote add origin $remote_url

# Pousser vers GitHub
echo -e "${GREEN}🚀 Envoi vers GitHub...${NC}"
git push -u origin main

if [ $? -eq 0 ]; then
    echo
    echo -e "${GREEN}✅ Projet poussé avec succès sur GitHub !${NC}"
    echo
    echo -e "${YELLOW}📋 Prochaines étapes :${NC}"
    echo "================================"
    echo "1. Activer GitHub Pages :"
    echo "   - Allez dans Settings → Pages"
    echo "   - Source : Deploy from a branch"
    echo "   - Branch : main / (root)"
    echo "   - Cliquez sur Save"
    echo
    echo "2. Votre site sera disponible à :"
    echo "   https://${github_username}.github.io/carter-cash-refap/"
    echo
    echo "3. Remplacez les images placeholder dans assets/images/"
    echo
    echo "4. Configurez votre API dans assets/js/main.js"
    echo
    echo -e "${GREEN}✨ Félicitations ! Votre projet est prêt !${NC}"
else
    echo
    echo -e "${RED}❌ Erreur lors du push vers GitHub${NC}"
    echo "Vérifiez :"
    echo "- Votre connexion internet"
    echo "- Vos identifiants GitHub"
    echo "- Que le repository existe sur GitHub"
    echo
    echo "Pour réessayer :"
    echo "git push -u origin main"
fi
