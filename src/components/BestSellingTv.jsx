import {getTvName, getTvPrice, getTvSize} from "src/helpers/bestSellingTv.js";
import {bestSellingTv} from "src/constants/inventory.js";

function BestSellingTv() {
    return <div>
        name {getTvName(bestSellingTv)},
        price {getTvPrice(bestSellingTv.price)},
        sizes {getTvSize(bestSellingTv.availableSizes)},
    </div>
}

export default BestSellingTv
