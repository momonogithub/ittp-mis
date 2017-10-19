import { put, call, takeLatest} from 'redux-saga/effects'
import { API_SERVER, getJSON} from '../utilize/api'
import { 
  FETCH_PORTTOTAL,
  FETCH_PORTTOTAL_SUCCESS,
  FETCH_UPDATE_PORTTOTAL,
  FETCH_PORTSUMMARY,
  FETCH_PORTSUMMARY_SUCCESS,
  FETCH_UPDATE_PORTSUMMARY,
} from '../reduxModules/portfolio'

export function* fetchPortSummary(action) {
  try {
    const month = action.payload.month
    const year = action.payload.year
    const json = yield call(getJSON, `${API_SERVER}/portSummary/getPortSummary/${month}/${year}`)
    yield put({
      type: FETCH_PORTSUMMARY_SUCCESS,
      payload: json
    })
  } catch (error) {
    throw error
  }
}

export function* fetchPortTotal(action) {
  try {
    const month = action.payload.month
    const year = action.payload.year
    const json = yield call(getJSON, `${API_SERVER}/portTotal/getPortTotal/${month}/${year}`)
    yield put({
      type: FETCH_PORTTOTAL_SUCCESS,
      payload: json
    })
  } catch (error) {
    throw error
  }
}

export function* fetchUpdatePortSummary(action) {
  try {
    const month = action.payload.month
    const year = action.payload.year
    const json = yield call(getJSON, `${API_SERVER}/portSummary/updatePortSummary/${month}/${year}`)
    yield put({
      type: FETCH_PORTSUMMARY_SUCCESS,
      payload: json
    })
  } catch (error) {
    throw error
  }
}

export function* fetchUpdatePortTotal(action) {
  try {
    const month = action.payload.month
    const year = action.payload.year
    const json = yield call(getJSON, `${API_SERVER}/portTotal/updatePortTotal/${month}/${year}`)
    yield put({
      type: FETCH_PORTTOTAL_SUCCESS,
      payload: json
    })
  } catch (error) {
    throw error
  }
}

export function* watchPortfolioSaga() {
  yield takeLatest(FETCH_PORTSUMMARY, fetchPortSummary)
  yield takeLatest(FETCH_UPDATE_PORTSUMMARY, fetchUpdatePortSummary)
  yield takeLatest(FETCH_PORTTOTAL, fetchPortTotal)
  yield takeLatest(FETCH_UPDATE_PORTTOTAL, fetchUpdatePortTotal)
}