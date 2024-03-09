import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [box, setBox] = useState(1);

  const redBox = () => {
    if (box === 1) { // Check if it's the first click
      setTimeout(() => {
        setBox(2); // Transition to orange after 5 seconds
      }, 5000);
    } else if (box === 2) { // Check if box is orange
      setTimeout(() => {
        setBox(3); // Transition to green after 5 seconds
      }, 5000);
    } else if (box === 3) { // Check if box is green
      setTimeout(() => {
        setBox(4); // Reset box count after 5 seconds
      }, 5000);
    }
  };

  useEffect(() => {
    // Trigger redBox function automatically when component mounts
    redBox();
  }, []); // Empty dependency array to run the effect only once

  return (
    <div>
      <button onClick={redBox}>Click</button>
      <div className='box'>{box === 1 ? 'Stop' : box === 2 ? 'Ready' : box === 3 ? 'Go' : ''}</div>
    </div>
  );
};

export default App;
