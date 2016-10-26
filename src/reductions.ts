let nav = (state, action) => {
  let newState = Object.assign({}, state);
  newState[action.parent] = action.page;
  return newState;
}

export default {
  NAV: nav
}