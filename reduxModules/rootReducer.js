import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import dateReducer from './date'
import netflowReducer from './netflow'
import productReducer from './product'
import portfolioReducer from './portfolio'

const reducers = {
  date: dateReducer,
  netflow: netflowReducer,
  portfolio: portfolioReducer,
  product: productReducer,
}
const rootReducer = combineReducers(reducers)

export default rootReducer
