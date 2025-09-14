/**
 * Liste complète des 94 magasins Carter-Cash en France
 * Source: carter-cash.com/magasins/
 * Mise à jour: Septembre 2025
 */

const STORES_DATABASE = {
    // ========================================
    // MAGASINS ÉQUIPÉS DE MACHINES RE-FAP
    // Service EXPRESS en 4 heures
    // ========================================
    equipped: [
        { id: 1, name: "Carter-Cash Paris Aulnay-sous-Bois", city: "Aulnay-sous-Bois", postal: "93600", region: "Île-de-France" },
        { id: 2, name: "Carter-Cash Lyon Vénissieux", city: "Vénissieux", postal: "69200", region: "Auvergne-Rhône-Alpes" },
        { id: 3, name: "Carter-Cash Marseille La Valentine", city: "Marseille", postal: "13011", region: "PACA" },
        { id: 4, name: "Carter-Cash Toulouse Balma", city: "Balma", postal: "31130", region: "Occitanie" },
        { id: 5, name: "Carter-Cash Lille Seclin", city: "Seclin", postal: "59113", region: "Hauts-de-France" },
        { id: 6, name: "Carter-Cash Bordeaux Mérignac", city: "Mérignac", postal: "33700", region: "Nouvelle-Aquitaine" },
        { id: 7, name: "Carter-Cash Nantes Saint-Herblain", city: "Saint-Herblain", postal: "44800", region: "Pays de la Loire" },
        { id: 8, name: "Carter-Cash Strasbourg Illkirch", city: "Illkirch-Graffenstaden", postal: "67400", region: "Grand Est" },
        { id: 9, name: "Carter-Cash Nice Saint-Laurent", city: "Nice", postal: "06200", region: "PACA" },
        { id: 10, name: "Carter-Cash Rennes Chantepie", city: "Chantepie", postal: "35135", region: "Bretagne" },
        { id: 11, name: "Carter-Cash Montpellier Pérols", city: "Pérols", postal: "34470", region: "Occitanie" },
        { id: 12, name: "Carter-Cash Rouen Grand-Quevilly", city: "Le Grand-Quevilly", postal: "76120", region: "Normandie" },
        { id: 13, name: "Carter-Cash Grenoble Saint-Martin-d'Hères", city: "Saint-Martin-d'Hères", postal: "38400", region: "Auvergne-Rhône-Alpes" },
        { id: 14, name: "Carter-Cash Dijon Quetigny", city: "Quetigny", postal: "21800", region: "Bourgogne-Franche-Comté" },
        { id: 15, name: "Carter-Cash Tours Nord", city: "Tours", postal: "37100", region: "Centre-Val de Loire" },
        { id: 16, name: "Carter-Cash Reims Cormontreuil", city: "Cormontreuil", postal: "51350", region: "Grand Est" },
        { id: 17, name: "Carter-Cash Nancy Tomblaine", city: "Tomblaine", postal: "54510", region: "Grand Est" },
        { id: 18, name: "Carter-Cash Orléans Saran", city: "Saran", postal: "45770", region: "Centre-Val de Loire" },
        { id: 19, name: "Carter-Cash Angers Saint-Barthélemy", city: "Saint-Barthélemy-d'Anjou", postal: "49124", region: "Pays de la Loire" },
        { id: 20, name: "Carter-Cash Le Mans", city: "Le Mans", postal: "72000", region: "Pays de la Loire" }
    ],

    // ========================================
    // MAGASINS STANDARDS
    // Service 48 heures avec envoi atelier
    // ========================================
    standard: [
        // ÎLE-DE-FRANCE
        { id: 21, name: "Carter-Cash Créteil", city: "Créteil", postal: "94000", region: "Île-de-France" },
        { id: 22, name: "Carter-Cash Melun", city: "Melun", postal: "77000", region: "Île-de-France" },
        { id: 23, name: "Carter-Cash Gonesse", city: "Gonesse", postal: "95500", region: "Île-de-France" },
        { id: 24, name: "Carter-Cash Bondoufle", city: "Bondoufle", postal: "91070", region: "Île-de-France" },
        { id: 25, name: "Carter-Cash Mantes-la-Jolie", city: "Mantes-la-Jolie", postal: "78200", region: "Île-de-France" },
        
        // AUVERGNE-RHÔNE-ALPES
        { id: 26, name: "Carter-Cash Clermont-Ferrand", city: "Cournon-d'Auvergne", postal: "63800", region: "Auvergne-Rhône-Alpes" },
        { id: 27, name: "Carter-Cash Saint-Étienne", city: "Saint-Étienne", postal: "42000", region: "Auvergne-Rhône-Alpes" },
        { id: 28, name: "Carter-Cash Chambéry", city: "Chambéry", postal: "73000", region: "Auvergne-Rhône-Alpes" },
        { id: 29, name: "Carter-Cash Annecy", city: "Seynod", postal: "74600", region: "Auvergne-Rhône-Alpes" },
        { id: 30, name: "Carter-Cash Valence", city: "Valence", postal: "26000", region: "Auvergne-Rhône-Alpes" },
        { id: 31, name: "Carter-Cash Bourg-en-Bresse", city: "Bourg-en-Bresse", postal: "01000", region: "Auvergne-Rhône-Alpes" },
        { id: 32, name: "Carter-Cash Roanne", city: "Roanne", postal: "42300", region: "Auvergne-Rhône-Alpes" },
        { id: 33, name: "Carter-Cash Vichy", city: "Vichy", postal: "03200", region: "Auvergne-Rhône-Alpes" },
        { id: 34, name: "Carter-Cash Aurillac", city: "Aurillac", postal: "15000", region: "Auvergne-Rhône-Alpes" },
        
        // PROVENCE-ALPES-CÔTE D'AZUR
        { id: 35, name: "Carter-Cash Avignon", city: "Avignon", postal: "84000", region: "PACA" },
        { id: 36, name: "Carter-Cash Toulon", city: "La Garde", postal: "83130", region: "PACA" },
        { id: 37, name: "Carter-Cash Aix-en-Provence", city: "Aix-en-Provence", postal: "13090", region: "PACA" },
        { id: 38, name: "Carter-Cash Gap", city: "Gap", postal: "05000", region: "PACA" },
        { id: 39, name: "Carter-Cash Fréjus", city: "Fréjus", postal: "83600", region: "PACA" },
        { id: 40, name: "Carter-Cash Draguignan", city: "Draguignan", postal: "83300", region: "PACA" },
        { id: 41, name: "Carter-Cash Aubagne", city: "Aubagne", postal: "13400", region: "PACA" },
        
        // OCCITANIE
        { id: 42, name: "Carter-Cash Perpignan", city: "Perpignan", postal: "66000", region: "Occitanie" },
        { id: 43, name: "Carter-Cash Nîmes", city: "Nîmes", postal: "30900", region: "Occitanie" },
        { id: 44, name: "Carter-Cash Béziers", city: "Béziers", postal: "34500", region: "Occitanie" },
        { id: 45, name: "Carter-Cash Narbonne", city: "Narbonne", postal: "11100", region: "Occitanie" },
        { id: 46, name: "Carter-Cash Carcassonne", city: "Carcassonne", postal: "11000", region: "Occitanie" },
        { id: 47, name: "Carter-Cash Albi", city: "Albi", postal: "81000", region: "Occitanie" },
        { id: 48, name: "Carter-Cash Castres", city: "Castres", postal: "81100", region: "Occitanie" },
        { id: 49, name: "Carter-Cash Montauban", city: "Montauban", postal: "82000", region: "Occitanie" },
        { id: 50, name: "Carter-Cash Tarbes", city: "Tarbes", postal: "65000", region: "Occitanie" },
        { id: 51, name: "Carter-Cash Auch", city: "Auch", postal: "32000", region: "Occitanie" },
        { id: 52, name: "Carter-Cash Rodez", city: "Rodez", postal: "12000", region: "Occitanie" },
        
        // NOUVELLE-AQUITAINE
        { id: 53, name: "Carter-Cash Pau", city: "Lescar", postal: "64230", region: "Nouvelle-Aquitaine" },
        { id: 54, name: "Carter-Cash Bayonne", city: "Anglet", postal: "64600", region: "Nouvelle-Aquitaine" },
        { id: 55, name: "Carter-Cash Agen", city: "Agen", postal: "47000", region: "Nouvelle-Aquitaine" },
        { id: 56, name: "Carter-Cash Limoges", city: "Limoges", postal: "87000", region: "Nouvelle-Aquitaine" },
        { id: 57, name: "Carter-Cash Périgueux", city: "Périgueux", postal: "24000", region: "Nouvelle-Aquitaine" },
        { id: 58, name: "Carter-Cash Brive", city: "Brive-la-Gaillarde", postal: "19100", region: "Nouvelle-Aquitaine" },
        { id: 59, name: "Carter-Cash Angoulême", city: "Angoulême", postal: "16000", region: "Nouvelle-Aquitaine" },
        { id: 60, name: "Carter-Cash La Rochelle", city: "La Rochelle", postal: "17000", region: "Nouvelle-Aquitaine" },
        { id: 61, name: "Carter-Cash Niort", city: "Niort", postal: "79000", region: "Nouvelle-Aquitaine" },
        { id: 62, name: "Carter-Cash Poitiers", city: "Poitiers", postal: "86000", region: "Nouvelle-Aquitaine" },
        
        // HAUTS-DE-FRANCE
        { id: 63, name: "Carter-Cash Amiens", city: "Amiens", postal: "80000", region: "Hauts-de-France" },
        { id: 64, name: "Carter-Cash Valenciennes", city: "Petite-Forêt", postal: "59494", region: "Hauts-de-France" },
        { id: 65, name: "Carter-Cash Lens", city: "Lens", postal: "62300", region: "Hauts-de-France" },
        { id: 66, name: "Carter-Cash Dunkerque", city: "Dunkerque", postal: "59140", region: "Hauts-de-France" },
        { id: 67, name: "Carter-Cash Calais", city: "Calais", postal: "62100", region: "Hauts-de-France" },
        { id: 68, name: "Carter-Cash Boulogne-sur-Mer", city: "Boulogne-sur-Mer", postal: "62200", region: "Hauts-de-France" },
        { id: 69, name: "Carter-Cash Arras", city: "Arras", postal: "62000", region: "Hauts-de-France" },
        { id: 70, name: "Carter-Cash Beauvais", city: "Beauvais", postal: "60000", region: "Hauts-de-France" },
        { id: 71, name: "Carter-Cash Compiègne", city: "Compiègne", postal: "60200", region: "Hauts-de-France" },
        
        // GRAND EST
        { id: 72, name: "Carter-Cash Metz", city: "Metz", postal: "57000", region: "Grand Est" },
        { id: 73, name: "Carter-Cash Mulhouse", city: "Mulhouse", postal: "68100", region: "Grand Est" },
        { id: 74, name: "Carter-Cash Colmar", city: "Colmar", postal: "68000", region: "Grand Est" },
        { id: 75, name: "Carter-Cash Épinal", city: "Épinal", postal: "88000", region: "Grand Est" },
        { id: 76, name: "Carter-Cash Charleville-Mézières", city: "Charleville-Mézières", postal: "08000", region: "Grand Est" },
        { id: 77, name: "Carter-Cash Châlons-en-Champagne", city: "Châlons-en-Champagne", postal: "51000", region: "Grand Est" },
        { id: 78, name: "Carter-Cash Troyes", city: "Troyes", postal: "10000", region: "Grand Est" },
        
        // PAYS DE LA LOIRE
        { id: 79, name: "Carter-Cash Laval", city: "Laval", postal: "53000", region: "Pays de la Loire" },
        { id: 80, name: "Carter-Cash La Roche-sur-Yon", city: "La Roche-sur-Yon", postal: "85000", region: "Pays de la Loire" },
        { id: 81, name: "Carter-Cash Saint-Nazaire", city: "Saint-Nazaire", postal: "44600", region: "Pays de la Loire" },
        
        // BRETAGNE
        { id: 82, name: "Carter-Cash Brest", city: "Guipavas", postal: "29490", region: "Bretagne" },
        { id: 83, name: "Carter-Cash Lorient", city: "Caudan", postal: "56850", region: "Bretagne" },
        { id: 84, name: "Carter-Cash Vannes", city: "Vannes", postal: "56000", region: "Bretagne" },
        { id: 85, name: "Carter-Cash Quimper", city: "Quimper", postal: "29000", region: "Bretagne" },
        { id: 86, name: "Carter-Cash Saint-Brieuc", city: "Saint-Brieuc", postal: "22000", region: "Bretagne" },
        
        // NORMANDIE
        { id: 87, name: "Carter-Cash Caen", city: "Mondeville", postal: "14120", region: "Normandie" },
        { id: 88, name: "Carter-Cash Le Havre", city: "Gonfreville-l'Orcher", postal: "76700", region: "Normandie" },
        { id: 89, name: "Carter-Cash Cherbourg", city: "Cherbourg", postal: "50100", region: "Normandie" },
        { id: 90, name: "Carter-Cash Évreux", city: "Évreux", postal: "27000", region: "Normandie" },
        
        // CENTRE-VAL DE LOIRE
        { id: 91, name: "Carter-Cash Bourges", city: "Bourges", postal: "18000", region: "Centre-Val de Loire" },
        { id: 92, name: "Carter-Cash Chartres", city: "Chartres", postal: "28000", region: "Centre-Val de Loire" },
        { id: 93, name: "Carter-Cash Blois", city: "Blois", postal: "41000", region: "Centre-Val de Loire" },
        { id: 94, name: "Carter-Cash Châteauroux", city: "Châteauroux", postal: "36000", region: "Centre-Val de Loire" }
    ]
};

/**
 * Fonction pour obtenir tous les magasins
 */
function getAllStores() {
    return [...STORES_DATABASE.equipped, ...STORES_DATABASE.standard];
}

/**
 * Fonction de recherche par code postal ou ville
 */
function searchStoresByLocation(query) {
    const term = query.toLowerCase().trim();
    return getAllStores().filter(store => 
        store.postal.startsWith(term) ||
        store.city.toLowerCase().includes(term) ||
        store.name.toLowerCase().includes(term) ||
        store.region.toLowerCase().includes(term)
    );
}

/**
 * Fonction pour obtenir les magasins par région
 */
function getStoresByRegion(region) {
    return getAllStores().filter(store => 
        store.region.toLowerCase() === region.toLowerCase()
    );
}

/**
 * Statistiques
 */
function getStoresStats() {
    const all = getAllStores();
    const regions = [...new Set(all.map(s => s.region))];
    
    return {
        total: all.length,
        equipped: STORES_DATABASE.equipped.length,
        standard: STORES_DATABASE.standard.length,
        regions: regions.length,
        byRegion: regions.map(r => ({
            region: r,
            count: all.filter(s => s.region === r).length,
            equipped: STORES_DATABASE.equipped.filter(s => s.region === r).length
        }))
    };
}

// Export pour utilisation
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        STORES_DATABASE,
        getAllStores,
        searchStoresByLocation,
        getStoresByRegion,
        getStoresStats
    };
}

// Log des statistiques
console.log('📊 Magasins Carter-Cash chargés :');
console.log(`   Total : ${getAllStores().length} magasins`);
console.log(`   Équipés (4h) : ${STORES_DATABASE.equipped.length} magasins`);
console.log(`   Standards (48h) : ${STORES_DATABASE.standard.length} magasins`);
