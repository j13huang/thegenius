import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store';
import Game from './components/Game.jsx';

ReactDOM.render(
  <Provider store={store}>
    <Game/>
  </Provider>
, document.getElementById('app'));

