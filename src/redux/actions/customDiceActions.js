export const updateMin = (min) => {
  return { type: 'UPDATE_MIN', payload: min };
};

export const updateMax = (max) => {
  return { type: 'UPDATE_MAX', payload: max };
};

export const updateDieRoll = (roll) => {
  console.log(roll);
  return { type: 'UPDATE_CUSTOM_ROLL', payload: roll };
};
