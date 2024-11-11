import { configureStore } from "@reduxjs/toolkit";
import prodictsReducer from "./productListSlice";
import AuthReducer from "./AuthSlice";
import CartReducer from "./CartSlice";
const store = configureStore({
  reducer: {
    productList: prodictsReducer,
    auth: AuthReducer,
    cart: CartReducer,
  },
});

export default store;
