import React, { useState } from 'react';
import { connect } from 'react-redux';

import Aggro from '../components/Aggro';
import Die from '../components/Die';
import Health from '../components/Health';

function Monster() {
  const [health, setHealth] = useState(0);
  const [baseAggro, setBaseAggro] = useState(0);
  const [diceRoll, setDiceRoll] = useState(0);

  return (
    <>
      <Health health={health} setHealth={setHealth} />
      <Aggro aggro={baseAggro} setBaseAggro={setBaseAggro} />
      <Die min={1} max={6} setDiceRoll={setDiceRoll} />
    </>
  );
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Monster);
