import React, { useState } from 'react';
import './ToggleButtonComponent.css';

const ToggleButtonComponent = () => {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked((prevClicked) => !prevClicked);
    };

    return (
        <div className="button-container">
        <button
            onClick={handleClick}
            className={`toggle-button ${clicked ? 'clicked' : ''}`}
        >
            {clicked ? 'Clicked' : 'Not Clicked'}
        </button>
        </div>
    );
};

export default ToggleButtonComponent;
