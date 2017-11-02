import { put, call, takeLatest} from 'redux-saga/effects'
import { FETCH_WAYCODE, FETCH_WAYCODE_SUCCESS } from '../reduxModules/wayCode'
import { API_SERVER, getJSON} from '../utilize/api'
 
export function* fetchWayCode() {
  try {
    const json = yield call(getJSON, `${API_SERVER}/wayCode/getNameList`)
    yield put({
      type: FETCH_WAYCODE_SUCCESS,
      payload: json
    })
  } catch (error) {
    throw error
  }
}

export function* watchWayCodeSaga() {
  yield takeLatest(FETCH_WAYCODE, fetchWayCode)
}