import React from 'react';
import {connect} from 'react-redux';
import { addPlayer } from '../actions';

function AddPlayer({player, addPlayer}) {
  let _input;
  /*
  if (player.joined) {
    return (
      <div>
        <p> You have joined as {player.name}</p>
      </div>
    );
  }
  */
  return (
    <div>
      <input ref={(r) => _input = r} onKeyPress={(e) => ((e.key === "Enter") && addPlayer(_input) )}/>
      <button onClick={() => addPlayer(_input)}>Join Game!</button>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    player: state.game.player,
  };
}

const mapDispatchToProps = (dispatch) => ({
  addPlayer: (input) => {
    if (!input.value) {
      return;
    }
    dispatch(addPlayer(input.value, dispatch));
    input.value = '';
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AddPlayer);
