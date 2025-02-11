import { inventory } from '../constants/inventory.js';

function TVsSoldHelper () {
    let totalTvsSold = 0;
    inventory.forEach(tv => {
        totalTvsSold += tv.sold;
    })
    console.log(totalTvsSold);
    return totalTvsSold;
}

export default TVsSoldHelper;