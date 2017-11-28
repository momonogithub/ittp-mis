import { put, call, takeLatest} from 'redux-saga/effects'
import { 
  FETCH_WAYCODE,
  FETCH_WAYCODE_SUCCESS,
  FETCH_WAYCODE_FAILED } from '../reduxModules/wayCode'
import { API_SERVER, getJSON} from '../utilize/api'
 
export function* fetchWayCode() {
  try {
    const json = yield call(getJSON, `${API_SERVER}/wayCode/getNameList`)
    if(json.code !== undefined) {
      yield put({
        type: FETCH_WAYCODE_FAILED,
      })
    } else {
      yield put({
        type: FETCH_WAYCODE_SUCCESS,
        payload: json
      })
    }

  } catch (error) {
    yield put({
      type: FETCH_WAYCODE_FAILED,
    })
  }
}

export function* watchWayCodeSaga() {
  yield takeLatest(FETCH_WAYCODE, fetchWayCode)
}