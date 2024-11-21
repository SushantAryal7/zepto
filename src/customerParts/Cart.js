import React from "react";
import { useDispatch } from "react-redux";
import { ShowCartFunction } from "../redux/CartSlice";

function Cart() {
  const dispatch = useDispatch(ShowCartFunction);
  const email = JSON.parse(localStorage.getItem("zepto_login"));

  const products = JSON.parse(localStorage.getItem(`zepto_login_${email}`));

  return (
    <div>
      <h1>hi this is cart</h1>
      <ul>
        {products &&
          products.map((product) => (
            <li>
              <span>{product.product}</span>
            </li>
          ))}
      </ul>
      <button onClick={() => dispatch(ShowCartFunction())}>Cart</button>
    </div>
  );
}

export default Cart;
