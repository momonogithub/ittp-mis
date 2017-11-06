import { put, call, takeLatest} from 'redux-saga/effects'
import { FETCH_NETFLOW, FETCH_NETFLOW_SUCCESS, FETCH_UPDATE_NETFLOW } from '../reduxModules/netflow'
import { API_SERVER, getJSON} from '../utilize/api'
 
export function* fetchNetflow(action) {
  try {
    const month = action.payload.month
    const year = action.payload.year
    const json = yield call(getJSON, `${API_SERVER}/netflow/getNetflow/${month}/${year}`)
    yield put({
      type: FETCH_NETFLOW_SUCCESS,
      payload: json
    })
  } catch (error) {
    throw error
  }
}

export function* fetchUpdateNetflow(action) {
  try {
    const month = action.payload.month
    const year = action.payload.year
    const json = yield call(getJSON, `${API_SERVER}/netflow/updateNetflow/${month}/${year}`)
    yield put({
      type: FETCH_NETFLOW_SUCCESS,
      payload: json
    })
  } catch (error) {
    throw error
  }
}

export function* watchNetflowSaga() {
  yield takeLatest(FETCH_NETFLOW, fetchNetflow),
  yield takeLatest(FETCH_UPDATE_NETFLOW, fetchUpdateNetflow)
}