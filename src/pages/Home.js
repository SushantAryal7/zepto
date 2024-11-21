import React, { Fragment } from "react";
import Header from "../components/Header";
import PaanCorner from "../components/PaanCorner";
import Card from "../components/Card";
import "./Home.css";
import ProductList from "../customerParts/ProductList";

function Home() {
  return (
    <Fragment>
      <Header />
      <PaanCorner />
      <ProductList />
    </Fragment>
  );
}

export default Home;
