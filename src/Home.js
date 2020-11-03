import React, { useState } from 'react';
import Aggro from './Aggro';
import Die from './Die';
import Health from './Health';
import MonsterHealth from './MonsterHealth';
import MonsterDice from './MonsterDice';

function Home() {
  const [baseAggro, setbaseAggro] = useState(0);
  const [diceRoll, setdiceRoll] = useState(0);

  return (
    <>
      <Health />
      <Aggro setbaseAggro={setbaseAggro} />
      <div id='totalAggro'>Total Aggro: {baseAggro + diceRoll}</div>
      <Die setdiceRoll={setdiceRoll} />
      <br />

      <MonsterHealth />
      <MonsterDice />
    </>
  );
}

export default Home;
