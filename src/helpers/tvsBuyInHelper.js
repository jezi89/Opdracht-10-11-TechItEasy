import {inventory} from "src/constants/inventory.js";

function tvsBuyInHelper() {
    let totalBuyIn = 0
    if (!inventory || !Array.isArray(inventory)) {
        return 0; // ✅ Zorgt ervoor dat de functie geen fout geeft als inventory niet geladen is
    }
    totalBuyIn = inventory.reduce((total, tv) => total + (tv.originalStock || 0), 0);
    return totalBuyIn;

}

export default tvsBuyInHelper
