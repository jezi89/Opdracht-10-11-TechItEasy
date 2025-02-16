import React from "react";

const TVButtonsComponent = ({onSortBySold, onSortByPrice, onSortByRefreshRate}) => {
    return (
        <div>
            <button onClick={onSortBySold}>Meest verkocht eerst</button>
            <button onClick={onSortByPrice}>Goedkoopste eerst</button>
            <button onClick={onSortByRefreshRate}>Meest geschikt voor sport eerst</button>
        </div>
    );
};

export default TVButtonsComponent;
