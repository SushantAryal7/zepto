import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../redux/productListSlice";
import { addItem } from "../redux/CartSlice";

function ProductList() {
  let [filterProduct, setFilterProduct] = useState([]);
  const [filterText, setFilterText] = useState("");
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productList.products);

  const AddToCart = (product) => {
    console.log("AddToCart 1");

    dispatch(addItem(product));
    console.log("AddToCart 2");
  };
  useEffect(() => {
    dispatch(fetchProducts());
    if (filterText) {
      const data = products.filter((product) =>
        product.category.includes(filterText)
      );
      setFilterProduct(data);
    } else {
      setFilterProduct(products);
    }
  }, [dispatch, filterText, products]);

  return (
    <div>
      <label>Filter According you</label>
      <input
        type="text"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />
      <ul>
        {filterProduct.map((product) => (
          <li>
            <span>{product.product}</span>----<span>{product.price}</span>------
            <span>{product.category}</span>
            <button
              onClick={() => {
                AddToCart(product);
              }}
            >
              Add to cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
