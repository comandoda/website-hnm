import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ item }) => {
  const navigate = useNavigate();
  const goToDetail = () => {
    navigate(`/product/${item.id}`);
  };
  return (
    <div className="product-area">
      <img
        className="product-img"
        width={270}
        src={item?.img}
        onClick={goToDetail}
      />
      <div>{item?.choice ? "Conscious choice" : ""}</div>
      <div>{item?.price}원</div>
      <div>{item?.title}</div>
      <div>{item?.new ? "신제품" : "구제품"}</div>
    </div>
  );
};

export default ProductCard;
