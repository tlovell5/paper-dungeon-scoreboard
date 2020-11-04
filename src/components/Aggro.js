import React, { useState } from 'react';

function Aggro(props) {
  const [count, setCount] = useState(0);
  function update(value) {
    if (count === 0 && value < 0) {
      return;
    }
    const newCount = count + value;
    setCount(newCount);
    props.setBaseAggro(newCount);
  }

  return (
    <div className='grid-container'>
      <h1 className='name'>Aggro</h1>
      <button className='decrease' onClick={() => update(-1)}>
        -
      </button>
      <h1 className='number'>{props.aggro}</h1>
      <button className='increase' onClick={() => update(1)}>
        +
      </button>
    </div>
  );
}

export default Aggro;
