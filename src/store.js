import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import authReducer from "./redux/slicers/auth.slice";
import adviseReducer from "./redux/slicers/advise.slice";
import productReducer from "./redux/slicers/product.slice";
import categoryReducer from "./redux/slicers/category.slice";
import reviewReducer from "./redux/slicers/review.slice";
import cartReducer from "./redux/slicers/cart.slice";

import rootSaga from "./redux/sagas";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    auth: authReducer,
    advise: adviseReducer,
    product: productReducer,
    category: categoryReducer,
    review: reviewReducer,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      thunk: false,
      serializableCheck: false,
    }),
    sagaMiddleware,
  ],
});

sagaMiddleware.run(rootSaga);

export { store };
