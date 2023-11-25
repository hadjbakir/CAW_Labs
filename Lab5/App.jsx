import React, { useState } from 'react';
import ButtonClickComponent from './components/ButtonClickComponent';
import ToggleButtonComponent from './components/ToggleButtonComponent';
import AppCounter from './components/AppCounter';
import DisplayTab from './components/DisplayTab';
import AuthForm from './components/AuthForm';
import UserList from './components/UserList';
import AddDivForm from './components/AddDivForm';
import DisplayDivs from './components/DisplayDivs';
import Exo1 from './Exo1'; // Import the new components
import Exo2 from './Exo2';
import Exo3 from './Exo3';
import Exo4 from './Exo4';
import './App.css';

const App = () => {
  const [buttonClicked, setButtonClicked] = useState(null);

  const handleButtonClick = (exerciseNumber) => {
    setButtonClicked(exerciseNumber);
  };
  return (
    <div className="app-container">
      {/* Existing code... */}
      <div>
        {/* Four buttons corresponding to exercises */}
        <button onClick={() => setButtonClicked(1)} className="exercise-button">
          Exercise 01
        </button>

        <button onClick={() => setButtonClicked(2)} className="exercise-button">
          Exercise 02
        </button>

        <button onClick={() => setButtonClicked(3)} className="exercise-button">
          Exercise 03
        </button>

        <button onClick={() => setButtonClicked(4)} className="exercise-button">
          Exercise 04
        </button>
      </div>

      {buttonClicked === 1 && <Exo1 />}
      {buttonClicked === 2 && <Exo2 />}
      {buttonClicked === 3 && <Exo3 />}
      {buttonClicked === 4 && <Exo4 />}

    </div>
  )

 
};

export default App;
