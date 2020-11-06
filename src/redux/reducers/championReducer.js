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
      let newIndex = state.currentCardIndex + 2;
      let cards = state.cards;
      if (state.cards.length - newIndex < 2) {
        shuffle(cards);
        newIndex = 0;
      }
      return {
        ...state,
        drawnCards: [
          state.cards[state.currentCardIndex],
          state.cards[state.currentCardIndex + 1],
        ],
        currentCardIndex: newIndex,
        cards: cards,
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
