import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import dateReducer from './date'
import netflowReducer from './netflow'

const reducers = {
  date: dateReducer,
  netflow: netflowReducer,
}
const rootReducer = combineReducers(reducers)

export default rootReducer
