// Imports
import { compose, combineReducers } from 'redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

// App Imports
import common from '../modules/common/api/state'
import user from '../modules/user/api/state'
import * as client from '../modules/client/api/state'

// App Reducer
const appReducer = combineReducers({
  common,
  user,
  ...client,
})

// Root Reducer
export const rootReducer = (state, action) => {
  if (action.type === 'RESET') {
    state = undefined
  }

  return appReducer(state, action)
}

// Load initial state from server side
let initialState
if (typeof window !== 'undefined') {
  initialState = window.__INITIAL_STATE__
  delete window.__INITIAL_STATE__
}

// Store
export const store = createStore(
  rootReducer,
  initialState,

  compose(
    applyMiddleware(thunk),
  )
)
