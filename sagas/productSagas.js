import { put, call, takeLatest} from 'redux-saga/effects'
import { 
  FETCH_PRODUCTLIST,
  FETCH_PRODUCTLIST_SUCCESS,
  FETCH_PRODUCTLIST_FAILED } from '../reduxModules/product'
import { API_SERVER, getJSON} from '../utilize/api'
 
export function* fetchProductList() {
  try {
    const json = yield call(getJSON, `${API_SERVER}/product/getNameList`)
    yield put({
      type: FETCH_PRODUCTLIST_SUCCESS,
      payload: json
    })
  } catch (error) {
    yield put({
      type: FETCH_PRODUCTLIST_FAILED,
    })
  }
}

export function* watchProductSaga() {
  yield takeLatest(FETCH_PRODUCTLIST, fetchProductList)
}