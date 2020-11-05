export const updateHealth = (health) => {
  return { type: 'UPDATE_CHAMPION_HEALTH', payload: health };
};

export const updateBaseAggro = (aggro) => {
  return { type: 'UPDATE_CHAMPION_AGGRO', payload: aggro };
};

export const updateDieRoll = (roll) => {
  return { type: 'UPDATE_CHAMPION_ROLL', payload: roll };
};

export const setChampion = (champion) => {
  return { type: 'SELECT_CHAMPION', payload: champion };
};

export const drawTwo = () => {
  return { type: 'DRAW_TWO' };
};
