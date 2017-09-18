import { all } from 'redux-saga/effects'
import { watchNetflowSaga } from './netflowSagas'

export default function* rootsaga () {
  yield all([
    watchNetflowSaga(),
  ])
}