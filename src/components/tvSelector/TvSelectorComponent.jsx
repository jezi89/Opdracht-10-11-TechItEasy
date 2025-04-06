import PropTypes from 'prop-types';
import "./TvSelectorComponent.css";
import TVSelectorSVG from "./TvSelectorSVG.jsx";


const TVSelectorComponent = ({onSelect, title}) => {
    return (
        <button 
            className="tvSelector"
            onClick={onSelect}
            type="button"
            aria-label="Selecteer TV">
            <TVSelectorSVG title={title}/> 
        </button>
    );
};

TVSelectorComponent.propTypes = {
    onSelect: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired
};

export default TVSelectorComponent;