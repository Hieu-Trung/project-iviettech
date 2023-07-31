import { fork } from "redux-saga/effects";

import authSaga from "./auth.saga";
import adviseSaga from "./advise.saga";
import productSaga from "./product.saga";
import categorySaga from "./category.saga";

export default function* rootSaga() {
  yield fork(authSaga);
  yield fork(adviseSaga);
  yield fork(productSaga);
  yield fork(categorySaga);
}
