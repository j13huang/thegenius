const STARTING_TICKETS = 5;

const initialState = {
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
          /*
          bread: {
            [action.name]: state.player.bread[action.name] + 1,
          }
          */
        })
      })
    case 'REFUND_TICKET':
      return Object.assign({}, state, {
        player: Object.assign({}, state.player, {
          tickets: state.player.tickets + 1,
          /*
          bread: {
            [action.name]: state.player.bread[action.name] - 1,
          }
          */
        })
      })
    case 'NEW_ROUND':
      // convert all bread to points
      return Object.assign({}, state, {
      })
    default:
      return state
  }
}
