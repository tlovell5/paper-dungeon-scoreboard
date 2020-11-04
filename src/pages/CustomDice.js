import React, { useState } from 'react';

function CustomDice() {
  const [minVal, setMinVal] = useState(1);
  const [maxVal, setMaxVal] = useState(20);
  const [randomNum, setRandomNum] = useState(5);

  const handleRandomNum = () => {
    setRandomNum(Math.floor(Math.random() * (maxVal - minVal + 1) + minVal));
  };

  return (
    <div className='hero'>
      <h2>Custom Dice</h2>
      <div className='container'>
        <div className='numContainer'>
          <div>
            <p>Min</p>
            <input
              type='number'
              value={minVal}
              onChange={(e) => setMinVal(+e.target.value)}
            />
          </div>
          <div>
            <p>Max</p>
            <input
              type='number'
              value={maxVal}
              onChange={(e) => setMaxVal(+e.target.value)}
            />
          </div>
          <br />
        </div>
        <button onClick={handleRandomNum}>Roll Dice</button>
      </div>
      <div className='randomNum'>
        <p>
          You rolled a <span>{randomNum}</span>
        </p>
      </div>
    </div>
  );
}

export default CustomDice;
