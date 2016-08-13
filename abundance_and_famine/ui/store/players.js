const initialState = {
  fetching: false,
  players: [],
};

export default function players(state = initialState, action) {
  switch (action.type) {
    case 'FETCHING_NEW_PLAYER':
      return Object.assign({}, state, {
        fetching: true,
      })
    case 'FETCHING_NEW_PLAYER_SUCCESS':
      return Object.assign({}, state, {
        fetching: false,
        players: [...players, action.player]
      })
    case 'FETCHING_NEW_PLAYER_FAIlED':
      return Object.assign({}, state, {
        fetching: false,
      })
    default:
      return state
  }
}
