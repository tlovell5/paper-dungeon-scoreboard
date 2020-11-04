import { combineReducers } from 'redux';

import championReducer from './championReducer';
import monsterReducer from './monsterReducer';
import customDiceReducer from './customDiceReducer';

export default combineReducers({
  championReducer,
  monsterReducer,
  customDiceReducer,
});
