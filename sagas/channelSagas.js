import { put, call, takeLatest} from 'redux-saga/effects'
import { 
  FETCH_CHANNEL,
  FETCH_CHANNEL_SUCCESS,
  FETCH_CHANNEL_FAILED,
  FETCH_UPDATE_CHANNEL } from '../reduxModules/channel'
import { API_SERVER, getJSON, patchJSON} from '../utilize/api'
import { SWITCH_LOADING_STATUS } from '../reduxModules/loading'
 
export function* fetchChannel(action) {
  try {
    const month = action.payload.month
    const year = action.payload.year
    const json = yield call(getJSON, `${API_SERVER}/channel/${month}/${year}`)
    yield put({
      type: FETCH_CHANNEL_SUCCESS,
      payload: json
    })
  } catch (error) {
    yield put({
      type: FETCH_CHANNEL_FAILED,
    })
  }
}

export function* fetchUpdateChannel(action) {
  try {
    const json = yield call(patchJSON, `${API_SERVER}/channel/`, action.payload)
    yield put({
      type: FETCH_CHANNEL_SUCCESS,
      payload: json
    })
    yield put({type: SWITCH_LOADING_STATUS})
  } catch (error) {
    yield put({
      type: FETCH_CHANNEL_FAILED,
    })
    yield put({type: SWITCH_LOADING_STATUS})
  }
}

export function* watchChannelSaga() {
  yield takeLatest(FETCH_CHANNEL, fetchChannel),
  yield takeLatest(FETCH_UPDATE_CHANNEL, fetchUpdateChannel)
}