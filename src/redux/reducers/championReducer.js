import { shuffle } from '../../util/util';

const initialState = {
  health: 0,
  baseAggro: 0,
  lastDiceRoll: 0,
  drawnCards: [],
};

const championReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SELECT_CHAMPION':
      return {
        ...state,
        champion: action.payload.champion,
        cards: shuffle(action.payload.cards),
        stance: action.payload.stance,
        currentCardIndex: 0,
      };
    case 'DRAW_TWO':
      console.log(state.cards[state.currentCardIndex]);
      return {
        ...state,
        drawnCards: [
          state.cards[state.currentCardIndex],
          state.cards[state.currentCardIndex + 1],
        ],
        currentCardIndex: state.currentCardIndex + 2,
      };
    case 'UPDATE_CHAMPION_HEALTH':
      return {
        ...state,
        health: action.payload,
      };
    case 'UPDATE_CHAMPION_AGGRO':
      return {
        ...state,
        baseAggro: action.payload,
      };
    case 'UPDATE_CHAMPION_ROLL':
      return {
        ...state,
        lastDiceRoll: action.payload,
      };
    default:
      return state;
  }
};

export default championReducer;
