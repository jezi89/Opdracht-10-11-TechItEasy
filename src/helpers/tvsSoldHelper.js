import {inventory} from 'src/constants/inventory.js';
//
// // Dit had ik zelf:
// function tvsSoldHelper() {
//     let totalTvsSold = 0;
//     inventory.forEach(tv => {
//         totalTvsSold += tv.sold;
//     })
//     return totalTvsSold;
// }
//
// export default tvsSoldHelper;

// Dit is beter om mijn knop te kunnen bouwen en te wahcten to inventory geladen is:


function tvsSoldHelper() {
    if (!inventory || !Array.isArray(inventory)) {
        return 0; // ✅ Zorgt ervoor dat de functie geen fout geeft als inventory niet geladen is
    }

    return inventory.reduce((total, tv) => total + (tv.sold || 0), 0);
}

export default tvsSoldHelper;