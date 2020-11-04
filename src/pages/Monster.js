import React from 'react';
import { connect } from 'react-redux';

import Die from '../components/Die';
import Health from '../components/Health';

import { updateHealth, updateDieRoll } from '../redux/actions/monsterActions';

function Monster(props) {
  return (
    <>
      <Health health={props.health} setHealth={props.updateMonsterHealth} />
      <Die
        min={1}
        max={6}
        roll={props.lastDiceRoll}
        setDiceRoll={props.setDiceRoll}
      />
    </>
  );
}

const mapStateToProps = (state) => ({
  health: state.monsterReducer.health,
  lastDiceRoll: state.monsterReducer.lastDiceRoll,
});

const mapDispatchToProps = (dispatch) => ({
  updateMonsterHealth: (health) => dispatch(updateHealth(health)),
  setDiceRoll: (roll) => dispatch(updateDieRoll(roll)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Monster);
