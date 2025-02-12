import React, {useState} from "react";
import TVBoxComponent from "./components/TVBox/TVBoxComponent.jsx";
import TVSelectorComponent from "./components/TVSelector/TvSelectorComponent.jsx";

function App() {
    const [showTVBox, setShowTVBox] = useState(false);
    return (
        <div className="app">
            {showTVBox ? (
                <TVBoxComponent/>
            ) : (

                <TVSelectorComponent onSelect={() => setShowTVBox(true)}/>
            )}
        </div>
    );
}

export default App;