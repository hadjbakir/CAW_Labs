import React, { useState } from 'react';
import ButtonClickComponent from './components/ButtonClickComponent';
import ToggleButtonComponent from './components/ToggleButtonComponent';
import AppCounter from './components/AppCounter';
import './App.css';

const Exo1 = () => {
  const [buttonClicked, setButtonClicked] = useState(null);

  return (
    <div className="app-container">
      {/*****************************  Exo 01 **********************************/}
      <h1>EXO 01</h1>
      
      <ButtonClickComponent />
      <ToggleButtonComponent />
      <div>
        <button onClick={() => setButtonClicked(1)} className="counter-button">
          Button1
        </button>
        <button onClick={() => setButtonClicked(2)} className="counter-button">
          Button2
        </button>
        <button onClick={() => setButtonClicked(3)} className="counter-button">
          Button3
        </button>
      </div>
      {buttonClicked !== null && (
        <p className="clicked-info">Button #{buttonClicked} was clicked</p>
      )}
      <AppCounter />
    </div>
  );
};

export default Exo1;
