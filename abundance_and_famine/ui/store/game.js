const initialState = {};

export default function game(state = initialState, action) {
  switch (action.type) {
    case 'MOVE_TO_FAMINE':
      // find player, update their location
      return Object.assign({}, state, {
      })
    case 'MOVE_TO_ABUNDANCE':
      // find player, update their location
      return Object.assign({}, state, {
      })
    case 'ASSIGN_BREAD':
      // find all players with action.location, update their bread count
      return Object.assign({}, state, {
      })
    case 'NEW_ROUND':
      // clear all locations from 
      return Object.assign({}, state, {
      })
    default:
      return state
  }
}
