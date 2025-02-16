import {inventory} from 'src/constants/inventory.js';
import tvsBuyInHelper from "src/helpers/tvsBuyInHelper.js";

// Voor implementatie details en overwegingen, zie: /src/docs/implementation-notes.md
function salesHelper() {
    let totalTvsSold = 0;
    let tvsToBedSold = 0;
    if (!inventory || !Array.isArray(inventory)) {
        return {totalTvsSold: 0, tvsToBedSold: 0};
    }
    totalTvsSold = inventory.reduce((total, tv) => total + (tv.sold || 0), 0);
    tvsToBedSold = tvsBuyInHelper() - totalTvsSold;

    return {totalTvsSold, tvsToBedSold};
}

export default salesHelper;
