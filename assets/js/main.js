/**
 * Base de données des magasins Carter-Cash
 * Mise à jour : Septembre 2025
 * Magasins équipés Re-FAP : Lambres-lez-Douai et Thiais
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
            address: "Zone Commerciale du Luc",
            city: "Lambres-lez-Douai",
            postal: "59552",
            phone: "03 27 95 95 95",
            hours: "Lun-Sam: 9h-19h",
            lat: 50.3508,
            lng: 3.0639,
            equipped: true
        },
        {
            id: 2,
            name: "Carter-Cash Thiais",
            address: "Centre Commercial Belle Épine",
            city: "Thiais",
            postal: "94320",
            phone: "01 46 86 41 41",
            hours: "Lun-Sam: 9h-19h30",
            lat: 48.7569,
            lng: 2.3956,
            equipped: true
        }
    ],
    
    // ========================================
    // MAGASINS STANDARDS (sans machine)
    // Service 48 heures avec envoi atelier
    // ========================================
    standard: [
        // ÎLE-DE-FRANCE (sauf Thiais qui est équipé)
        { id: 3, name: "Carter-Cash Aulnay-sous-Bois", city: "Aulnay-sous-Bois", postal: "93600", phone: "01 48 66 52 52" },
        { id: 4, name: "Carter-Cash Créteil", city: "Créteil", postal: "94000", phone: "01 43 77 93 93" },
        { id: 5, name: "Carter-Cash Melun", city: "Melun", postal: "77000", phone: "01 64 39 00 00" },
        { id: 6, name: "Carter-Cash Gonesse", city: "Gonesse", postal: "95500", phone: "01 39 85 39 39" },
        { id: 7, name: "Carter-Cash Bondoufle", city: "Bondoufle", postal: "91070", phone: "01 60 86 64 64" },
        { id: 8, name: "Carter-Cash Mantes-la-Jolie", city: "Mantes-la-Jolie", postal: "78200", phone: "01 30 92 88 88" },
        
        // HAUTS-DE-FRANCE (sauf Lambres-lez-Douai qui est équipé)
        { id: 9, name: "Carter-Cash Lille Seclin", city: "Seclin", postal: "59113", phone: "03 20 32 68 68" },
        { id: 10, name: "Carter-Cash Amiens", city: "Amiens", postal: "80000", phone: "03 22 44 25 25" },
        { id: 11, name: "Carter-Cash Valenciennes", city: "Petite-Forêt", postal: "59494", phone: "03 27 28 50 50" },
        { id: 12, name: "Carter-Cash Lens", city: "Lens", postal: "62300", phone: "03 21 78 78 78" },
        { id: 13, name: "Carter-Cash Dunkerque", city: "Dunkerque", postal: "59140", phone: "03 28 59 12 12" },
        { id: 14, name: "Carter-Cash Calais", city: "Calais", postal: "62100", phone: "03 21 34 40 40" },
        { id: 15, name: "Carter-Cash Boulogne-sur-Mer", city: "Boulogne-sur-Mer", postal: "62200", phone: "03 21 31 53 53" },
        { id: 16, name: "Carter-Cash Arras", city: "Arras", postal: "62000", phone: "03 21 60 20 20" },
        { id: 17, name: "Carter-Cash Beauvais", city: "Beauvais", postal: "60000", phone: "03 44 84 36 36" },
        { id: 18, name: "Carter-Cash Compiègne", city: "Compiègne", postal: "60200", phone: "03 44 38 38 38" },
        
        // AUVERGNE-RHÔNE-ALPES
        { id: 19, name: "Carter-Cash Lyon Vénissieux", city: "Vénissieux", postal: "69200", phone: "04 78 70 83 83" },
        { id: 20, name: "Carter-Cash Clermont-Ferrand", city: "Cournon-d'Auvergne", postal: "63800", phone: "04 73 69 44 44" },
        { id: 21, name: "Carter-Cash Grenoble", city: "Saint-Martin-d'Hères", postal: "38400", phone: "04 76 24 48 48" },
        { id: 22, name: "Carter-Cash Saint-Étienne", city: "Saint-Étienne", postal: "42000", phone: "04 77 91 44 44" },
        { id: 23, name: "Carter-Cash Chambéry", city: "Chambéry", postal: "73000", phone: "04 79 68 58 58" },
        { id: 24, name: "Carter-Cash Annecy", city: "Seynod", postal: "74600", phone: "04 50 69 54 54" },
        { id: 25, name: "Carter-Cash Valence", city: "Valence", postal: "26000", phone: "04 75 81 00 00" },
        { id: 26, name: "Carter-Cash Bourg-en-Bresse", city: "Bourg-en-Bresse", postal: "01000", phone: "04 74 23 29 29" },
        { id: 27, name: "Carter-Cash Roanne", city: "Roanne", postal: "42300", phone: "04 77 72 32 32" },
        { id: 28, name: "Carter-Cash Vichy", city: "Vichy", postal: "03200", phone: "04 70 96 86 86" },
        { id: 29, name: "Carter-Cash Aurillac", city: "Aurillac", postal: "15000", phone: "04 71 63 42 42" },
        { id: 30, name: "Carter-Cash Montluçon", city: "Montluçon", postal: "03100", phone: "04 70 03 20 20" },
        
        // PROVENCE-ALPES-CÔTE D'AZUR
        { id: 31, name: "Carter-Cash Marseille La Valentine", city: "Marseille", postal: "13011", phone: "04 91 44 62 62" },
        { id: 32, name: "Carter-Cash Nice", city: "Nice", postal: "06200", phone: "04 93 18 19 19" },
        { id: 33, name: "Carter-Cash Avignon", city: "Avignon", postal: "84000", phone: "04 90 31 51 51" },
        { id: 34, name: "Carter-Cash Toulon", city: "La Garde", postal: "83130", phone: "04 94 23 24 24" },
        { id: 35, name: "Carter-Cash Aix-en-Provence", city: "Aix-en-Provence", postal: "13090", phone: "04 42 39 38 38" },
        { id: 36, name: "Carter-Cash Gap", city: "Gap", postal: "05000", phone: "04 92 51 36 36" },
        { id: 37, name: "Carter-Cash Fréjus", city: "Fréjus", postal: "83600", phone: "04 94 52 02 02" },
        { id: 38, name: "Carter-Cash Draguignan", city: "Draguignan", postal: "83300", phone: "04 94 50 64 64" },
        { id: 39, name: "Carter-Cash Aubagne", city: "Aubagne", postal: "13400", phone: "04 42 82 82 82" },
        
        // OCCITANIE
        { id: 40, name: "Carter-Cash Toulouse Balma", city: "Balma", postal: "31130", phone: "05 61 24 97 97" },
        { id: 41, name: "Carter-Cash Montpellier", city: "Pérols", postal: "34470", phone: "04 67 50 49 49" },
        { id: 42, name: "Carter-Cash Perpignan", city: "Perpignan", postal: "66000", phone: "04 68 54 22 22" },
        { id: 43, name: "Carter-Cash Nîmes", city: "Nîmes", postal: "30900", phone: "04 66 38 09 09" },
        { id: 44, name: "Carter-Cash Béziers", city: "Béziers", postal: "34500", phone: "04 67 31 68 68" },
        { id: 45, name: "Carter-Cash Narbonne", city: "Narbonne", postal: "11100", phone: "04 68 42 55 55" },
        { id: 46, name: "Carter-Cash Carcassonne", city: "Carcassonne", postal: "11000", phone: "04 68 47 71 71" },
        { id: 47, name: "Carter-Cash Albi", city: "Albi", postal: "81000", phone: "05 63 43 39 39" },
        { id: 48, name: "Carter-Cash Castres", city: "Castres", postal: "81100", phone: "05 63 72 30 30" },
        { id: 49, name: "Carter-Cash Montauban", city: "Montauban", postal: "82000", phone: "05 63 21 41 41" },
        { id: 50, name: "Carter-Cash Tarbes", city: "Tarbes", postal: "65000", phone: "05 62 38 35 35" },
        { id: 51, name: "Carter-Cash Auch", city: "Auch", postal: "32000", phone: "05 62 63 41 41" },
        { id: 52, name: "Carter-Cash Rodez", city: "Rodez", postal: "12000", phone: "05 65 73 11 11" },
        { id: 53, name: "Carter-Cash Agen", city: "Agen", postal: "47000", phone: "05 53 98 33 33" },
        
        // NOUVELLE-AQUITAINE
        { id: 54, name: "Carter-Cash Bordeaux Mérignac", city: "Mérignac", postal: "33700", phone: "05 56 34 52 52" },
        { id: 55, name: "Carter-Cash Pau", city: "Lescar", postal: "64230", phone: "05 59 81 59 59" },
        { id: 56, name: "Carter-Cash Bayonne", city: "Anglet", postal: "64600", phone: "05 59 52 38 38" },
        { id: 57, name: "Carter-Cash Limoges", city: "Limoges", postal: "87000", phone: "05 55 37 35 35" },
        { id: 58, name: "Carter-Cash Périgueux", city: "Périgueux", postal: "24000", phone: "05 53 02 82 82" },
        { id: 59, name: "Carter-Cash Brive", city: "Brive-la-Gaillarde", postal: "19100", phone: "05 55 86 11 11" },
        { id: 60, name: "Carter-Cash Angoulême", city: "Angoulême", postal: "16000", phone: "05 45 94 22 22" },
        { id: 61, name: "Carter-Cash La Rochelle", city: "La Rochelle", postal: "17000", phone: "05 46 41 61 61" },
        { id: 62, name: "Carter-Cash Niort", city: "Niort", postal: "79000", phone: "05 49 73 29 29" },
        { id: 63, name: "Carter-Cash Poitiers", city: "Poitiers", postal: "86000", phone: "05 49 61 43 43" },
        { id: 64, name: "Carter-Cash Dax", city: "Dax", postal: "40100", phone: "05 58 74 64 64" },
        
        // GRAND EST
        { id: 65, name: "Carter-Cash Strasbourg", city: "Illkirch-Graffenstaden", postal: "67400", phone: "03 88 66 32 32" },
        { id: 66, name: "Carter-Cash Reims", city: "Cormontreuil", postal: "51350", phone: "03 26 35 70 70" },
        { id: 67, name: "Carter-Cash Nancy", city: "Tomblaine", postal: "54510", phone: "03 83 33 20 20" },
        { id: 68, name: "Carter-Cash Metz", city: "Metz", postal: "57000", phone: "03 87 51 11 11" },
        { id: 69, name: "Carter-Cash Mulhouse", city: "Mulhouse", postal: "68100", phone: "03 89 60 48 48" },
        { id: 70, name: "Carter-Cash Colmar", city: "Colmar", postal: "68000", phone: "03 89 20 10 10" },
        { id: 71, name: "Carter-Cash Épinal", city: "Épinal", postal: "88000", phone: "03 29 31 48 48" },
        { id: 72, name: "Carter-Cash Charleville-Mézières", city: "Charleville-Mézières", postal: "08000", phone: "03 24 37 50 50" },
        { id: 73, name: "Carter-Cash Châlons-en-Champagne", city: "Châlons-en-Champagne", postal: "51000", phone: "03 26 21 31 31" },
        { id: 74, name: "Carter-Cash Troyes", city: "Troyes", postal: "10000", phone: "03 25 79 65 65" },
        { id: 75, name: "Carter-Cash Belfort", city: "Belfort", postal: "90000", phone: "03 84 22 54 54" },
        { id: 76, name: "Carter-Cash Besançon", city: "Besançon", postal: "25000", phone: "03 81 52 44 44" },
        
        // PAYS DE LA LOIRE
        { id: 77, name: "Carter-Cash Nantes", city: "Saint-Herblain", postal: "44800", phone: "02 40 92 15 15" },
        { id: 78, name: "Carter-Cash Angers", city: "Saint-Barthélemy-d'Anjou", postal: "49124", phone: "02 41 96 43 43" },
        { id: 79, name: "Carter-Cash Le Mans", city: "Le Mans", postal: "72000", phone: "02 43 84 69 69" },
        { id: 80, name: "Carter-Cash Laval", city: "Laval", postal: "53000", phone: "02 43 59 89 89" },
        { id: 81, name: "Carter-Cash La Roche-sur-Yon", city: "La Roche-sur-Yon", postal: "85000", phone: "02 51 38 38 38" },
        { id: 82, name: "Carter-Cash Saint-Nazaire", city: "Saint-Nazaire", postal: "44600", phone: "02 40 17 39 39" },
        { id: 83, name: "Carter-Cash Cholet", city: "Cholet", postal: "49300", phone: "02 41 71 05 05" },
        
        // BRETAGNE
        { id: 84, name: "Carter-Cash Rennes", city: "Chantepie", postal: "35135", phone: "02 99 41 69 69" },
        { id: 85, name: "Carter-Cash Brest", city: "Guipavas", postal: "29490", phone: "02 98 84 58 58" },
        { id: 86, name: "Carter-Cash Lorient", city: "Caudan", postal: "56850", phone: "02 97 76 30 30" },
        { id: 87, name: "Carter-Cash Vannes", city: "Vannes", postal: "56000", phone: "02 97 54 76 76" },
        { id: 88, name: "Carter-Cash Quimper", city: "Quimper", postal: "29000", phone: "02 98 64 44 44" },
        { id: 89, name: "Carter-Cash Saint-Brieuc", city: "Saint-Brieuc", postal: "22000", phone: "02 96 78 76 76" },
        
        // NORMANDIE
        { id: 90, name: "Carter-Cash Rouen", city: "Le Grand-Quevilly", postal: "76120", phone: "02 35 67 26 26" },
        { id: 91, name: "Carter-Cash Caen", city: "Mondeville", postal: "14120", phone: "02 31 35 65 65" },
        { id: 92, name: "Carter-Cash Le Havre", city: "Gonfreville-l'Orcher", postal: "76700", phone: "02 35 13 44 44" },
        { id: 93, name: "Carter-Cash Cherbourg", city: "Cherbourg", postal: "50100", phone: "02 33 78 09 09" },
        { id: 94, name: "Carter-Cash Évreux", city: "Évreux", postal: "27000", phone: "02 32 28 75 75" },
        
        // CENTRE-VAL DE LOIRE
        { id: 95, name: "Carter-Cash Tours", city: "Tours", postal: "37100", phone: "02 47 52 43 43" },
        { id: 96, name: "Carter-Cash Orléans", city: "Saran", postal: "45770", phone: "02 38 73 04 04" },
        { id: 97, name: "Carter-Cash Bourges", city: "Bourges", postal: "18000", phone: "02 48 23 08 08" },
        { id: 98, name: "Carter-Cash Chartres", city: "Chartres", postal: "28000", phone: "02 37 91 66 66" },
        { id: 99, name: "Carter-Cash Blois", city: "Blois", postal: "41000", phone: "02 54 90 44 44" },
        { id: 100, name: "Carter-Cash Châteauroux", city: "Châteauroux", postal: "36000", phone: "02 54 34 10 10" },
        
        // BOURGOGNE-FRANCHE-COMTÉ
        { id: 101, name: "Carter-Cash Dijon", city: "Quetigny", postal: "21800", phone: "03 80 48 21 21" },
        { id: 102, name: "Carter-Cash Auxerre", city: "Auxerre", postal: "89000", phone: "03 86 46 48 48" },
        { id: 103, name: "Carter-Cash Mâcon", city: "Mâcon", postal: "71000", phone: "03 85 21 93 93" },
        { id: 104, name: "Carter-Cash Chalon-sur-Saône", city: "Chalon-sur-Saône", postal: "71100", phone: "03 85 90 50 50" },
        { id: 105, name: "Carter-Cash Montbéliard", city: "Montbéliard", postal: "25200", phone: "03 81 99 46 46" }
    ]
};

// Export pour utilisation
if (typeof module !== 'undefined' && module.exports) {
    module.exports = STORES_DATABASE;
}
