import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import authReducer from "./redux/slicers/auth.slice";
import adviseReducer from "./redux/slicers/advise.slice";
import productReducer from "./redux/slicers/product.slice";
import categoryReducer from "./redux/slicers/category.slice";
import reviewReducer from "./redux/slicers/review.slice";
import cartReducer from "./redux/slicers/cart.slice";
import commonReducer from "./redux/slicers/common.slice";
import locationReducer from "./redux/slicers/location.slice";
import orderReducer from "./redux/slicers/order.slice";
import favoriteReducer from "./redux/slicers/favorite.slice";

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
    common: commonReducer,
    location: locationReducer,
    order: orderReducer,
    favorite: favoriteReducer,
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
