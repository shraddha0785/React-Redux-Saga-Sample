import * as api from '../services/api'
import { call, put, takeEvery, all } from 'redux-saga/effects'
import {fetchedMainAccontData}  from '../actions/message'
function* fetchUserSaga(action) {
    // `call` function accepts rest arguments, which will be passed to `api.fetchUser` function.
    // Instructing middleware to call promise, it resolved value will be assigned to `userData` variable
    console.log('coming here saga')
    const mainAccountData = yield call(api.fetchUser, action.account);
    // Instructing middleware to dispatch corresponding action.
    yield put(fetchedMainAccontData(mainAccountData));
  }

  

function* watchFetchData() {
  yield takeEvery('FETCH_MAIN_ACCOUNT', fetchUserSaga)
}


export default function* rootSaga() {
    yield all([
        watchFetchData(),
    ]);
 }