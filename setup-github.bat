@echo off
REM ================================================
REM Script d'initialisation Git et GitHub (Windows)
REM Landing Page Carter-Cash Re-FAP
REM ================================================

echo.
echo ========================================
echo  Initialisation Carter-Cash Re-FAP
echo ========================================
echo.

REM Verifier si Git est installe
where git >nul 2>nul
if %errorlevel% neq 0 (
    echo [ERREUR] Git n'est pas installe.
    echo Telechargez-le depuis: https://git-scm.com/download/win
    pause
    exit /b 1
)

REM Verifier si on est deja dans un repo Git
if exist .git (
    echo [ATTENTION] Un repository Git existe deja.
    set /p response="Voulez-vous le reinitialiser? (o/n): "
    if /i "%response%"=="o" (
        rmdir /s /q .git
        echo [OK] Repository Git supprime
    ) else (
        echo Annulation...
        pause
        exit /b 0
    )
)

REM Initialiser Git
echo.
echo [1/5] Initialisation de Git...
git init

REM Configurer Git (optionnel)
set /p config="Voulez-vous configurer votre nom et email Git? (o/n): "
if /i "%config%"=="o" (
    set /p gitname="Entrez votre nom: "
    set /p gitemail="Entrez votre email: "
    git config user.name "%gitname%"
    git config user.email "%gitemail%"
    echo [OK] Configuration Git mise a jour
)

REM Ajouter tous les fichiers
echo.
echo [2/5] Ajout des fichiers...
git add .

REM Premier commit
echo.
echo [3/5] Creation du premier commit...
git commit -m "Initial commit - Landing page Carter-Cash Re-FAP"

REM Renommer la branche en main
git branch -M main

REM Configuration GitHub
echo.
echo ========================================
echo  Configuration GitHub
echo ========================================
echo.
set /p created="Avez-vous deja cree le repository sur GitHub? (o/n): "

if /i "%created%"=="n" (
    echo.
    echo Instructions pour creer le repository :
    echo.
    echo 1. Allez sur https://github.com/new
    echo 2. Nom du repository : carter-cash-refap
    echo 3. Description : Landing page Carter-Cash Re-FAP
    echo 4. Visibilite : Public ^(pour GitHub Pages^)
    echo 5. NE PAS initialiser avec README
    echo 6. Cliquez sur 'Create repository'
    echo.
    pause
)

REM Ajouter l'origine distante
echo.
set /p username="Entrez votre nom d'utilisateur GitHub: "
set remote=https://github.com/%username%/carter-cash-refap.git

echo.
echo [4/5] Ajout de l'origine distante...
git remote add origin %remote%

REM Pousser vers GitHub
echo.
echo [5/5] Envoi vers GitHub...
git push -u origin main

if %errorlevel% equ 0 (
    echo.
    echo ========================================
    echo  SUCCES ! Projet sur GitHub
    echo ========================================
    echo.
    echo Prochaines etapes :
    echo.
    echo 1. Activer GitHub Pages :
    echo    - Settings → Pages
    echo    - Source : Deploy from a branch
    echo    - Branch : main / ^(root^)
    echo    - Save
    echo.
    echo 2. Votre site sera disponible a :
    echo    https://%username%.github.io/carter-cash-refap/
    echo.
    echo 3. Remplacez les images dans assets/images/
    echo.
    echo 4. Configurez votre API dans assets/js/main.js
    echo.
) else (
    echo.
    echo [ERREUR] Probleme lors du push vers GitHub
    echo.
    echo Verifiez :
    echo - Votre connexion internet
    echo - Vos identifiants GitHub
    echo - Que le repository existe
    echo.
    echo Pour reessayer : git push -u origin main
)

pause
