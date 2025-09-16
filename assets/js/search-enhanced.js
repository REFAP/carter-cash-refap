/**
 * Fonction de recherche améliorée pour Carter-Cash
 * Support de la recherche par département
 * TOUS LES MAGASINS UTILISENT LE NUMÉRO : 0473378821
 */

// Remplacez la fonction searchStores() dans votre main.js par celle-ci :

/**
 * Recherche de magasins améliorée
 */
function searchStores() {
    const input = document.getElementById('search-input');
    const resultsContainer = document.getElementById('search-results');
    const searchTerm = input.value.trim().toLowerCase();
    
    if (!searchTerm) {
        resultsContainer.innerHTML = `
            <div class="search-message">
                <p>⬆️ Entrez votre code postal, département ou ville</p>
                <p style="font-size: 0.9em; color: #666;">Exemples : 94, 75, Paris, Lyon...</p>
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
        displaySearchResults(results, searchTerm);
    }, 300);
}

/**
 * Recherche dans la base de données - VERSION AMÉLIORÉE
 */
function searchInDatabase(term) {
    const allStores = [...STORES_DATABASE.equipped, ...STORES_DATABASE.standard];
    
    // Nettoyer le terme de recherche
    term = term.toLowerCase().trim();
    
    // RECHERCHE PAR DÉPARTEMENT (2 chiffres)
    if (/^\d{2}$/.test(term)) {
        console.log(`🔍 Recherche par département : ${term}`);
        return allStores.filter(store => {
            return store.postal && store.postal.startsWith(term);
        }).sort((a, b) => a.postal.localeCompare(b.postal));
    }
    
    // RECHERCHE PAR CODE POSTAL PARTIEL (3-5 chiffres)
    if (/^\d{3,5}$/.test(term)) {
        console.log(`🔍 Recherche par code postal : ${term}`);
        return allStores.filter(store => {
            return store.postal && store.postal.startsWith(term);
        }).sort((a, b) => a.postal.localeCompare(b.postal));
    }
    
    // RECHERCHE PAR VILLE OU NOM
    console.log(`🔍 Recherche par ville/nom : ${term}`);
    return allStores.filter(store => {
        const cityMatch = store.city && store.city.toLowerCase().includes(term);
        const nameMatch = store.name && store.name.toLowerCase().includes(term);
        const postalMatch = store.postal && store.postal.includes(term);
        
        return cityMatch || nameMatch || postalMatch;
    }).sort((a, b) => {
        // Prioriser les correspondances exactes de ville
        const aExact = a.city && a.city.toLowerCase() === term;
        const bExact = b.city && b.city.toLowerCase() === term;
        if (aExact && !bExact) return -1;
        if (!aExact && bExact) return 1;
        return a.city.localeCompare(b.city);
    });
}

/**
 * Affichage des résultats avec compteur et groupement
 */
function displaySearchResults(results, searchTerm) {
    const resultsContainer = document.getElementById('search-results');
    
    if (results.length === 0) {
        resultsContainer.innerHTML = `
            <div class="search-message">
                <p>😕 Aucun magasin trouvé pour "<strong>${searchTerm}</strong>"</p>
                <p>Essayez avec :</p>
                <ul style="text-align: left; display: inline-block;">
                    <li>Un département (ex: 94, 75)</li>
                    <li>Un code postal (ex: 94320)</li>
                    <li>Une ville (ex: Paris, Lyon)</li>
                </ul>
                <a href="https://www.carter-cash.com/magasins/" target="_blank" class="btn btn-outline btn-sm">
                    Voir tous les magasins →
                </a>
            </div>
        `;
        return;
    }
    
    // Séparer les magasins équipés et standards
    const equippedStores = results.filter(s => s.equipped);
    const standardStores = results.filter(s => !s.equipped);
    
    // Déterminer le type de recherche pour un meilleur affichage
    let searchType = '';
    if (/^\d{2}$/.test(searchTerm)) {
        searchType = `Département ${searchTerm}`;
    } else if (/^\d{3,5}$/.test(searchTerm)) {
        searchType = `Code postal ${searchTerm}`;
    } else {
        searchType = searchTerm;
    }
    
    let html = `
        <div class="results-header">
            <h3>${results.length} magasin${results.length > 1 ? 's' : ''} trouvé${results.length > 1 ? 's' : ''}</h3>
            <p>Recherche : <strong>${searchType}</strong></p>
        </div>
    `;
    
    html += '<div class="results-list">';
    
    // Afficher d'abord les magasins équipés s'il y en a
    if (equippedStores.length > 0) {
        html += `
            <div class="results-section">
                <h4 style="color: #00a651; margin-bottom: 10px;">
                    ⚡ Magasins avec machine Re-FAP (Service EXPRESS 4h)
                </h4>
            </div>
        `;
        
        equippedStores.forEach(store => {
            html += createStoreCard(store, true);
        });
    }
    
    // Puis les magasins standards
    if (standardStores.length > 0) {
        if (equippedStores.length > 0) {
            html += `
                <div class="results-section" style="margin-top: 20px;">
                    <h4 style="color: #666; margin-bottom: 10px;">
                        📦 Autres magasins (Service 48h avec envoi atelier)
                    </h4>
                </div>
            `;
        }
        
        standardStores.forEach(store => {
            html += createStoreCard(store, false);
        });
    }
    
    html += '</div>';
    
    // Ajouter un message si beaucoup de résultats
    if (results.length > 10) {
        html += `
            <div class="results-footer" style="text-align: center; margin-top: 20px; padding: 10px; background: #f5f5f5; border-radius: 8px;">
                <p style="color: #666;">
                    💡 Astuce : Affinez votre recherche avec un code postal complet pour moins de résultats
                </p>
            </div>
        `;
    }
    
    resultsContainer.innerHTML = html;
    
    // Animer l'apparition des résultats
    document.querySelectorAll('.store-result').forEach((el, index) => {
        setTimeout(() => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(10px)';
            el.style.transition = 'all 0.3s ease';
            setTimeout(() => {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }, 50);
        }, index * 50);
    });
}

/**
 * Créer une carte de magasin
 * NUMÉRO UNIQUE POUR TOUS LES MAGASINS : 0473378821
 */
function createStoreCard(store, isEquipped) {
    // FORCER LE NUMÉRO UNIQUE POUR TOUS LES MAGASINS
    const phone = "0473378821";
    const hours = store.hours || 'Lun-Sam: 9h-19h';
    
    return `
        <div class="store-result ${isEquipped ? 'equipped' : ''}" data-store-id="${store.id}">
            <div class="store-info">
                <h4>
                    ${store.name} 
                    ${isEquipped ? '<span class="badge" style="background: #00a651;">⚡ EXPRESS 4h</span>' : ''}
                </h4>
                <p>📍 ${store.address || store.city}, ${store.postal} ${store.city}</p>
                <p>📞 ${phone}</p>
                <p>🕐 ${hours}</p>
                <p class="store-price" style="font-weight: bold; color: ${isEquipped ? '#00a651' : '#ff6b35'};">
                    💰 Tarif : ${isEquipped ? '99-149€' : '199€ (port inclus)'}
                </p>
            </div>
            <div class="store-actions">
                <a href="tel:${phone.replace(/\s/g, '')}" class="btn btn-primary btn-sm">
                    Appeler
                </a>
                ${store.lat && store.lng ? `
                    <button onclick="showDirections(${store.lat}, ${store.lng})" class="btn btn-outline btn-sm">
                        Itinéraire
                    </button>
                ` : ''}
                <button onclick="selectStore(${store.id})" class="btn btn-secondary btn-sm">
                    Choisir
                </button>
            </div>
        </div>
    `;
}

/**
 * Liste des départements français avec leurs noms pour aide
 */
const DEPARTMENTS = {
    '75': 'Paris',
    '77': 'Seine-et-Marne',
    '78': 'Yvelines',
    '91': 'Essonne',
    '92': 'Hauts-de-Seine',
    '93': 'Seine-Saint-Denis',
    '94': 'Val-de-Marne',
    '95': 'Val-d\'Oise',
    '59': 'Nord',
    '62': 'Pas-de-Calais',
    '80': 'Somme',
    '60': 'Oise',
    '02': 'Aisne',
    '13': 'Bouches-du-Rhône',
    '69': 'Rhône',
    '33': 'Gironde',
    '31': 'Haute-Garonne',
    '44': 'Loire-Atlantique',
    '67': 'Bas-Rhin',
    // Ajouter d'autres si nécessaire
};

/**
 * Fonction pour obtenir le nom du département
 */
function getDepartmentName(code) {
    return DEPARTMENTS[code] || `Département ${code}`;
}

// Ajouter des suggestions de recherche
function addSearchSuggestions() {
    const searchInput = document.getElementById('search-input');
    if (!searchInput) return;
    
    // Créer une datalist pour les suggestions
    const datalist = document.createElement('datalist');
    datalist.id = 'search-suggestions';
    
    // Ajouter les départements
    Object.entries(DEPARTMENTS).forEach(([code, name]) => {
        const option = document.createElement('option');
        option.value = code;
        option.label = name;
        datalist.appendChild(option);
    });
    
    // Ajouter les villes principales
    const cities = [...new Set(getAllStores().map(s => s.city))];
    cities.forEach(city => {
        if (city) {
            const option = document.createElement('option');
            option.value = city;
            datalist.appendChild(option);
        }
    });
    
    document.body.appendChild(datalist);
    searchInput.setAttribute('list', 'search-suggestions');
}

// Appeler cette fonction au chargement
document.addEventListener('DOMContentLoaded', function() {
    addSearchSuggestions();
});

console.log('✅ Fonction de recherche améliorée chargée');
console.log('🔍 Recherche par département activée (ex: tapez "94" pour tout le Val-de-Marne)');
console.log('☎️ Numéro unique pour tous les magasins : 0473378821');
