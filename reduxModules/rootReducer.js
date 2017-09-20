import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import dateReducer from './date'
import netflowReducer from './netflow'
import productReducer from './product'

const reducers = {
  date: dateReducer,
  netflow: netflowReducer,
  product: productReducer,
}
const rootReducer = combineReducers(reducers)

export default rootReducer
