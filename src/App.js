import { Fragment, useEffect, useState } from "react";
import "./App.css";
import AddProducts from "./adminFeature/AddProducts";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/SignUp";
import PrivateRoute from "./pages/PrivateRoute";
import ProductList from "./customerParts/ProductList";
import Cart from "./customerParts/Cart";
import Admin from "./pages/Admin";
import { auth } from "./firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";
import Home from "./pages/Home";
import Modal from "./modal/Modal";
import { useSelector } from "react-redux";

function App() {
  const [user, setUser] = useState("");
  const showcart = useSelector((state) => state.cart.showCart);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (users) => {
      if (users) {
        localStorage.setItem("zepto_login", JSON.stringify(users.email));
        setUser(users.email);
      }
    });

    // Clean up subscription on unmount
    return () => unsubscribe();
  }, []);
  return (
    <Fragment>
      <Router>
        
          <Modal>
            <Cart />
          </Modal>
        
        <Routes>
          {/* <Route path="/" element={user ? <ProductList /> : <Login />} /> */}
          <Route path="/" element={<Home />} />

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          <Route path="/private" element={<PrivateRoute />}>
            <Route path="cart" element={<Cart />} />
          </Route>
          <Route path="/admin" element={<Admin />}>
            <Route path="addProduct" element={<AddProducts />} />
          </Route>
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
