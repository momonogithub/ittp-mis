import { put, call, takeLatest} from 'redux-saga/effects'
import { 
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILED } from '../reduxModules/auth'
import { API_SERVER, getJSON, postJSON} from '../utilize/api'
 
export function* login(action) {
  try {
    const json = yield call(postJSON, `${API_SERVER}/login`, action.payload)
    if(json.token !== undefined) {
      yield put({
        type: LOGIN_SUCCESS,
        payload: json.token
      })
    } else {
      yield put({
        type: LOGIN_FAILED,
        payload: json.message
      })
    }
  } catch (error) {
    yield put({
      type: LOGIN_FAILED,
      payload: error
    })
  }
}

export function* watchAuthSaga() {
  yield takeLatest(LOGIN, login)
}