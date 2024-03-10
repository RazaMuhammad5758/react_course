import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [box, setBox] = useState(1);

  const redBox = () => {
    if (box === 1) { // Check if it's the first click
      setTimeout(() => {
        setBox(6); // Set box count to 6 after 5 seconds
        document.querySelector('.box').style.backgroundColor = 'orange'; 
        document.querySelector('.box').innerHTML = 'Ready'; 
      }, 5000);
    } else if (box > 6) { // Reset box count and styles after 5 clicks
      setTimeout(() => {
        setBox(); // Reset box count after 5 clicks
        document.querySelector('.box').style.backgroundColor = 'green'; 
        document.querySelector('.box').innerHTML = 'Go'; 
      }, 5000);
    } 
    else if (box > 5) { // Reset box count and styles after 5 clicks
      setTimeout(() => {
        setBox(1); // Reset box count after 5 clicks
        document.querySelector('.box').style.backgroundColor = 'red'; 
        document.querySelector('.box').innerHTML = 'Stop'; 
      }, 5000);
    } else {
      setBox(box + 1); // Increment box count
    }
  };

  return (
    <div>
      <button onClick={redBox}>Click</button>
      <div className='box'>Stop</div>
    </div>
  );
};

export default App;
