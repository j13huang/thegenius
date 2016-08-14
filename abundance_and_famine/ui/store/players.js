const initialState = {
  fetchingPlayers: false,
  players: [],
};


export default function players(state = initialState, action) {
  switch (action.type) {
    case 'ADD_PLAYER_SUCCESS':
      // TEMP JUST TO ADD PLAYERS LOCALLY
      return Object.assign({}, state, {
        players: [...state.players, action.player],
      })
    case 'FETCHING_PLAYERS':
      return Object.assign({}, state, {
        fetchingPlayers: true,
      })
    case 'FETCHING_PLAYERS_SUCCESS':
      return Object.assign({}, state, {
        fetchingPlayers: false,
        players: [...players, action.player]
      })
    case 'FETCHING_PLAYERS_FAIL':
      return Object.assign({}, state, {
        fetchingPlayers: false,
      })
    default:
      return state
  }
}
