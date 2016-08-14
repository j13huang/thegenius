import React from 'react';
import {connect} from 'react-redux';
import AddPlayer from './AddPlayer.jsx';
import Land from './Land.jsx';

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
      <button>Lock In Tickets</button>
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
