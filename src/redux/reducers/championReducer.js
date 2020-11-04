const initialState = {
  health: 0,
  baseAggro: 0,
  lastDiceRoll: 0,
};

const championReducer = (state = initialState, action) => {
  switch (action.type) {
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
