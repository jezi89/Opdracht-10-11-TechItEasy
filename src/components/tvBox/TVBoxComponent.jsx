import PropTypes from 'prop-types';
import "./TVBoxComponent.css";
import TVBoxSVG from "./TVBoxSVG.jsx";

const TVBoxComponent = ({variableTVSalesData, backgroundColor, title}) => {
    return <TVBoxSVG 
        variableTVSalesData={variableTVSalesData} 
        title={title}
        backgroundColor={backgroundColor}
    />
}

TVBoxComponent.propTypes = {
    variableTVSalesData: PropTypes.number.isRequired,

    backgroundColor: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
};

export default TVBoxComponent;
