import React, { useState } from 'react';

function Health(props) {
  const [count, setCount] = useState(props.health);
  function update(value) {
    if (count === 0 && value < 0) {
      return;
    }
    const newCount = count + value;
    setCount(newCount);
    props.setHealth(newCount);
  }

  return (
    <div className='grid-container'>
      <h1 className='name'>Health</h1>
      <button className='decrease' onClick={() => update(-1)}>
        -
      </button>
      <h1 className='number'>{props.health}</h1>
      <button className='increase' onClick={() => update(1)}>
        +
      </button>
    </div>
  );
}

export default Health;
