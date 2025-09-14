/**
 * CARTER-CASH RE-FAP - JavaScript Principal
 * ==========================================
 */

// Configuration
const CONFIG = {
    API_URL: 'https://api.re-fap.fr', // À remplacer par votre vraie API
    PHONE_NUMBER: '0800737327',
    RESPONSE_TIME: 2, // heures
};

// Base de données des magasins (à compléter avec les vrais données)
const STORES_DATABASE = {
    equipped: [
        {
            id: 1,
            name: "Paris Nord",
            address: "123 Avenue de la République",
            city: "Paris",
            postal: "75019",
            phone: "01 45 67 89 00",
            hours: "Lun-Sam: 9h-19h, Dim: 10h-18h",
            lat: 48.8848,
            lng: 2.3789
        },
        {
            id: 2,
            name: "Lyon Vénissieux",
            address: "456 Boulevard Laurent Bonnevay",
            city: "Vénissieux",
            postal: "69200",
            phone: "04 78 90 12 34",
            hours: "Lun-Sam: 9h-19h30",
            lat: 45.6978,
            lng: 4.8851
        },
        {
            id: 3,
            name: "Marseille La Valentine",
            address: "789 Route de la Sablière",
            city: "Marseille",
            postal: "13011",
            phone: "04 91 23 45 67",
            hours: "Lun-Sam: 8h30-19h30",
            lat: 43.2865,
            lng: 5.4834
        },
        {
            id: 4,
            name: "Toulouse Balma",
            address: "321 Avenue des Arènes",
            city: "Balma",
            postal: "31130",
            phone: "05 61 78 90 12",
            hours: "Lun-Sam: 9h-19h",
            lat: 43.6117,
            lng: 1.4992
        },
        {
            id: 5,
            name: "Lille Seclin",
            address: "654 Rue de l'Épinette",
            city: "Seclin",
            postal: "59113",
            phone: "03 20 34 56 78",
            hours: "Lun-Sam: 9h-19h30",
            lat: 50.5469,
            lng: 3.0298
        },
        {
            id: 6,
            name: "Nantes Saint-Herblain",
            address: "987 Route de Vannes",
            city: "Saint-Herblain",
            postal: "44800",
            phone: "02 40 12 34 56",
            hours: "Lun-Sam: 9h-19h",
            lat: 47.2173,
            lng: -1.6502
        },
        {
            id: 7,
            name: "Bordeaux Mérignac",
            address: "147 Avenue de l'Aéroport",
            city: "Mérignac",
            postal: "33700",
            phone: "05 56 78 90 12",
            hours: "Lun-Sam: 9h-19h30",
            lat: 44.8333,
            lng: -0.6967
        },
        {
            id: 8,
            name: "Strasbourg Illkirch",
            address: "258 Route de Lyon",
            city: "Illkirch-Graffenstaden",
            postal: "67400",
            phone: "03 88 90 12 34",
            hours: "Lun-Sam: 9h-19h",
            lat: 48.5297,
            lng: 7.7139
        },
        {
            id: 9,
            name: "Nice Saint-Laurent",
            address: "369 Boulevard du Mercantour",
            city: "Nice",
            postal: "06200",
            phone: "04 93 45 67 89",
            hours: "Lun-Sam: 9h-19h",
            lat: 43.6753,
            lng: 7.2003
        },
        {
            id: 10,
            name: "Rennes Chantepie",
            address: "741 Rue du Général de Gaulle",
            city: "Chantepie",
            postal: "35135",
            phone: "02 99 67 89 01",
            hours: "Lun-Sam: 9h-19h30",
            lat: 48.0883,
            lng: -1.6157
        }
    ],
    standard: [] // Les autres magasins seront ajoutés ici
};

// État de l'application
const state = {
    currentSearch: '',
    selectedStore: null,
    formData: {},
    searchResults: []
};

// Initialisation au chargement de la page
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Carter-Cash Re-FAP - Application initialisée');
    
    // Initialiser les événements
    initializeEventListeners();
    
    // Animer les éléments au scroll
    initializeScrollAnimations();
    
    // Initialiser le formulaire
    initializeForm();
    
    // Charger les données si nécessaire
    loadInitialData();
});

/**
 * Initialisation des écouteurs d'événements
 */
function initializeEventListeners() {
    // Boutons de navigation smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Recherche de magasins - Écouter l'entrée
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                searchStores();
            }
        });
        
        // Recherche en temps réel après 300ms d'inactivité
        let searchTimeout;
        searchInput.addEventListener('input', function(e) {
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(() => {
                if (e.target.value.length >= 2) {
                    searchStores();
                }
            }, 300);
        });
    }
}

/**
 * Recherche de magasins
 */
function searchStores() {
    const input = document.getElementById('search-input');
    const resultsContainer = document.getElementById('search-results');
    const searchTerm = input.value.trim().toLowerCase();
    
    if (!searchTerm) {
        resultsContainer.innerHTML = `
            <div class="search-message">
                <p>⬆️ Entrez votre code postal ou ville pour trouver un magasin</p>
            </div>
        `;
        return;
    }
    
    // Simuler un chargement
    resultsContainer.innerHTML = `
        <div class="search-loading">
            <p>🔍 Recherche en cours...</p>
        </div>
    `;
    
    // Rechercher dans la base de données
    setTimeout(() => {
        const results = searchInDatabase(searchTerm);
        displaySearchResults(results);
    }, 500);
}

/**
 * Recherche dans la base de données
 */
function searchInDatabase(term) {
    const allStores = [...STORES_DATABASE.equipped];
    
    return allStores.filter(store => {
        return store.postal.startsWith(term) ||
               store.city.toLowerCase().includes(term) ||
               store.name.toLowerCase().includes(term);
    });
}

/**
 * Affichage des résultats de recherche
 */
function displaySearchResults(results) {
    const resultsContainer = document.getElementById('search-results');
    
    if (results.length === 0) {
        resultsContainer.innerHTML = `
            <div class="search-message">
                <p>😕 Aucun magasin trouvé pour cette recherche</p>
                <p>Essayez avec un autre code postal ou ville</p>
                <a href="https://www.carter-cash.com/magasins/" target="_blank" class="btn btn-outline btn-sm">
                    Voir tous les magasins →
                </a>
            </div>
        `;
        return;
    }
    
    let html = '<div class="results-list">';
    
    results.forEach(store => {
        const isEquipped = STORES_DATABASE.equipped.includes(store);
        html += `
            <div class="store-result ${isEquipped ? 'equipped' : ''}" data-store-id="${store.id}">
                <div class="store-info">
                    <h4>${store.name} ${isEquipped ? '<span class="badge">⚡ EXPRESS 4h</span>' : ''}</h4>
                    <p>📍 ${store.address}, ${store.postal} ${store.city}</p>
                    <p>📞 ${store.phone}</p>
                    <p>🕐 ${store.hours}</p>
                    ${isEquipped ? '<p class="store-price">💰 Tarif: 99-149€</p>' : '<p class="store-price">💰 Tarif: 199€ (port inclus)</p>'}
                </div>
                <div class="store-actions">
                    <a href="tel:${store.phone.replace(/\s/g, '')}" class="btn btn-primary btn-sm">
                        Appeler
                    </a>
                    <button onclick="showDirections(${store.lat}, ${store.lng})" class="btn btn-outline btn-sm">
                        Itinéraire
                    </button>
                    <button onclick="selectStore(${store.id})" class="btn btn-secondary btn-sm">
                        Choisir
                    </button>
                </div>
            </div>
        `;
    });
    
    html += '</div>';
    resultsContainer.innerHTML = html;
    
    // Animer l'apparition des résultats
    document.querySelectorAll('.store-result').forEach((el, index) => {
        setTimeout(() => {
            el.classList.add('animate-in');
        }, index * 100);
    });
}

/**
 * Afficher les magasins équipés
 */
function showEquippedStores() {
    const resultsContainer = document.getElementById('search-results');
    const searchInput = document.getElementById('search-input');
    
    searchInput.value = '';
    displaySearchResults(STORES_DATABASE.equipped);
    
    // Scroll vers la section
    document.getElementById('trouver-magasin').scrollIntoView({
        behavior: 'smooth'
    });
}

/**
 * Afficher l'itinéraire
 */
function showDirections(lat, lng) {
    // Ouvrir Google Maps avec les coordonnées
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`, '_blank');
}

/**
 * Sélectionner un magasin
 */
function selectStore(storeId) {
    const store = STORES_DATABASE.equipped.find(s => s.id === storeId);
    if (store) {
        state.selectedStore = store;
        
        // Pré-remplir le code postal dans le formulaire
        const postalInput = document.getElementById('postal');
        if (postalInput) {
            postalInput.value = store.postal;
        }
        
        // Afficher une notification
        showNotification(`✅ ${store.name} sélectionné`);
        
        // Scroll vers le formulaire
        document.getElementById('devis').scrollIntoView({
            behavior: 'smooth'
        });
    }
}

/**
 * Initialisation du formulaire
 */
function initializeForm() {
    const form = document.getElementById('quote-form');
    if (!form) return;
    
    form.addEventListener('submit', handleFormSubmit);
    
    // Validation en temps réel
    const inputs = form.querySelectorAll('input[required], select[required]');
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            validateField(this);
        });
    });
    
    // Format du téléphone
    const phoneInput = document.getElementById('phone');
    if (phoneInput) {
        phoneInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\s/g, '');
            if (value.length > 2) {
                value = value.match(/.{1,2}/g).join(' ');
            }
            e.target.value = value;
        });
    }
}

/**
 * Validation d'un champ
 */
function validateField(field) {
    const isValid = field.checkValidity();
    
    if (!isValid) {
        field.classList.add('error');
        showFieldError(field);
    } else {
        field.classList.remove('error');
        hideFieldError(field);
    }
    
    return isValid;
}

/**
 * Afficher l'erreur d'un champ
 */
function showFieldError(field) {
    // Supprimer l'erreur existante
    hideFieldError(field);
    
    const error = document.createElement('span');
    error.className = 'field-error';
    error.textContent = field.validationMessage || 'Ce champ est requis';
    
    field.parentNode.appendChild(error);
}

/**
 * Masquer l'erreur d'un champ
 */
function hideFieldError(field) {
    const error = field.parentNode.querySelector('.field-error');
    if (error) {
        error.remove();
    }
}

/**
 * Gestion de la soumission du formulaire
 */
async function handleFormSubmit(e) {
    e.preventDefault();
    
    const form = e.target;
    const submitButton = form.querySelector('button[type="submit"]');
    
    // Valider tous les champs
    const inputs = form.querySelectorAll('input[required], select[required]');
    let isValid = true;
    
    inputs.forEach(input => {
        if (!validateField(input)) {
            isValid = false;
        }
    });
    
    if (!isValid) {
        showNotification('❌ Veuillez corriger les erreurs', 'error');
        return;
    }
    
    // Collecter les données
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    
    // Ajouter le magasin sélectionné
    if (state.selectedStore) {
        data.store = state.selectedStore.name;
        data.storeId = state.selectedStore.id;
    }
    
    // Désactiver le bouton
    submitButton.disabled = true;
    submitButton.innerHTML = '⏳ Envoi en cours...';
    
    try {
        // Simuler l'envoi (remplacer par votre vraie API)
        await sendFormData(data);
        
        // Succès
        showSuccessMessage(form);
        
        // Tracking (si Google Analytics est installé)
        if (typeof gtag !== 'undefined') {
            gtag('event', 'generate_lead', {
                'event_category': 'engagement',
                'event_label': 'quote_form'
            });
        }
        
    } catch (error) {
        console.error('Erreur lors de l\'envoi:', error);
        showNotification('❌ Une erreur est survenue. Veuillez réessayer.', 'error');
        
        // Réactiver le bouton
        submitButton.disabled = false;
        submitButton.innerHTML = 'Recevoir mon devis gratuit →';
    }
}

/**
 * Envoi des données du formulaire
 */
async function sendFormData(data) {
    // Simuler un appel API
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Pour la démo, on simule toujours un succès
            console.log('📧 Données envoyées:', data);
            
            // Enregistrer dans localStorage pour la démo
            const leads = JSON.parse(localStorage.getItem('carter_cash_leads') || '[]');
            leads.push({
                ...data,
                timestamp: new Date().toISOString()
            });
            localStorage.setItem('carter_cash_leads', JSON.stringify(leads));
            
            resolve({ success: true, id: Date.now() });
            
            // Pour une vraie API:
            // fetch(`${CONFIG.API_URL}/leads`, {
            //     method: 'POST',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify(data)
            // })
            // .then(response => response.json())
            // .then(resolve)
            // .catch(reject);
        }, 1500);
    });
}

/**
 * Afficher le message de succès
 */
function showSuccessMessage(form) {
    const originalContent = form.innerHTML;
    
    form.innerHTML = `
        <div class="success-message animate-in">
            <h3>✅ Demande envoyée avec succès !</h3>
            <p>Nous vous recontacterons dans les ${CONFIG.RESPONSE_TIME} heures.</p>
            <p>Un email de confirmation a été envoyé.</p>
            <div style="margin-top: 2rem;">
                <a href="tel:${CONFIG.PHONE_NUMBER}" class="btn btn-white btn-lg">
                    📞 Appeler maintenant
                </a>
            </div>
        </div>
    `;
    
    // Réinitialiser le formulaire après 10 secondes
    setTimeout(() => {
        form.innerHTML = originalContent;
        initializeForm();
        showNotification('📝 Formulaire réinitialisé');
    }, 10000);
}

/**
 * Afficher une notification
 */
function showNotification(message, type = 'success') {
    // Supprimer les notifications existantes
    const existing = document.querySelector('.notification');
    if (existing) {
        existing.remove();
    }
    
    // Créer la notification
    const notification = document.createElement('div');
    notification.className = `notification notification-${type} animate-in`;
    notification.innerHTML = message;
    
    // Styles CSS inline pour la notification
    notification.style.cssText = `
        position: fixed;
        top: 80px;
        right: 20px;
        background: ${type === 'error' ? '#dc3545' : '#28a745'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 9999;
        max-width: 300px;
        animation: slideIn 0.3s ease-out;
    `;
    
    document.body.appendChild(notification);
    
    // Supprimer après 5 secondes
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => notification.remove(), 300);
    }, 5000);
}

/**
 * Animations au scroll
 */
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observer les éléments
    document.querySelectorAll('.process-card, .type-card, .faq-item').forEach(el => {
        observer.observe(el);
    });
}

/**
 * Chargement des données initiales
 */
function loadInitialData() {
    // Vérifier si on a des paramètres dans l'URL
    const urlParams = new URLSearchParams(window.location.search);
    
    // Pré-remplir le code postal si présent
    const postal = urlParams.get('cp');
    if (postal) {
        const searchInput = document.getElementById('search-input');
        if (searchInput) {
            searchInput.value = postal;
            searchStores();
        }
    }
    
    // Pré-sélectionner un magasin si ID présent
    const storeId = urlParams.get('store');
    if (storeId) {
        selectStore(parseInt(storeId));
    }
}

/**
 * Utilitaires
 */
const utils = {
    // Formater un numéro de téléphone
    formatPhone: (phone) => {
        return phone.replace(/(\d{2})(?=\d)/g, '$1 ');
    },
    
    // Calculer la distance entre deux points GPS
    calculateDistance: (lat1, lon1, lat2, lon2) => {
        const R = 6371; // Rayon de la Terre en km
        const dLat = (lat2 - lat1) * Math.PI / 180;
        const dLon = (lon2 - lon1) * Math.PI / 180;
        const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
                  Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
                  Math.sin(dLon/2) * Math.sin(dLon/2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
        return R * c;
    },
    
    // Débounce function
    debounce: (func, wait) => {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
};

// Export pour utilisation externe si nécessaire
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        searchStores,
        showEquippedStores,
        selectStore,
        showDirections,
        utils
    };
}

// Ajouter les styles CSS pour les animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    
    .field-error {
        color: #dc3545;
        font-size: 0.875rem;
        margin-top: 0.25rem;
        display: block;
    }
    
    input.error {
        border-color: #dc3545 !important;
    }
    
    .search-message {
        text-align: center;
        padding: 2rem;
        background: #f8f9fa;
        border-radius: 8px;
    }
    
    .search-loading {
        text-align: center;
        padding: 2rem;
        color: #6c757d;
    }
    
    .store-price {
        color: #00a651;
        font-weight: 600;
    }
`;
document.head.appendChild(style);

console.log('✅ Script chargé avec succès');
