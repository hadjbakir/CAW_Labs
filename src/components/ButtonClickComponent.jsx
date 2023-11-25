import React, { useState } from 'react';
import './ButtonClickComponent.css';

const ButtonClickComponent = () => {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(true);
    };

    return (
        <div className="button-container">
            <button
                onClick={handleClick}
                className={`click-me-button ${clicked ? 'clicked-text' : ''}`}
            >
                ClickMe
            </button>
            {clicked && <p className="clicked-text-2">Clicked</p>}
        </div>
    );
};

export default ButtonClickComponent;
