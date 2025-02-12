import {inventory} from 'src/constants/inventory.js';

function tvsSoldHelper() {
    let totalTvsSold = 0;
    inventory.forEach(tv => {
        totalTvsSold += tv.sold;
    })
    console.log(totalTvsSold);
    return totalTvsSold;
}

export default tvsSoldHelper;