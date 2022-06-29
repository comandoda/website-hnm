import React from "react";
import { Navigate } from "react-router-dom";
import ProductDetail from "../page/productDetail";
const Private = ({ auth }) => {
  return auth == true ? <ProductDetail /> : <Navigate to="/login" />;
};

export default Private;
