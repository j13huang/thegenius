import React from 'react';
import {connect} from 'react-redux';
import { buyTicket, refundTicket } from '../actions';
import classNames from 'classnames';

import './Land.css';

function Land({ name, breadCount, roundLocked, tickets, ticketsThisRound, plusClick, minusClick }) {
  const bread = [];
  for (let i = 0; i < breadCount; i++) {
    bread.push(<li key={`${name}-bread-${i}`} className="bread-list-icon">🍞</li>);
  }

  const landSectionClass = classNames({
    "land-section": true,
    "land-section-round-locked": roundLocked,
  });
  return (
    <div className={landSectionClass}>
      <h1>{name}</h1>
      <ul className="bread-list">
        {bread}
      </ul>
      { roundLocked ? 
        <div>Your tickets have been locked in!</div>
        : null
      }

      <button disabled={roundLocked || tickets <= 0} onClick={ () => plusClick(name) }>+</button>
      <button disabled={roundLocked || tickets >= ticketsThisRound} onClick={ () => minusClick(name) }>-</button>
    </div>
  );
}

function mapStateToProps(state, { name, breadCount }) {
  return {
    name,
    breadCount,
    roundLocked: state.game.roundLocked,
    tickets: state.game.player.tickets,
    ticketsThisRound: state.game.player.ticketsThisRound,
  };
}

const mapDispatchToProps = (dispatch) => ({
  plusClick: (name) => dispatch(buyTicket(name)),
  minusClick: (name) => dispatch(refundTicket(name)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Land);
