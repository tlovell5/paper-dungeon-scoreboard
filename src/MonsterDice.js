import React, { useState } from 'react';

function MonsterDice() {
  const [minVal, setMinVal] = useState(1);
  const [maxVal, setMaxVal] = useState(6);
  const [randomNum, setRandomNum] = useState(
    Math.floor(Math.random() * (maxVal - minVal + 1) + minVal)
  );

  const handleRandomNum = () => {
    setRandomNum(Math.floor(Math.random() * (maxVal - minVal + 1) + minVal));
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

export default MonsterDice;
