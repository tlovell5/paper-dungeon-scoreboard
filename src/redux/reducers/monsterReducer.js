const initialState = {
  health: 0,
  lastDiceRoll: 0,
};

const monsterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_MONSTER_HEALTH':
      return {
        ...state,
        health: action.payload,
      };
    case 'UPDATE_MONSTER_ROLL':
      return {
        ...state,
        lastDiceRoll: action.payload,
      };
    default:
      return state;
  }
};

export default monsterReducer;
