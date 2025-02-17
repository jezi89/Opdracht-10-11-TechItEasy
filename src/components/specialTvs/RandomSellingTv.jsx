import {getTvName, getTvPrice, getTvSize} from "src/helpers/randomSellingTv.js";
import {bestSellingTv} from "src/constants/inventory.js";

function RandomSellingTv() {
    const randomTV = bestSellingTv;
    return (
        <div className="bestTV">
            <p>name: {getTvName(randomTV)}</p>
            <p>price: {getTvPrice(randomTV.price)}</p>
            <p>sizes: {getTvSize(randomTV.availableSizes)}</p>
        </div>
    );
}

export default RandomSellingTv;
