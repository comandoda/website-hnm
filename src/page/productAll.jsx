import React, { useState } from "react";
import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProductCard from "../component/productCard";
import { useSearchParams } from "react-router-dom";

const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const [query, setQuery] = useSearchParams();
  const showProductAll = async () => {
    let searchQuery = query.get("q") || "";
    console.log(searchQuery);
    let url = `https://my-json-server.typicode.com/comandoda/website-hnm/products?q=${searchQuery}`;
    let response = await fetch(url);
    let data = await response.json();
    setProductList(data);
  };
  useEffect(() => {
    showProductAll();
  }, [query]);

  return (
    <div>
      <Container>
        <Row>
          {productList.map((item, id) => (
            <Col key={id} lg={3}>
              <ProductCard item={item} />
            </Col>
          ))}
        </Row>
      </Container>
      <ProductCard />
    </div>
  );
};

export default ProductAll;
