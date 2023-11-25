import React from 'react';
import './DisplayDivs.css';

const DisplayDivs = ({ divs }) => {
  return (
    <div className="display-divs">
      {divs.map((div, index) => (
        <div
          key={index}
          style={{
            width: div.width,
            height: div.height,
            backgroundColor: div.backgroundColor,
            margin: 'auto',
            padding: '10px',
          }}
        >
          {`${index + 1}`}
        </div>
      ))}
    </div>
  );
};

export default DisplayDivs;
