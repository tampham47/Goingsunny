/**
 *
 */

const defaultState = {};

export default (state = defaultState, action) => {
  switch(action.type) {
    case 'UPDATE_USER':
      return Object.assign({}, state, action.payload);
      break
    default:
      return state;
  }
};
