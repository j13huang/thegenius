import React from 'react';
import {connect} from 'react-redux';
import { lockInTickets } from '../actions';
import classNames from 'classnames';

import './Dashboard.css';

function Dashboard({ joined, name, roundLocked, tickets, ticketsThisRound, lockInTicketsClick }) {
  if (!joined) {
    return (
      <div>
        <h3>Join the game to play!</h3>
      </div>
    );
  }
  const dashboardClass = classNames({
    'dashboard-container': true,
    'dashboard-round-locked': roundLocked,
  });
  return (
    <div className={dashboardClass}>
      <h3>{name}</h3>
      <h4 className="tickets-header">Tickets This Round: </h4>
      <p className="tickets-count">{tickets}<b>/{ticketsThisRound}</b></p>
      { roundLocked ?
        <h4>Waiting for all players to lock in...</h4>
        :
        <div>
          <button onClick={ () => lockInTicketsClick() }>Lock In Tickets</button>
        </div>
      }
    </div>
  );
}

function mapStateToProps(state) {
  return {
    joined: state.game.player.joined,
    name: state.game.player.name,
    roundLocked: state.game.roundLocked,
    tickets: state.game.player.tickets,
    ticketsThisRound: state.game.player.ticketsThisRound,
  };
}

const mapDispatchToProps = (dispatch) => ({
  lockInTicketsClick: () => dispatch(lockInTickets())
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
