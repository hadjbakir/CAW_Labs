import React from 'react';
import DisplayTab from './components/DisplayTab';
import './Exo2.css'; 


const Exo2 = () => {
  const table1 = ["hello", "world", "from", "react"];
  const table2 = ["react", "from", "world", "hello"];

  return (
    <div className="app-container">
      
      <h1>EXO 02</h1>
      <hr />
      <div>
        <DisplayTab tab={table1} displayOption={1} />
        <hr />
        <DisplayTab tab={table1} displayOption={2} />
        <hr />
        <DisplayTab tab={table1} displayOption={3} />
        <hr />
        <DisplayTab tab={table1} displayOption={4} />
      </div>
      <hr />
      <div>
        <DisplayTab tab={table1} displayOption={2} />
        <DisplayTab tab={table2} displayOption={2} />
      </div>
      <hr />
    </div>
  );
};

export default Exo2;
