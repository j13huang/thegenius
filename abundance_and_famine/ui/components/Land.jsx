import React from 'react';
import {connect} from 'react-redux';
import { buyTicket, refundTicket } from '../actions';

import './Land.css';

function Land({ name, breadCount, tickets, ticketsThisRound, buyTicket, refundTicket }) {
  const bread = [];
  for (let i = 0; i < breadCount; i++) {
    bread.push(<li key={`${name}-bread-${i}`} className="bread-list-icon">🍞</li>);
  }
  return (
    <div className="land-section">
      <h1>{name}</h1>
      <ul className="bread-list">
        {bread}
      </ul>

      <button disabled={tickets <= 0} onClick={ () => buyTicket(name) }>+</button>
      <button disabled={tickets >= ticketsThisRound} onClick={ () => refundTicket(name) }>-</button>
    </div>
  );
}

function mapStateToProps(state, { name, breadCount }) {
  return {
    ticketsThisRound: state.game.player.ticketsThisRound,
    tickets: state.game.player.tickets,
    name,
    breadCount,
  };
}

const mapDispatchToProps = (dispatch) => ({
  buyTicket: (name) => dispatch(buyTicket(name)),
  refundTicket: (name) => dispatch(refundTicket(name)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Land);
