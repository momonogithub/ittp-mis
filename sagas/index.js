import { all } from 'redux-saga/effects'
import { watchNetflowSaga } from './netflowSagas'
import { watchProductSaga } from './productSagas'

export default function* rootsaga () {
  yield all([
    watchNetflowSaga(),
    watchProductSaga(),
  ])
}