// import {useState, useEffect} from 'react';
// import TVCheckerButtonOld from './TVCheckerButton.old.jsx';
// import TVCheckerBoxOld from './TVCheckerBox.old.jsx';
//
// function TVCheckerOld() {
//     const [clicked, setClicked] = useState(false);
//
//     useEffect(() => {
//         const tvBox = document.querySelector('.clickable');
//
//         const handleClick = () => {
//             setClicked(true);
//         };
//
//         tvBox.addEventListener('click', handleClick);
//
//         return () => {
//             tvBox.removeEventListener('click', handleClick);
//         };
//     }, []);
//
//     return clicked ? <TVCheckerBoxOld/> : <TVCheckerButtonOld/>;
// }
//
// export default TVCheckerOld;