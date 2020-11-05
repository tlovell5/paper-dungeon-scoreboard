import React from 'react';
import { connect } from 'react-redux';

import Aggro from '../components/Aggro';
import Die from '../components/Die';
import Health from '../components/Health';

import { champions } from '../config/ChampionCards';

import {
  updateHealth,
  updateBaseAggro,
  updateDieRoll,
  setChampion,
  drawTwo,
} from '../redux/actions/championActions';

function Champion(props) {
  const getChampions = () => {
    return champions.map((champion, index) => {
      return (
        <option value={index} key={champion.champion + champion.id}>
          {champion.champion}
        </option>
      );
    });
  };

  const showCards = () => {
    return props.drawnCards.map((card) => {
      return <div key={card.id}>{card.ability}</div>;
    });
  };

  const handleSelect = (event) => {
    props.selectChampion(champions[event.target.value]);
  };

  console.log(props.drawnCards);
  return (
    <>
      <div className='champion-select'>
        <select defaultValue={-1} onChange={handleSelect}>
          <option disabled value={-1}>
            Choose Champion
          </option>
          {getChampions()}
        </select>
      </div>

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
      <button
        disabled={props.champion === undefined}
        className='drawCardsButton'
        onClick={props.drawCards}
      >
        Draw Cards
      </button>
      {props.drawnCards.length > 0 && showCards()}
    </>
  );
}

const mapStateToProps = (state) => ({
  health: state.championReducer.health,
  baseAggro: state.championReducer.baseAggro,
  lastDiceRoll: state.championReducer.lastDiceRoll,
  champion: state.championReducer.champion,
  cards: state.championReducer.cards,
  currentCardIndex: state.championReducer.currentCardIndex,
  drawnCards: state.championReducer.drawnCards,
});

const mapDispatchToProps = (dispatch) => ({
  selectChampion: (champion) => dispatch(setChampion(champion)),
  updateChampionHealth: (health) => dispatch(updateHealth(health)),
  updateBaseAggro: (aggro) => dispatch(updateBaseAggro(aggro)),
  setDiceRoll: (roll) => dispatch(updateDieRoll(roll)),
  drawCards: () => dispatch(drawTwo()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Champion);
