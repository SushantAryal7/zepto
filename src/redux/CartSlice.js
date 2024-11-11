import { createSlice } from "@reduxjs/toolkit";

const email = JSON.parse(localStorage.getItem("zepto_login"));
const CartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.cart.push(action.payload);
      console.log("cartSlice addItem", state.cart);
      localStorage.setItem(`zepto_login_${email}`, JSON.stringify(state.cart));
    },
  },
});

export const { addItem } = CartSlice.actions;

export default CartSlice.reducer;
