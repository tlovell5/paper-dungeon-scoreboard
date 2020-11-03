import React, { useState } from 'react';

function Die(props) {
  const [minVal, setMinVal] = useState(1);
  const [maxVal, setMaxVal] = useState(20);
  const [randomNum, setRandomNum] = useState(
    Math.floor(Math.random() * (maxVal - minVal + 1) + minVal)
  );

  const handleRandomNum = () => {
    const number = Math.floor(Math.random() * (maxVal - minVal + 1) + minVal);
    setRandomNum(number);
    props.setdiceRoll(number);
  };

  return (
    <div class='grid-container-two'>
      <button class='diceButton' onClick={handleRandomNum}>
        Roll Dice
      </button>
      <h1 class='dice'>
        <span>{randomNum}</span>
      </h1>
    </div>
  );
}

export default Die;
