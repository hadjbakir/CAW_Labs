import React, { useState } from 'react';
import AddDivForm from './components/AddDivForm';
import DisplayDivs from './components/DisplayDivs';

const Exo4 = () => {
  const [divs, setDivs] = useState([]);

  const handleAddDiv = (newDiv) => {
    setDivs([...divs, newDiv]);
  };

  return (
    <div className="app-container">
      <h1>EXO 04</h1>
      
      <AddDivForm onAddDiv={handleAddDiv} />
      <DisplayDivs divs={divs} />
    </div>
  );
};

export default Exo4;
