import {inventory} from "src/constants/inventory.js";

function tvsSoldHelper() {
    if (!inventory || !Array.isArray(inventory)) {
        return 0; // ✅ Zorgt ervoor dat de functie geen fout geeft als inventory niet geladen is
    }

    return inventory.reduce((total, tv) => total + (tv.originalStock || 0), 0);
}

export default tvsSoldHelper