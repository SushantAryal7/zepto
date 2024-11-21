import React, { Fragment, useEffect, useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import "./AddProducts.css";
import { firestore } from "../firebase/firebase";
import { getProduct } from "../redux/productListSlice";
import { useDispatch, useSelector } from "react-redux";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

import {
  addProduct,
  fetchProducts,
  deleteProduct,
  updateProduct,
} from "../redux/productListSlice";

function AddProducts() {
  const [product, setProduct] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCatogery] = useState("");
  const [updateButton, setUpdateButton] = useState(false);
  //   const [image, setImage] = useState(null);

  // const [file, setFile] = useState(null);
  // const [progress, setProgress] = useState(0);
  // const [url, setUrl] = useState("");

  const dispatch = useDispatch();
  const productss = useSelector((state) => state.productList.products);

  const AddProductDetail = (e) => {
    e.preventDefault();
    const newProduct = { product, price, category };
    dispatch(addProduct(newProduct));
    setCatogery("");
    setPrice("");
    setProduct("");
    setUpdateButton(false);
  };

  const handleDelete = (id) => {
    console.log("delete  idddd", id);
    dispatch(deleteProduct(id));
  };

  const handleUpdate = (item) => {
    setCatogery(item.category);
    setPrice(item.price);
    setProduct(item.product);
    setUpdateButton(true);
    dispatch(deleteProduct(item.id));
  };

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <Fragment>
      <div className="outerproductForm">
        <form className="productForm" onSubmit={AddProductDetail}>
          <div>
            <label>Product Name :</label>
            <input
              type="text"
              placeholder="Product Name"
              value={product}
              onChange={(e) => setProduct(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Product Price :</label>
            <input
              type="number"
              placeholder="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Product category :</label>
            <input
              type="text"
              placeholder="category"
              value={category}
              onChange={(e) => setCatogery(e.target.value)}
              required
            />
          </div>
          {/* <div>
          <label>Image :</label>
          <input type="file" accept="image/*" required />
          
        </div> */}

          {updateButton ? (
            <button type="submit">Update</button>
          ) : (
            <button type="submit">Add</button>
          )}
        </form>
      </div>
      <ul>
        {productss.map((item) => (
          <li key={item.id}>
            {item.product}- - -{item.price}- - -{item.category}{" "}
            <button onClick={() => handleDelete(item.id)}>
              Delete Product
            </button>
            <button onClick={() => handleUpdate(item)}>update Product</button>
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

export default AddProducts;
