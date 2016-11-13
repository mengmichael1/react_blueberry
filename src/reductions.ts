import Immutable = require('immutable');

let homepageReducer = (state, action) => {
  switch(action.type) {
    default:
      return state;
  }
}

let eventsReducer = (state, action) => {
  switch(action.type) {
    default:
      return state;
  }
}

let industryReducer = (state, action) => {
  switch(action.type) {
    default:
      return state;
  }
}


let decalReducer = (state, action) => {
  switch(action.type) {
    default:
      return state;
  }
}

let aboutReducer = (state, action) => {
  switch(action.type) {
    default:
      return state;
  }
}

let donateReducer = (state, action) => {
  switch(action.type) {
    default:
      return state;
  }
}



let reducer = (state, action) => {
  return Immutable.Map({
    homepage: homepageReducer(state.get("homepage"), action),
    events: eventsReducer(state.get("events"), action),
    industry: industryReducer(state.get("industry"), action),
    decal: decalReducer(state.get("decal"), action),
    about: aboutReducer(state.get("about"), action),
    donate: donateReducer(state.get("donate"), action)
  })
  
  // let newState = Object.assign({}, state);
  // newState[action.get("parent")] = action.page;
  
  // return newState;
}


export default {
  reducer: reducer,
  defaults: Immutable.Map({
    homepage: {},
    events: {},
    industry: {},
    decal: {},
    about: {},
    donate: {}
    })
}