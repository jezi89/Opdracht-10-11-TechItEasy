import salesHelper from './salesHelper.js';
import tvsBuyInHelper from './tvsBuyInHelper.js';

const handleSelect = (setVariableTVSalesData, setShowTVBox, boxType) => {
    const {totalTvsSold, tvsToBedSold} = salesHelper();
    const totalBuyIn = tvsBuyInHelper();
    
    // Eerst de data updaten
    switch(boxType) {
        case 'sold':
            setVariableTVSalesData(totalTvsSold);
            break;
        case 'stock':
            setVariableTVSalesData(totalBuyIn);
            break;
        case 'toSell':
            setVariableTVSalesData(tvsToBedSold);
            break;
        default:
            setVariableTVSalesData(0);
    }
    
    // Dan pas de weergave updaten
    setTimeout(() => {
        setShowTVBox(true);
    }, 0);
};

export default handleSelect;