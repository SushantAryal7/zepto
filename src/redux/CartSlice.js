import { createSlice } from "@reduxjs/toolkit";

const email = JSON.parse(localStorage.getItem("zepto_login"));

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: JSON.parse(localStorage.getItem(`zepto_login_${email}`) ?? "[]"),
    showCart: false,
    totalItem: 0,
  },
  reducers: {
    addItem: (state, action) => {
      state.cart.push(action.payload);
      console.log("cartSlice addItem", state.cart);
      localStorage.setItem(`zepto_login_${email}`, JSON.stringify(state.cart));
      // console.log()
      state.totalItem = state.cart.length;
    },
    ShowCartFunction: (state) => {
      
      state.showCart = !state.showCart;
    },
  },
});

export const { addItem, ShowCartFunction } = CartSlice.actions;

export default CartSlice.reducer;
