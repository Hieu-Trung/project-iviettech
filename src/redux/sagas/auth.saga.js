import { put, takeEvery } from "redux-saga/effects";
import axios from "axios";

import {
  loginRequest,
  loginSuccess,
  loginFailure,
  registerRequest,
  registerSuccess,
  registerFailure,
  getUserInfoRequest,
  getUserInfoSuccess,
  getUserInfoFailure,
  updateUserInfoRequest,
  updateUserInfoSuccess,
  updateUserInfoFailure,
  changePasswordRequest,
  changePasswordSuccess,
  changePasswordFailure,
} from "../slicers/auth.slice";

function* loginSaga(action) {
  try {
    // gửi đi cái gì từ slices thì nhận lại cái đó. cụ thể là data và callback
    const { data, callback } = action.payload;
    // tham số thứ 2 của post là dữ liệu gửi cho server cụ thể là data
    const result = yield axios.post("http://localhost:4000/login", data);
    //setItem có 2 tham số là: key, value
    yield localStorage.setItem("accessToken", result.data.accessToken);
    yield callback();
    yield put(
      loginSuccess({
        data: result.data.user,
      })
    );
  } catch (e) {
    yield put(loginFailure({ error: "Email hoặc mật khẩu không đúng" }));
  }
}

function* registerSaga(action) {
  try {
    // gửi đi cái gì từ slices thì nhận lại cái đó. cụ thể là data và callback
    const { data, callback } = action.payload;
    // tham số thứ 2 của post là dữ liệu gửi cho server cụ thể là data
    yield axios.post("http://localhost:4000/register", data);
    yield callback();
    yield put(registerSuccess());
  } catch (e) {
    yield put(registerFailure({ error: "Email đã tồn tại" }));
  }
}

function* getUserInfoSaga(action) {
  try {
    const { id } = action.payload;
    const result = yield axios.get(`http://localhost:4000/users/${id}`);
    yield put(getUserInfoSuccess({ data: result.data }));
  } catch (e) {
    yield put(getUserInfoFailure({ error: "Lỗi" }));
  }
}

function* updateUserInfoSaga(action) {
  try {
    const { id, data } = action.payload;
    const result = yield axios.patch(`http://localhost:4000/users/${id}`, data);
    yield put(updateUserInfoSuccess({ data: result.data }));
  } catch (e) {
    yield put(updateUserInfoFailure({ error: "Lỗi" }));
  }
}

function* changePasswordSaga(action) {
  try {
    const { id, data, callback } = action.payload;
    yield axios.post("http://localhost:4000/login", {
      email: data.email,
      password: data.password,
    });
    const result = yield axios.patch(`http://localhost:4000/users/${id}`, {
      password: data.newPassword,
    });
    callback();
    yield put(changePasswordSuccess({ data: result.data }));
  } catch (e) {
    yield put(changePasswordFailure({ error: "Lỗi" }));
  }
}

export default function* categorySaga() {
  yield takeEvery(loginRequest.type, loginSaga);
  yield takeEvery(registerRequest.type, registerSaga);
  yield takeEvery(getUserInfoRequest.type, getUserInfoSaga);
  yield takeEvery(updateUserInfoRequest.type, updateUserInfoSaga);
  yield takeEvery(changePasswordRequest.type, changePasswordSaga);
}
