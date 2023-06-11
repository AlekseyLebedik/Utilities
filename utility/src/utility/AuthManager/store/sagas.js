import { call, put, takeEvery, takeLatest } from "redux-saga/effects";

function* fetchUser(action) {}

function* AuthSaga() {
  yield takeLatest("USER_FETCH_REQUESTED", fetchUser);
}

export default AuthSaga;
