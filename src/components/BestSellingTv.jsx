import {getTvName, getTvPrice, getTvSize} from "src/helpers/bestSellingTv.js";
import {bestSellingTv} from "src/constants/inventory.js";

function BestSellingTv() {
    return <div>
        <p>name {getTvName(bestSellingTv)}</p>

        <p>price {getTvPrice(bestSellingTv.price)}</p>

        <p>sizes {getTvSize(bestSellingTv.availableSizes)}</p>
    </div>
}

export default BestSellingTv
