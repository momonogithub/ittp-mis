import { put, call, takeLatest} from 'redux-saga/effects'
import { 
  FETCH_DEMOGRAPHIC, 
  FETCH_DEMOGRAPHIC_SUCCESS,
  FETCH_DEMOGRAPHIC_FAILED,
  FETCH_UPDATE_DEMOGRAPHIC,
  FETCH_DEMOLIST,
  FETCH_DEMOLIST_SUCCESS,
  FETCH_DEMOLIST_FAILED } from '../reduxModules/demographic'
import { API_SERVER, getJSON, patchJSON} from '../utilize/api'
import { SWITCH_LOADING_STATUS } from '../reduxModules/loading'
 
export function* fetchDemographic(action) {
  try {
    const month = action.payload.month
    const year = action.payload.year
    const json = yield call(getJSON, `${API_SERVER}/demographic/${month}/${year}`)
    yield put({
      type: FETCH_DEMOGRAPHIC_SUCCESS,
      payload: json
    })
  } catch (error) {
    yield put({
      type: FETCH_DEMOGRAPHIC_FAILED,
    })
  }
}

export function* fetchUpdateDemographic(action) {
  try {
    const json = yield call(patchJSON, `${API_SERVER}/demographic`, action.payload)
    yield put({
      type: FETCH_DEMOGRAPHIC_SUCCESS,
      payload: json
    })
    yield put({type: SWITCH_LOADING_STATUS})
  } catch (error) {
    yield put({
      type: FETCH_DEMOGRAPHIC_FAILED,
    })
    yield put({type: SWITCH_LOADING_STATUS})
  }
}

export function* fetchDemoList() {
  try {
    const json = yield call(getJSON, `${API_SERVER}/demographic/getDemoList`)
    yield put({
      type: FETCH_DEMOLIST_SUCCESS,
      payload: json
    })
  } catch (error) {
    yield put({
      type: FETCH_DEMOLIST_FAILED,
    })
  }
}

export function* watchDemographicSaga() {
  yield takeLatest(FETCH_DEMOGRAPHIC, fetchDemographic)
  yield takeLatest(FETCH_UPDATE_DEMOGRAPHIC, fetchUpdateDemographic)
  yield takeLatest(FETCH_DEMOLIST, fetchDemoList)
}