// src/Login.js

import React, { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { loginUser } from "../redux/AuthSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loginHandler = async (event) => {
    event.preventDefault();
    try {
      const action = await dispatch(loginUser({ email, password }));
      if (loginUser.fulfilled.match(action)) {
        localStorage.setItem("zeptoLogin", JSON.stringify(email));
        navigate("/private/addproduct"); // Navigate to home on successful login
      } else {
        alert("please login with correct crediantial");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Fragment>
      <div style={{ maxWidth: "400px", margin: "0 auto", padding: "20px" }}>
        <h2>Login</h2>
        <form onSubmit={loginHandler}>
          <div>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* <p>
            <Link to="/forget-password">Forget password?</Link>
          </p> */}

          <button type="submit">Login</button>
        </form>
        <p>
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </Fragment>
  );
};

export default Login;
