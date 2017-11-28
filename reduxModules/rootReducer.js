import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import authReducer from './auth'
import channelReducer from './channel'
import dateReducer from './date'
import demographicReducer from './demographic'
import loadingReducer from './loading'
import netflowReducer from './netflow'
import productReducer from './product'
import portfolioReducer from './portfolio'
import wayCodeReducer from './wayCode'

const reducers = {
  authentication: authReducer,
  channel: channelReducer,
  date: dateReducer,
  demographic: demographicReducer,
  loading: loadingReducer,
  netflow: netflowReducer,
  portfolio: portfolioReducer,
  product: productReducer,
  wayCode: wayCodeReducer
}
const rootReducer = combineReducers(reducers)

export default rootReducer
