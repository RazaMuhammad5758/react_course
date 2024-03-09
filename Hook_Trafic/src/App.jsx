import React, { useState } from 'react'
import './App.css'

const App = () => {

  const [box, setBox] = useState(1)

  const redBox = () => {
    if (box>5) {
      setTimeout(() => {
        setBox(box+1);
      }, 5000);
      alert("Done")
    }else{
      setBox(box+1);
    }
  };

  return (
    <div>
      <button onClick={redBox}>Click</button>
      <div className='box'>Box</div>
    </div>
  )
}

export default App

