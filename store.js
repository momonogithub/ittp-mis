import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reduxModules/rootReducer'

export const store = createStore(
  rootReducer,
  composeWithDevTools()
)