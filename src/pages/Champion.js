import React from 'react';
import { connect } from 'react-redux';

import Aggro from '../components/Aggro';
import Die from '../components/Die';
import Health from '../components/Health';

import {
  updateHealth,
  updateBaseAggro,
  updateDieRoll,
} from '../redux/actions/championActions';

function Champion(props) {
  return (
    <>
      <Health health={props.health} setHealth={props.updateChampionHealth} />
      <Aggro aggro={props.baseAggro} setBaseAggro={props.updateBaseAggro} />
      <div id='totalAggro'>
        Total Aggro: {props.baseAggro + props.lastDiceRoll}
      </div>
      <Die
        min={1}
        max={20}
        roll={props.lastDiceRoll}
        setDiceRoll={props.setDiceRoll}
      />
    </>
  );
}

const mapStateToProps = (state) => ({
  health: state.championReducer.health,
  baseAggro: state.championReducer.baseAggro,
  lastDiceRoll: state.championReducer.lastDiceRoll,
});

const mapDispatchToProps = (dispatch) => ({
  updateChampionHealth: (health) => dispatch(updateHealth(health)),
  updateBaseAggro: (aggro) => dispatch(updateBaseAggro(aggro)),
  setDiceRoll: (roll) => dispatch(updateDieRoll(roll)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Champion);
