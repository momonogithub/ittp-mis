import { put, call, takeLatest} from 'redux-saga/effects'
import { API_SERVER, getJSON, patchJSON} from '../utilize/api'
import { 
  FETCH_PORTTOTAL,
  FETCH_PORTTOTAL_SUCCESS,
  FETCH_PORTTOTAL_FAILED,
  FETCH_UPDATE_PORTTOTAL,
  FETCH_PORTSUMMARY,
  FETCH_PORTSUMMARY_SUCCESS,
  FETCH_PORTSUMMARY_FAILED,
  FETCH_UPDATE_PORTSUMMARY,
} from '../reduxModules/portfolio'
import { SWITCH_LOADING_STATUS } from '../reduxModules/loading'

export function* fetchPortSummary(action) {
  try {
    const month = action.payload.month
    const year = action.payload.year
    const json = yield call(getJSON, `${API_SERVER}/portSummary/${month}/${year}`)
    yield put({
      type: FETCH_PORTSUMMARY_SUCCESS,
      payload: json
    })
  } catch (error) {
    yield put({
      type: FETCH_PORTSUMMARY_FAILED,
    })
  }
}

export function* fetchPortTotal(action) {
  try {
    const month = action.payload.month
    const year = action.payload.year
    const json = yield call(getJSON, `${API_SERVER}/portTotal/${month}/${year}`)
    yield put({
      type: FETCH_PORTTOTAL_SUCCESS,
      payload: json
    })
  } catch (error) {
    yield put({
      type: FETCH_PORTTOTAL_FAILED,
    })
  }
}

export function* fetchUpdatePortSummary(action) {
  try {
    const json = yield call(patchJSON, `${API_SERVER}/portSummary`, action.payload)
    yield put({
      type: FETCH_PORTSUMMARY_SUCCESS,
      payload: json
    })
    yield put({type: SWITCH_LOADING_STATUS})
  } catch (error) {
    yield put({
      type: FETCH_PORTSUMMARY_FAILED,
    })
    yield put({type: SWITCH_LOADING_STATUS})
  }
}

export function* fetchUpdatePortTotal(action) {
  try {
    const json = yield call(patchJSON, `${API_SERVER}/portTotal/`, action.payload)
    yield put({
      type: FETCH_PORTTOTAL_SUCCESS,
      payload: json
    })
    yield put({type: SWITCH_LOADING_STATUS})
  } catch (error) {
    yield put({
      type: FETCH_PORTTOTAL_FAILED,
    })
    yield put({type: SWITCH_LOADING_STATUS})
  }
}

export function* watchPortfolioSaga() {
  yield takeLatest(FETCH_PORTSUMMARY, fetchPortSummary)
  yield takeLatest(FETCH_UPDATE_PORTSUMMARY, fetchUpdatePortSummary)
  yield takeLatest(FETCH_PORTTOTAL, fetchPortTotal)
  yield takeLatest(FETCH_UPDATE_PORTTOTAL, fetchUpdatePortTotal)
}