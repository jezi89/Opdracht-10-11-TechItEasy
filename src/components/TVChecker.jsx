import {useState, useEffect} from 'react';
import TVCheckerButton from './TVCheckerButton.jsx';
import TVCheckerBox from './TVCheckerBox.jsx';

function TVChecker() {
    const [clicked, setClicked] = useState(false);

    useEffect(() => {
        const tvBox = document.querySelector('.clickable');

        const handleClick = () => {
            setClicked(true);
        };

        tvBox.addEventListener('click', handleClick);

        return () => {
            tvBox.removeEventListener('click', handleClick);
        };
    }, []);

    return clicked ? <TVCheckerBox/> : <TVCheckerButton/>;
}

export default TVChecker;