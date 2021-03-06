export function addPlayerSuccess(player) {
  return {
    type: 'ADD_PLAYER_SUCCESS',
    player,
  };
}

export function addPlayer(name, dispatch) {
  return addPlayerSuccess({
    name,
    joined: true,
  });
}

export function lockInTickets() {
  return {
    type: 'LOCK_IN_TICKETS',
  };
}

export function buyTicket(name) {
  return {
    type: 'BUY_TICKET',
    name,
  };
}

export function refundTicket(name) {
  return {
    type: 'REFUND_TICKET',
    name,
  };
}

