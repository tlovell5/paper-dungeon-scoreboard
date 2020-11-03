import React from 'react';
import MonsterDice from './MonsterDice';
import MonsterHealth from './MonsterHealth';

function Monster() {
  return (
    <>
      <MonsterHealth />
      <MonsterDice />
    </>
  );
}

export default Monster;
