import React, { useState } from 'react';
import './AddDivForm.css';

const AddDivForm = ({ onAddDiv }) => {
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddDiv({ width, height, backgroundColor });
    setWidth('');
    setHeight('');
    setBackgroundColor('');
  };

  return (
    <form onSubmit={handleSubmit} className="add-div-form">
      <label>
        Width
        <input
          type="text"
          value={width}
          onChange={(e) => setWidth(e.target.value)}
        />
      </label>
      <br />
      <label>
        Height
        <input
          type="text"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
      </label>
      <br />
      <label>
        Background Color
        <input
          type="text"
          value={backgroundColor}
          onChange={(e) => setBackgroundColor(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Add Div</button>
    </form>
  );
};

export default AddDivForm;
