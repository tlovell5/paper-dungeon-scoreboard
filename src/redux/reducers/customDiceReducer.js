const initialState = {
  min: 1,
  max: 20,
  lastDiceRoll: 0,
};

const customDiceReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_MIN':
      return {
        ...state,
        min: action.payload,
      };
    case 'UPDATE_MAX':
      return {
        ...state,
        max: action.payload,
      };
    case 'UPDATE_CUSTOM_ROLL':
      return {
        ...state,
        lastDiceRoll: action.payload,
      };
    default:
      return state;
  }
};

export default customDiceReducer;
