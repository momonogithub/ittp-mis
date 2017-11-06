import { put, call, takeLatest} from 'redux-saga/effects'
import { FETCH_DEMOGRAPHIC, FETCH_DEMOGRAPHIC_SUCCESS } from '../reduxModules/demographic'
import { API_SERVER, getJSON} from '../utilize/api'
 
export function* fetchDemographic(action) {
  try {
    const month = action.payload.month
    const year = action.payload.year
    const json = yield call(getJSON, `${API_SERVER}/demographic/getDemographic/${month}/${year}`)
    yield put({
      type: FETCH_DEMOGRAPHIC_SUCCESS,
      payload: json
    })
  } catch (error) {
    throw error
  }
}

export function* watchDemographicSaga() {
  yield takeLatest(FETCH_DEMOGRAPHIC, fetchDemographic)
}