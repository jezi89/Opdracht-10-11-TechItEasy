import React from "react";
import "./TVBoxComponent.css";
import tvsSoldHelper from "src/helpers/tvsSoldHelper.js";

// ⚠️ Gebruik `?react`, NIET `?import`
import TVBoxSVG from "src/assets/svgs/TVBoxComponent.svg?react";

const TVBoxComponent = () => {
    const totalTvsSold = tvsSoldHelper();

    return (
        <div>
            <TVBoxSVG/> {/* SVG als component */}
            <svg width="435" height="285">
                <text x="200" y="150" fontSize="40" fill="white" textAnchor="middle">
                    {totalTvsSold}
                </text>
            </svg>
        </div>
    );
};

export default TVBoxComponent;
