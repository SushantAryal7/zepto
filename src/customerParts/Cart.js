import React, { useEffect } from "react";
import { useSelector } from "react-redux";

function Cart() {
  // const products = useSelector((state) => state.cart);
  const email = JSON.parse(localStorage.getItem("zepto_login"));

  let products = JSON.parse(localStorage.getItem(`zepto_login_${email}`));

  return (
    <div>
      <ul>
        {products &&
          products.map((product) => (
            <li>
              <span>{product.product}</span>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Cart;
