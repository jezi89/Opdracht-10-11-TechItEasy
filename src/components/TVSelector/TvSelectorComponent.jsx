import React from "react";
import "./TvSelectorComponent.css";

// ⚠️ Gebruik `?react`
import TVSelectorSVG from "src/assets/svgs/TvSelectorComponent.svg?react";

const TVSelectorComponent = ({onSelect}) => {
    return (
        <div className="tvSelector" onClick={onSelect}>
            <TVSelectorSVG/> {/* Render SVG als component */}
        </div>
    );
};

export default TVSelectorComponent;
