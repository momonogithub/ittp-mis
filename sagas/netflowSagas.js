import { put, call, takeLatest} from 'redux-saga/effects'
import { FETCH_RISK_NETFLOW, FETCH_RISK_NETFLOW_SUCCESS } from '../reduxModules/netflow'
import { API_SERVER, getJSON} from '../utilize/api'
 
export function* fetchNetflow(action) {
  try {
    const month = action.payload.month
    const year = action.payload.year
    const json = yield call(getJSON, `${API_SERVER}/netflow/${month}/${year}`)
    yield put({
      type: FETCH_RISK_NETFLOW_SUCCESS,
      payload: json
    })
  } catch (error) {
    throw error
  }
}

export function* watchNetflowSaga() {
  yield takeLatest(FETCH_RISK_NETFLOW, fetchNetflow)
}