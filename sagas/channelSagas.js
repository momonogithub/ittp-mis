import { put, call, takeLatest} from 'redux-saga/effects'
import { FETCH_CHANNEL, FETCH_CHANNEL_SUCCESS, FETCH_UPDATE_CHANNEL } from '../reduxModules/channel'
import { API_SERVER, getJSON} from '../utilize/api'
 
export function* fetchChannel(action) {
  try {
    const month = action.payload.month
    const year = action.payload.year
    const json = yield call(getJSON, `${API_SERVER}/channel/getChannel/${month}/${year}`)
    yield put({
      type: FETCH_CHANNEL_SUCCESS,
      payload: json
    })
  } catch (error) {
    throw error
  }
}

export function* fetchUpdateChannel(action) {
  try {
    const month = action.payload.month
    const year = action.payload.year
    const json = yield call(getJSON, `${API_SERVER}/channel/updateChannel/${month}/${year}`)
    yield put({
      type: FETCH_CHANNEL_SUCCESS,
      payload: json
    })
  } catch (error) {
    throw error
  }
}

export function* watchChannelSaga() {
  yield takeLatest(FETCH_CHANNEL, fetchChannel),
  yield takeLatest(FETCH_UPDATE_CHANNEL, fetchUpdateChannel)
}