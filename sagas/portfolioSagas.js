import { put, call, takeLatest} from 'redux-saga/effects'
import { FETCH_PORTTOTAL, FETCH_PORTTOTAL_SUCCESS } from '../reduxModules/portfolio'
import { API_SERVER, getJSON} from '../utilize/api'
 
export function* fetchPortTotal(action) {
  try {
    const month = action.payload.month
    const year = action.payload.year
    const json = yield call(getJSON, `${API_SERVER}/portfolio/portTotal/${month}/${year}`)
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
}