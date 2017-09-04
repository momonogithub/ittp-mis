import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import dateReducer from './date'

const reducers = {
  date: dateReducer,
  form: formReducer     // <---- Mounted at 'form'
}
const rootReducer = combineReducers(reducers)

export default rootReducer
