/**
 * Base de données OFFICIELLE des magasins Carter-Cash
 * 94 magasins en France - Données extraites du site Carter-Cash
 * Mise à jour : Septembre 2025
 * TOUS LES MAGASINS UTILISENT LE MÊME NUMÉRO : 0473378821
 */

const STORES_DATABASE = {
    // ========================================
    // MAGASINS ÉQUIPÉS DE MACHINES RE-FAP
    // Service EXPRESS en 4 heures
    // ========================================
    equipped: [
        {
            id: 1,
            name: "Carter-Cash Lambres-lez-Douai",
            city: "Lambres-lez-Douai",
            postal: "59552",
            phone: "0473378821",
            equipped: true
        },
        {
            id: 2,
            name: "Carter-Cash Thiais",
            city: "Thiais",
            postal: "94320",
            phone: "0473378821",
            equipped: true
        }
    ],
    
    // ========================================
    // MAGASINS STANDARDS (sans machine)
    // Service 48 heures avec envoi atelier
    // ========================================
    standard: [
        { id: 3, name: "Carter-Cash Viriat", city: "Viriat", postal: "01440", phone: "0473378821" },
        { id: 4, name: "Carter-Cash Barberey-Saint-Sulpice", city: "Barberey-Saint-Sulpice", postal: "10600", phone: "0473378821" },
        { id: 5, name: "Carter-Cash Narbonne", city: "Narbonne", postal: "11100", phone: "0473378821" },
        { id: 6, name: "Carter-Cash Marseille La Valentine", city: "Marseille La Valentine", postal: "13011", phone: "0473378821" },
        { id: 7, name: "Carter-Cash Marseille", city: "Marseille", postal: "13014", phone: "0473378821" },
        { id: 8, name: "Carter-Cash Les Pennes-Mirabeau", city: "Les Pennes-Mirabeau", postal: "13170", phone: "0473378821" },
        { id: 9, name: "Carter-Cash Saint-Mitre-les-Remparts", city: "Saint-Mitre-les-Remparts", postal: "13920", phone: "0473378821" },
        { id: 10, name: "Carter-Cash Mondeville", city: "Mondeville", postal: "14120", phone: "0473378821" },
        { id: 11, name: "Carter-Cash Champniers", city: "Champniers", postal: "16430", phone: "0473378821" },
        { id: 12, name: "Carter-Cash Saint-Germain-du-Puy", city: "Saint-Germain-du-Puy", postal: "18390", phone: "0473378821" },
        { id: 13, name: "Carter-Cash Quetigny", city: "Quetigny", postal: "21800", phone: "0473378821" },
        { id: 14, name: "Carter-Cash Trégueux", city: "Trégueux", postal: "22950", phone: "0473378821" },
        { id: 15, name: "Carter-Cash Bethoncourt", city: "Bethoncourt", postal: "25200", phone: "0473378821" },
        { id: 16, name: "Carter-Cash Chalezeule", city: "Chalezeule", postal: "25220", phone: "0473378821" },
        { id: 17, name: "Carter-Cash Valence", city: "Valence", postal: "26000", phone: "0473378821" },
        { id: 18, name: "Carter-Cash Evreux", city: "Evreux", postal: "27000", phone: "0473378821" },
        { id: 19, name: "Carter-Cash Quimper", city: "Quimper", postal: "29000", phone: "0473378821" },
        { id: 20, name: "Carter-Cash Brest", city: "Brest", postal: "29200", phone: "0473378821" },
        { id: 21, name: "Carter-Cash Nîmes", city: "Nîmes", postal: "30000", phone: "0473378821" },
        { id: 22, name: "Carter-Cash Alès", city: "Alès", postal: "30100", phone: "0473378821" },
        { id: 23, name: "Carter-Cash Portet-sur-Garonne", city: "Portet-sur-Garonne", postal: "31120", phone: "0473378821" },
        { id: 24, name: "Carter-Cash Aucamville", city: "Aucamville", postal: "31140", phone: "0473378821" },
        { id: 25, name: "Carter-Cash L'Union", city: "L'Union", postal: "31240", phone: "0473378821" },
        { id: 26, name: "Carter-Cash Toulouse", city: "Toulouse", postal: "31300", phone: "0473378821" },
        { id: 27, name: "Carter-Cash Le Haillan", city: "Le Haillan", postal: "33185", phone: "0473378821" },
        { id: 28, name: "Carter-Cash Artigues-près-Bordeaux", city: "Artigues-près-Bordeaux", postal: "33370", phone: "0473378821" },
        { id: 29, name: "Carter-Cash Mauguio", city: "Mauguio", postal: "34130", phone: "0473378821" },
        { id: 30, name: "Carter-Cash Castelnau-le-Lez", city: "Castelnau-le-Lez", postal: "34170", phone: "0473378821" },
        { id: 31, name: "Carter-Cash Béziers", city: "Béziers", postal: "34500", phone: "0473378821" },
        { id: 32, name: "Carter-Cash Rennes", city: "Rennes", postal: "35000", phone: "0473378821" },
        { id: 33, name: "Carter-Cash Tours", city: "Tours", postal: "37100", phone: "0473378821" },
        { id: 34, name: "Carter-Cash Échirolles", city: "Échirolles", postal: "38130", phone: "0473378821" },
        { id: 35, name: "Carter-Cash Saint-Martin-d'Hères", city: "Saint-Martin-d'Hères", postal: "38400", phone: "0473378821" },
        { id: 36, name: "Carter-Cash Saint-Etienne", city: "Saint-Etienne", postal: "42000", phone: "0473378821" },
        { id: 37, name: "Carter-Cash La Ricamarie", city: "La Ricamarie", postal: "42150", phone: "0473378821" },
        { id: 38, name: "Carter-Cash Orvault", city: "Orvault", postal: "44700", phone: "0473378821" },
        { id: 39, name: "Carter-Cash Sainte-Luce-sur-Loire", city: "Sainte-Luce-sur-Loire", postal: "44980", phone: "0473378821" },
        { id: 40, name: "Carter-Cash Saran", city: "Saran", postal: "45770", phone: "0473378821" },
        { id: 41, name: "Carter-Cash Beaucouzé", city: "Beaucouzé", postal: "49070", phone: "0473378821" },
        { id: 42, name: "Carter-Cash Reims", city: "Reims", postal: "51100", phone: "0473378821" },
        { id: 43, name: "Carter-Cash Essey-lès-Nancy", city: "Essey-lès-Nancy", postal: "54270", phone: "0473378821" },
        { id: 44, name: "Carter-Cash Woippy", city: "Woippy", postal: "57140", phone: "0473378821" },
        { id: 45, name: "Carter-Cash Prouvy", city: "Prouvy", postal: "59121", phone: "0473378821" },
        { id: 46, name: "Carter-Cash Wattignies", city: "Wattignies", postal: "59139", phone: "0473378821" },
        { id: 47, name: "Carter-Cash Wattrelos", city: "Wattrelos", postal: "59150", phone: "0473378821" },
        { id: 48, name: "Carter-Cash Capinghem", city: "Capinghem", postal: "59160", phone: "0473378821" },
        { id: 49, name: "Carter-Cash Tourcoing", city: "Tourcoing", postal: "59200", phone: "0473378821" },
        // Lambres-lez-Douai est dans equipped
        { id: 50, name: "Carter-Cash Dunkerque", city: "Dunkerque", postal: "59640", phone: "0473378821" },
        { id: 51, name: "Carter-Cash Villeneuve-d'Ascq", city: "Villeneuve-d'Ascq", postal: "59650", phone: "0473378821" },
        { id: 52, name: "Carter-Cash Marcq-en-Baroeul", city: "Marcq-en-Baroeul", postal: "59700", phone: "0473378821" },
        { id: 53, name: "Carter-Cash Feignies", city: "Feignies", postal: "59750", phone: "0473378821" },
        { id: 54, name: "Carter-Cash Nogent-sur-Oise", city: "Nogent-sur-Oise", postal: "60180", phone: "0473378821" },
        { id: 55, name: "Carter-Cash Compiègne", city: "Compiègne", postal: "60200", phone: "0473378821" },
        { id: 56, name: "Carter-Cash Arras", city: "Arras", postal: "62000", phone: "0473378821" },
        { id: 57, name: "Carter-Cash Calais", city: "Calais", postal: "62100", phone: "0473378821" },
        { id: 58, name: "Carter-Cash Bruay-la-Buissière", city: "Bruay-la-Buissière", postal: "62700", phone: "0473378821" },
        { id: 59, name: "Carter-Cash Fouquières-lès-Lens", city: "Fouquières-lès-Lens", postal: "62740", phone: "0473378821" },
        { id: 60, name: "Carter-Cash Clermont-Ferrand", city: "Clermont-Ferrand", postal: "63000", phone: "0473378821" },
        { id: 61, name: "Carter-Cash Serres-Castet", city: "Serres-Castet", postal: "64121", phone: "0473378821" },
        { id: 62, name: "Carter-Cash Perpignan", city: "Perpignan", postal: "66000", phone: "0473378821" },
        { id: 63, name: "Carter-Cash Souffelweyersheim", city: "Souffelweyersheim", postal: "67460", phone: "0473378821" },
        { id: 64, name: "Carter-Cash Fegersheim", city: "Fegersheim", postal: "67640", phone: "0473378821" },
        { id: 65, name: "Carter-Cash Pfastatt", city: "Pfastatt", postal: "68120", phone: "0473378821" },
        { id: 66, name: "Carter-Cash Saint-Priest", city: "Saint-Priest", postal: "69800", phone: "0473378821" },
        { id: 67, name: "Carter-Cash Vinzelles", city: "Vinzelles", postal: "71680", phone: "0473378821" },
        { id: 68, name: "Carter-Cash Arnage-le-Mans", city: "Arnage", postal: "72230", phone: "0473378821" },
        { id: 69, name: "Carter-Cash La Ravoire", city: "La Ravoire", postal: "73490", phone: "0473378821" },
        { id: 70, name: "Carter-Cash Sotteville-lès-Rouen", city: "Sotteville-lès-Rouen", postal: "76300", phone: "0473378821" },
        { id: 71, name: "Carter-Cash Gonfreville l'Orcher", city: "Gonfreville l'Orcher", postal: "76700", phone: "0473378821" },
        { id: 72, name: "Carter-Cash Meaux", city: "Meaux", postal: "77100", phone: "0473378821" },
        { id: 73, name: "Carter-Cash Brie-Comte-Robert", city: "Brie-Comte-Robert", postal: "77170", phone: "0473378821" },
        { id: 74, name: "Carter-Cash Savigny-le-Temple", city: "Savigny-le-Temple", postal: "77176", phone: "0473378821" },
        { id: 75, name: "Carter-Cash Pontault-Combault", city: "Pontault-Combault", postal: "77340", phone: "0473378821" },
        { id: 76, name: "Carter-Cash Lagny-sur-Marne", city: "Lagny-sur-Marne", postal: "77400", phone: "0473378821" },
        { id: 77, name: "Carter-Cash Claye-Souilly", city: "Claye-Souilly", postal: "77410", phone: "0473378821" },
        { id: 78, name: "Carter-Cash Buchelay", city: "Buchelay", postal: "78200", phone: "0473378821" },
        { id: 79, name: "Carter-Cash Coignières", city: "Coignières", postal: "78310", phone: "0473378821" },
        { id: 80, name: "Carter-Cash Chauray", city: "Chauray", postal: "79180", phone: "0473378821" },
        { id: 81, name: "Carter-Cash Longueau", city: "Longueau", postal: "80330", phone: "0473378821" },
        { id: 82, name: "Carter-Cash Lescure-d'Albigeois", city: "Lescure-d'Albigeois", postal: "81380", phone: "0473378821" },
        { id: 83, name: "Carter-Cash La-Valette-du-Var", city: "La-Valette-du-Var", postal: "83160", phone: "0473378821" },
        { id: 84, name: "Carter-Cash La Seyne-sur-Mer", city: "La Seyne-sur-Mer", postal: "83500", phone: "0473378821" },
        { id: 85, name: "Carter-Cash Avignon", city: "Avignon", postal: "84000", phone: "0473378821" },
        { id: 86, name: "Carter-Cash Chasseneuil-du-Poitou", city: "Chasseneuil-du-Poitou", postal: "86360", phone: "0473378821" },
        { id: 87, name: "Carter-Cash Limoges", city: "Limoges", postal: "87000", phone: "0473378821" },
        { id: 88, name: "Carter-Cash Corbeil-Essonnes", city: "Corbeil-Essonnes", postal: "91100", phone: "0473378821" },
        { id: 89, name: "Carter-Cash Ris-Orangis", city: "Ris-Orangis", postal: "91130", phone: "0473378821" },
        { id: 90, name: "Carter-Cash Ballainvilliers", city: "Ballainvilliers", postal: "91160", phone: "0473378821" },
        { id: 91, name: "Carter-Cash Sainte-Geneviève-des-Bois", city: "Sainte-Geneviève-des-Bois", postal: "91700", phone: "0473378821" },
        { id: 92, name: "Carter-Cash Aulnay-sous-Bois", city: "Aulnay-sous-Bois", postal: "93600", phone: "0473378821" },
        // Thiais est dans equipped
        { id: 93, name: "Carter-Cash Sarcelles", city: "Sarcelles", postal: "95200", phone: "0473378821" },
        { id: 94, name: "Carter-Cash Saint-Ouen-l'Aumône", city: "Saint-Ouen-l'Aumône", postal: "95310", phone: "0473378821" }
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
        store.name.toLowerCase().includes(term)
    );
}

/**
 * Statistiques
 */
console.log('📊 Base de données Carter-Cash chargée :');
console.log(`   Total : ${getAllStores().length} magasins`);
console.log(`   Équipés Re-FAP : ${STORES_DATABASE.equipped.length} (Lambres-lez-Douai, Thiais)`);
console.log(`   Standards : ${STORES_DATABASE.standard.length} magasins`);
console.log(`   ☎️ Numéro unique pour tous les magasins : 0473378821`);

// Export pour utilisation
if (typeof module !== 'undefined' && module.exports) {
    module.exports = STORES_DATABASE;
}
