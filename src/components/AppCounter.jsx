import React, { useState } from 'react';
import './../App.css';

const AppCounter = () => {
    const [counter, setCounter] = useState(0);

    const handleInc = () => {
        setCounter((prevCounter) => prevCounter + 1);
    };

    const handleDec = () => {
        setCounter((prevCounter) => prevCounter - 1);
    };

    return (
        <div className="app-container">
        <div>
            <button onClick={handleInc} className="counter-button">
            Inc
            </button>
            <h1 className="counter-value">{counter}</h1>
            <button onClick={handleDec} className="counter-button">
            Dec
            </button>
        </div>
        </div>
    );
};

export default AppCounter;
