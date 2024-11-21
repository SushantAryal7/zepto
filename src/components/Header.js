import React from "react";
import "./Header.css";
import { ShowCartFunction } from "../redux/CartSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const totalItems = useSelector((state) => state.cart.totalItem);
  console.log("total items ", totalItems);
  // local storage item
  const email = JSON.parse(localStorage.getItem("zepto_login"));
  // const products = JSON.parse(localStorage.getItem(`zepto_login_${email}`));
  // const totalItem = products.length;
  // console.log("totalItem", totalItem);

  const loginHandler = () => {};
  const handleCart = () => {
    if (email) {
      dispatch(ShowCartFunction());
    } else {
      navigate("./login");
    }
  };

  return (
    <header className="header">
      <div>
        <h2>zepto</h2>
      </div>
      <div>
        <p>deleveri in two minutes</p>
        <p>location</p>
      </div>
      <div>
        <input placeholder="......."></input>
      </div>
      <div>
        <button onClick={loginHandler}>login</button>
      </div>
      <div>
        <button onClick={handleCart}>Cart{totalItems}</button>
      </div>
    </header>
  );
}

export default Header;
