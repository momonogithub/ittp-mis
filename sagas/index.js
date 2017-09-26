import { all } from 'redux-saga/effects'
import { watchNetflowSaga } from './netflowSagas'
import { watchProductSaga } from './productSagas'
import { watchPortfolioSaga } from './portfolioSagas'

export default function* rootsaga () {
  yield all([
    watchNetflowSaga(),
    watchProductSaga(),
    watchPortfolioSaga(),
  ])
}