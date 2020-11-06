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
      return (
        <div className='card' key={card.id}>
          <h3>{card.ability}</h3>
          <h4>aggro: {card.aggro}</h4>
          <h4>damage: {card.damage}</h4>
          <h4>block: {card.block}</h4>
          <p>description: {card.description}</p>
        </div>
      );
    });
  };

  const handleSelect = (event) => {
    props.selectChampion(champions[event.target.value]);
  };

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
      <section className='cards'>
        {props.drawnCards.length > 0 && showCards()}
      </section>
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
