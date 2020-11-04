export const updateHealth = (health) => {
  return { type: 'UPDATE_MONSTER_HEALTH', payload: health };
};

export const updateBaseAggro = (aggro) => {
  return { type: 'UPDATE_MONSTER_AGGRO', payload: aggro };
};

export const updateDieRoll = (roll) => {
  return { type: 'UPDATE_MONSTER_ROLL', payload: roll };
};
