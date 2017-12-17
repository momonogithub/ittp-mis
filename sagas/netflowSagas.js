import { put, call, takeLatest} from 'redux-saga/effects'
import { 
  FETCH_NETFLOW,
  FETCH_NETFLOW_SUCCESS,
  FETCH_NETFLOW_FAILED,
  FETCH_UPDATE_NETFLOW } from '../reduxModules/netflow'
import { API_SERVER, getJSON, patchJSON} from '../utilize/api'
import { SWITCH_LOADING_STATUS } from '../reduxModules/loading'
 
export function* fetchNetflow(action) {
  try {
    const month = action.payload.month
    const year = action.payload.year
    const json = yield call(getJSON, `${API_SERVER}/netflow/${month}/${year}`)
    yield put({
      type: FETCH_NETFLOW_SUCCESS,
      payload: json
    })
  } catch (error) {
    yield put({
      type: FETCH_NETFLOW_FAILED,
    })
  }
}

export function* fetchUpdateNetflow(action) {
  try {
    const json = yield call(patchJSON, `${API_SERVER}/netflow`, action.payload)
    yield put({
      type: FETCH_NETFLOW_SUCCESS,
      payload: json
    })
    yield put({type: SWITCH_LOADING_STATUS})
  } catch (error) {
    yield put({
      type: FETCH_NETFLOW_FAILED,
    })
    yield put({type: SWITCH_LOADING_STATUS})
  }
}

export function* watchNetflowSaga() {
  yield takeLatest(FETCH_NETFLOW, fetchNetflow),
  yield takeLatest(FETCH_UPDATE_NETFLOW, fetchUpdateNetflow)
}