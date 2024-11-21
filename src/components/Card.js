import React from "react";
import "./Card.css";

function Card({ product, AddToCart }) {
  return (
    <div className="card">
      <h1>Part 1</h1>
      <div>
        <p>{product.product}</p>
        <p>{product.category}</p>
        <p>{product.price}</p>
        <button onClick={AddToCart}>Add to cart</button>
      </div>
    </div>
  );
}

export default Card;
