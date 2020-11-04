import React, { useState } from 'react';

function Die(props) {
  const minVal = props.min;
  const maxVal = props.max;
  const [randomNum, setRandomNum] = useState(
    Math.floor(Math.random() * (maxVal - minVal + 1) + minVal)
  );

  const handleRandomNum = () => {
    const number = Math.floor(Math.random() * (maxVal - minVal + 1) + minVal);
    setRandomNum(number);
    props.setDiceRoll(number);
  };

  return (
    <div className='grid-container-two'>
      <button className='diceButton' onClick={handleRandomNum}>
        Roll Dice
      </button>
      <h1 className='dice'>
        <span>{randomNum}</span>
      </h1>
    </div>
  );
}

export default Die;
