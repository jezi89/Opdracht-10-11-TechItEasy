import {useState, useEffect} from "react";
import TVBoxComponent from "./components/tvBox/TVBoxComponent.jsx";
import TVSelectorComponent from "./components/tvSelector/TvSelectorComponent.jsx";
import handleSelect from "./helpers/handleSelect.js";
import {inventory} from "./constants/inventory.js";
import BestSellingTv from "./components/BestSellingTv.jsx"
import './App.css';


function App() {

    const [showTVBox1, setShowTVBox1] = useState(false);
    const [showTVBox2, setShowTVBox2] = useState(false);
    const [showTVBox3, setShowTVBox3] = useState(false);
    const [calculatedTvData1, setCalculatedTvData1] = useState(0);
    const [calculatedTvData2, setCalculatedTvData2] = useState(0);
    const [calculatedTvData3, setCalculatedTvData3] = useState(0);
    const [sortedInventory, setSortedInventory] = useState([]);

    useEffect(() => {
        setSortedInventory(inventory);
    }, []);

    const sortBySold = () => {
        const sorted = [...sortedInventory].sort((a, b) => b.sold - a.sold);
        setSortedInventory(sorted);
    };

    const sortByPrice = () => {
        const sorted = [...sortedInventory].sort((a, b) => a.price - b.price);
        setSortedInventory(sorted);
    };

    const sortByRefreshRate = () => {
        const sorted = [...sortedInventory].sort((a, b) => b.refreshRate - a.refreshRate);
        setSortedInventory(sorted);
    };

    return (

        <div className="container">
            <div className="app">
                <div>
                    {showTVBox1 ? (
                        <TVBoxComponent
                            title="Verkochte TV's"
                            variableTVSalesData={calculatedTvData1}
                            sortedInventory={sortedInventory}
                            backgroundColor="#14AE5C"
                        />
                    ) : (
                        <TVSelectorComponent
                            title="Verkochte TV's"
                            onSelect={() => handleSelect(setCalculatedTvData1, setShowTVBox1, 'sold')}
                        />
                    )}
                </div>
                <div>
                    {showTVBox2 ? (
                        <TVBoxComponent
                            title="Totaal Ingekocht"
                            variableTVSalesData={calculatedTvData2}
                            sortedInventory={sortedInventory}
                            backgroundColor="#023c99"
                        />
                    ) : (
                        <TVSelectorComponent
                            title="Totaal Ingekocht"
                            onSelect={() => handleSelect(setCalculatedTvData2, setShowTVBox2, 'stock')}
                        />
                    )}
                </div>
                <div>
                    {showTVBox3 ? (
                        <TVBoxComponent
                            title="Nog te Verkopen"
                            variableTVSalesData={calculatedTvData3}
                            sortedInventory={sortedInventory}
                            backgroundColor="#C00F0C"
                        />
                    ) : (
                        <TVSelectorComponent
                            title="Nog te Verkopen"
                            onSelect={() => handleSelect(setCalculatedTvData3, setShowTVBox3, 'toSell')}
                        />
                    )}
                </div>
            </div>
            <BestSellingTv/>
            <div className="buttons-container">
                <button className="sort-button" onClick={sortBySold}>
                    Meest verkocht eerst
                </button>
                <button className="sort-button" onClick={sortByPrice}>
                    Goedkoopste eerst
                </button>
                <button className="sort-button" onClick={sortByRefreshRate}>
                    Meest geschikt voor sport eerst
                </button>
            </div>

            <div className="inventory-list">
                <ul>
                    {sortedInventory.map(tv => (
                        <li key={tv.name}>
                            <span className={"tv-info"}>{tv.name}</span>
                            <div>
                                <span>{tv.price}€</span>
                                <span> - </span>
                                <span>{tv.refreshRate}Hz</span>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}


export default App;
