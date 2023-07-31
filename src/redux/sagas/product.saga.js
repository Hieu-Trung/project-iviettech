import { put, debounce } from "redux-saga/effects";
import axios from "axios";

import {
  getProductListRequest,
  getProductListSuccess,
  getProductListFailure,
} from "../slicers/product.slice";

function* getProductListSaga(action) {
  try {
    const { page, limit, categoryId, keyword, sort } = action.payload;
    const sortData = sort && {
      _sort: sort.split(".")[0],
      _order: sort.split(".")[1],
    };
    const result = yield axios.get("http://localhost:4000/products", {
      params: {
        _page: page,
        _limit: limit,
        categoryId,
        q: keyword,
        ...sortData,
      },
    });
    yield put(getProductListSuccess({ data: result.data }));
  } catch (e) {
    yield put(getProductListFailure("Đã có lỗi xảy ra!"));
  }
}

export default function* productSaga() {
  yield debounce(300, getProductListRequest.type, getProductListSaga);
}
