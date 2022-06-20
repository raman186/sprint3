import React from "react";
import { Routes,Route } from "react-router-dom";
import Products from "./Products";
import ProductItem from "./ProductItem";
import { Link } from "react-router-dom";

const Home = () => {
  return <div>
    <Link to="/products"> Products </Link>
  </div>
};

export default Home;
