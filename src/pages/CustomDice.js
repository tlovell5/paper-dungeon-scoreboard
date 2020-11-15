import React from 'react';
import { connect } from 'react-redux';

import {
  updateMin,
  updateMax,
  updateDieRoll,
} from '../redux/actions/customDiceActions';

function CustomDice(props) {
  const handleRandomNum = () => {
    props.setDiceRoll(
      Math.floor(Math.random() * (props.max - props.min + 1) + props.min)
    );
  };
  console.log(props);
  return (
    <div className='hero'>
      <h2>Custom Dice</h2>
      <div className='container'>
        <div className='numContainer'>
          <div>
            <p>Min</p>
            <input
              type='number'
              value={props.min}
              onChange={(e) => props.setDiceMin(+e.target.value)}
            />
          </div>
          <div>
            <p>Max</p>
            <input
              type='number'
              value={props.max}
              onChange={(e) => props.setDiceMax(+e.target.value)}
            />
          </div>
          <br />
        </div>
        <button onClick={handleRandomNum}>Roll Dice</button>
      </div>
      <div className='randomNum'>
        <p>
          You rolled a <span>{props.lastDiceRoll}</span>
        </p>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  min: state.customDiceReducer.min,
  max: state.customDiceReducer.max,
  lastDiceRoll: state.customDiceReducer.lastDiceRoll,
});

const mapDispatchToProps = (dispatch) => ({
  setDiceMin: (min) => dispatch(updateMin(min)),
  setDiceMax: (max) => dispatch(updateMax(max)),
  setDiceRoll: (roll) => dispatch(updateDieRoll(roll)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CustomDice);
