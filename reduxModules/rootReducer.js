import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import channelReducer from './channel'
import dateReducer from './date'
import demographicReducer from './demographic'
import netflowReducer from './netflow'
import productReducer from './product'
import portfolioReducer from './portfolio'
import wayCodeReducer from './wayCode'

const reducers = {
  channel: channelReducer,
  date: dateReducer,
  demographic: demographicReducer,
  portfolio: portfolioReducer,
  product: productReducer,
  netflow: netflowReducer,
  wayCode: wayCodeReducer
}
const rootReducer = combineReducers(reducers)

export default rootReducer
