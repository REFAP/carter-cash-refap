# Landing Page Carter-Cash × Re-FAP

## 🚀 Description
Landing page de conversion pour le service de nettoyage FAP disponible dans tous les magasins Carter-Cash de France.

## ✨ Fonctionnalités
- ✅ Recherche de magasins par code postal/ville
- ✅ Distinction entre magasins équipés (4h) et standards (48h)
- ✅ Formulaire de génération de leads
- ✅ Design responsive mobile-first
- ✅ Animations au scroll
- ✅ SEO optimisé
- ✅ Performance optimisée (< 2s chargement)

## 📁 Structure du projet
```
carter-cash-refap/
├── index.html              # Page principale
├── assets/
│   ├── css/
│   │   └── styles.css     # Styles CSS
│   ├── js/
│   │   └── main.js        # JavaScript
│   ├── images/
│   │   ├── fap-hero.jpg   # Image principale
│   │   ├── logo-refap.svg # Logo Re-FAP
│   │   └── logo-carter-cash.svg
│   └── icons/
│       └── favicon.ico    # Favicon
├── README.md              # Documentation
└── .gitignore            # Fichiers à ignorer
```

## 🛠️ Installation

### 1. Cloner le repository
```bash
git clone https://github.com/REFAP/carter-cash-refap.git
cd carter-cash-refap
```

### 2. Ouvrir en local
```bash
# Avec Python (si installé)
python -m http.server 8000
# Puis ouvrir http://localhost:8000

# Ou avec Node.js (si installé)
npx http-server
# Puis ouvrir http://localhost:8080

# Ou simplement ouvrir index.html dans votre navigateur
```

## 🚀 Déploiement sur GitHub Pages

### Méthode 1 : Via l'interface GitHub
1. Allez dans Settings → Pages
2. Source : Deploy from a branch
3. Branch : main / (root)
4. Save
5. Votre site sera disponible à : `https://refap.github.io/carter-cash-refap/`

### Méthode 2 : Via la ligne de commande
```bash
# Créer et pousser sur GitHub
git add .
git commit -m "Initial commit - Landing page Carter-Cash"
git branch -M main
git remote add origin https://github.com/REFAP/carter-cash-refap.git
git push -u origin main

# Activer GitHub Pages depuis les Settings
```

## 📝 Configuration

### API Backend
Modifier la configuration dans `assets/js/main.js` :
```javascript
const CONFIG = {
    API_URL: 'https://api.re-fap.fr', // Votre API
    PHONE_NUMBER: '0800737327',
    RESPONSE_TIME: 2, // heures
};
```

### Ajouter des magasins
Dans `assets/js/main.js`, compléter la base de données :
```javascript
const STORES_DATABASE = {
    equipped: [
        // Magasins avec machine Re-FAP
    ],
    standard: [
        // Autres magasins
    ]
};
```

## 🎨 Personnalisation

### Couleurs
Modifier les variables CSS dans `assets/css/styles.css` :
```css
:root {
    --primary: #00a651;        /* Vert Carter-Cash */
    --secondary: #ff6b35;      /* Orange accent */
    /* ... */
}
```

### Images
Remplacer les images dans `assets/images/` :
- `fap-hero.jpg` : Image principale (1920x1080px recommandé)
- `logo-refap.svg` : Logo Re-FAP
- `logo-carter-cash.svg` : Logo Carter-Cash
- `og-image.jpg` : Image pour réseaux sociaux (1200x630px)

## 📊 Analytics

### Google Analytics
Ajouter avant `</head>` dans index.html :
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-XXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'UA-XXXXXXXXX');
</script>
```

### Facebook Pixel
Ajouter avant `</head>` :
```html
<!-- Facebook Pixel -->
<script>
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', 'YOUR_PIXEL_ID');
  fbq('track', 'PageView');
</script>
```

## 📧 Intégration Email

### Webhook Zapier/Make
Remplacer la fonction `sendFormData` dans main.js :
```javascript
async function sendFormData(data) {
    return fetch('https://hooks.zapier.com/hooks/catch/.../', {
        method: 'POST',
        body: JSON.stringify(data)
    });
}
```

## 🔧 Maintenance

### Vérifier les performances
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)
- [WebPageTest](https://www.webpagetest.org/)

### Tester le responsive
- Chrome DevTools (F12)
- [Responsinator](http://www.responsinator.com/)
- [BrowserStack](https://www.browserstack.com/)

## 📈 KPIs à suivre
- Taux de conversion formulaire
- Temps passé sur la page
- Taux de rebond
- Nombre de clics sur "Appeler"
- Nombre de recherches de magasins

## 🤝 Support
- Email : contact@re-fap.fr
- Téléphone : 0800 737 327
- Site web : https://re-fap.fr

## 📄 Licence
© 2024 Re-FAP × Carter-Cash. Tous droits réservés.

---
Développé avec ❤️ par Re-FAP
