import React, { useState } from 'react';
import './DisplayTab.css';

const DisplayTab = ({ tab, displayOption }) => {
  const [displayedTab, setDisplayedTab] = useState(tab);

  const handleItemClick = (index) => {
    const newTab = [...displayedTab];
    newTab.splice(index, 1);
    setDisplayedTab(newTab);
  };

  return (
    <div className="display-tab-container">
      <ul className="display-tab-list">
        {displayedTab.map((item, index) => (
          <li
            key={index}
            className={`display-tab-item display-option-${displayOption}`}
            onClick={() => displayOption === 3 && handleItemClick(index)}
          >
            {displayOption === 1 && item}
            {displayOption === 2 && `Element ${index + 1} is: ${item}`}
            {displayOption === 3 && `Element ${index + 1} is: ${item}`}
            {displayOption === 4 && `Element ${index + 1} is: ${item}`}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DisplayTab;
