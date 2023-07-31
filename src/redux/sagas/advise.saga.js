import { put, takeEvery } from "redux-saga/effects";
import axios from "axios";

import {
  adviseRequest,
  adviseSuccess,
  adviseFailure,
  getAdviseInfoRequest,
  getAdviseInfoSuccess,
  getAdviseInfoFailure,
} from "../slicers/advise.slice";



function* adviseSaga(action) {
  try {
    const { data, callback } = action.payload;
    yield axios.post("http://localhost:4000/advise", data);
    yield callback()
    yield put(adviseSuccess(data));
  } catch (e) {
    yield put(adviseFailure({ error:"" }));
  }
}
function* getAdviseInfoSaga(action) {
  try {
    const result = yield axios.get(`http://localhost:4000/advise`);
    yield put(getAdviseInfoSuccess({ data: result.data }));
  } catch (e) {
    yield put(getAdviseInfoFailure({ error: "Lỗi" }));
  }
}



export default function* categorySaga() {
  yield takeEvery(adviseRequest.type, adviseSaga);
  yield takeEvery(getAdviseInfoRequest.type, getAdviseInfoSaga);
}
