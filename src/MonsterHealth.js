import React, { useState } from 'react';

function MonsterHealth() {
  const [count, setCount] = useState(0);
  const [answer, setAnswer] = useState('Yes');
  function increment() {
    setCount((prevCount) => prevCount + 1);
  }

  function decrement() {
    setCount((prevCount) => prevCount - 1);
  }

  return (
    <div class='grid-container'>
      <h1 class='name'>Monster</h1>
      <button className='decrease' onClick={decrement}>
        -
      </button>
      <h1 class='number'>{count}</h1>
      <button className='increase' onClick={increment}>
        +
      </button>
    </div>
  );
}

export default MonsterHealth;
