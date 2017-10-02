/**
 *
 */

const defaultState = {};

export default user = (state = defaultState, action) => {
  switch(action.type) {
    case 'SET_USER':
      return Object.assign({}, state, action.payload);
      break
    default:
      return state;
  }
};
