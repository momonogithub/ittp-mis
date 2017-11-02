import { all } from 'redux-saga/effects'
import { watchProductSaga } from './productSagas'
import { watchPortfolioSaga } from './portfolioSagas'
import { watchChannelSaga } from './channelSagas'
import { watchNetflowSaga } from './netflowSagas'
import { watchWayCodeSaga } from './wayCodeSagas'

export default function* rootsaga () {
  yield all([
    watchProductSaga(),
    watchPortfolioSaga(),
    watchChannelSaga(),
    watchNetflowSaga(),
    watchWayCodeSaga()
  ])
}