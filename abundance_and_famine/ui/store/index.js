import { createStore, combineReducers } from 'redux';
import game from './game';
import players from './players';

const store = createStore(
  combineReducers({
    game,
    players,
  }), window.devToolsExtension && window.devToolsExtension());
export default store;
