import React, {useEffect, useState} from "react";
import "./TVBoxComponent.css";
import tvsSoldHelper from "src/helpers/tvsSoldHelper.js";
import TVBoxSVG from "./TVBoxSVG.jsx"; // ✅ Importeer de SVG als React-component

const TVBoxComponent = () => {
    const [totalTvsSold, setTotalTvsSold] = useState(0);

    useEffect(() => {
        setTotalTvsSold(tvsSoldHelper());
    }, []);

    return (
        <div>
            <TVBoxSVG totalTvsSold={totalTvsSold}/> {/* ✅ Nu netjes gescheiden! */}
        </div>
    );
};

export default TVBoxComponent;