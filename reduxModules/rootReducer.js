import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import dateReducer from './date'
import channelReducer from './channel'
import netflowReducer from './netflow'
import productReducer from './product'
import portfolioReducer from './portfolio'
import wayCodeReducer from './wayCode'

const reducers = {
  date: dateReducer,
  portfolio: portfolioReducer,
  product: productReducer,
  channel: channelReducer,
  netflow: netflowReducer,
  wayCode: wayCodeReducer
}
const rootReducer = combineReducers(reducers)

export default rootReducer
