import { createStore as reduxCreateStore } from "redux"

const reducer = (state, action) => {
  // Show / hide sidebar
  if (action.type === `TOGGLE`) {
    console.log(state.dataStack)
    return Object.assign({}, state, {
      sidebarVisible: !state.sidebarVisible,
    })
  }
  // Push / pop data from stack
  if (action.type === `PUSH`) {
    return Object.assign({}, state, {
      dataStack: state.dataStack.concat({name:'Category', val: 100}),
    })
  }
  if (action.type === `POP`) {
    return Object.assign({}, state, {
      dataStack: state.dataStack.slice(null,-1),
    })
  }
  if (action.type === `UPDATEUNIVERSE`) {
    return Object.assign({}, state, {
      universeData: state.universeData,
    })
  }
  return state
}

const initialState = {
  sidebarVisible: true,
  dataStack: [ {name:'Likes Fruit', val: 12} ],
  universeData: [ {name:'USA', val: 330} ]
}

const createStore = () => reduxCreateStore(reducer, initialState)
export default createStore