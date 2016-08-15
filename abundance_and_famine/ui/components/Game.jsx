import React from 'react';
import {connect} from 'react-redux';
import Land from './Land.jsx';
import AddPlayer from './AddPlayer.jsx';
import Dashboard from './Dashboard.jsx';

import './Game.css';

function Game({ players }) {
  return (
    <div>
      <div className="land-container">
        <Land className="land-section" name={"Abundance"} breadCount={6}/>
        <Land className="land-section" name={"Famine"} breadCount={3}/>
      </div>
      <h2 className="players-header">Players:</h2>
      <ul className="players-list">
        {players.map((player, i) => (
          <li key={`player-${i}`} className="players-list-item">{player.name}</li>
        ))}
      </ul>
      <AddPlayer/>
      <Dashboard/>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    players: state.players.players,
  };
}

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Game);
