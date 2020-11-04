export const updateMin = (min) => {
  return { type: 'UPDATE_MIN', payload: min };
};

export const updateMax = (max) => {
  return { type: 'UPDATE_MAX', payload: max };
};

export const updateDieRoll = (roll) => {
  return { type: 'UPDATE_MONSTER_ROLL', payload: roll };
};
