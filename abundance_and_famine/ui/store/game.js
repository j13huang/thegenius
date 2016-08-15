const STARTING_TICKETS = 5;

const initialState = {
  roundLocked: false,
  player: {
    ticketsThisRound: STARTING_TICKETS,
    tickets: STARTING_TICKETS,
    bread: 0,
    joined: false,
  },
};

export default function game(state = initialState, action) {
  switch (action.type) {
    case 'ADD_PLAYER':
      return state;
    case 'ADD_PLAYER_SUCCESS':
      return Object.assign({}, state, {
        player: Object.assign({}, state.player, action.player),
      })
    case 'ADD_PLAYER_FAIL':
      return state;
    case 'BUY_TICKET':
      return Object.assign({}, state, {
        player: Object.assign({}, state.player, {
          tickets: state.player.tickets - 1,
        })
      })
    case 'REFUND_TICKET':
      return Object.assign({}, state, {
        player: Object.assign({}, state.player, {
          tickets: state.player.tickets + 1,
        })
      })
    case 'LOCK_IN_TICKETS':
      return Object.assign({}, state, {
        roundLocked: true,
      })
    case 'FETCH_NEW_ROUND_SUCCESS':
      // convert all tickets spent to points
      return Object.assign({}, state, {
      })
    case 'FETCH_NEW_ROUND_FAIL':
      return state
    default:
      return state
  }
}
