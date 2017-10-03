import { put, call, takeLatest} from 'redux-saga/effects'
import { FETCH_PORTTOTAL, FETCH_PORTTOTAL_SUCCESS, FETCH_UPDATE_PORTTOTAL } from '../reduxModules/portfolio'
import { API_SERVER, getJSON} from '../utilize/api'
 
export function* fetchPortTotal(action) {
  try {
    const month = action.payload.month
    const year = action.payload.year
    const json = yield call(getJSON, `${API_SERVER}/portfolio/getPortTotal/${month}/${year}`)
    yield put({
      type: FETCH_PORTTOTAL_SUCCESS,
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
    const json = yield call(getJSON, `${API_SERVER}/portfolio/updatePortTotal/${month}/${year}`)
    yield put({
      type: FETCH_PORTTOTAL_SUCCESS,
      payload: json
    })
  } catch (error) {
    throw error
  }
}

export function* watchPortfolioSaga() {
  yield takeLatest(FETCH_PORTTOTAL, fetchPortTotal)
  yield takeLatest(FETCH_UPDATE_PORTTOTAL, fetchUpdatePortTotal)
}