import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Dropdown, DropdownButton } from "react-bootstrap";

const ProductDetail = () => {
  let { id } = useParams();
  const [detail, setDetail] = useState([]);
  const goToDetail = async () => {
    let url = `https://my-json-server.typicode.com/comandoda/website-hnm/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    setDetail(data);
  };
  useEffect(() => {
    goToDetail();
  }, []);
  return (
    <Container>
      <Row>
        <Col className="detail-img">
          <img width={300} src={detail?.img} />
        </Col>
        <Col className="detail-area">
          <div>제품명 : {detail?.title}</div>
          <div>가격 : {detail?.price}원</div>
          <div>{detail?.choice == true ? "Conscious choice" : ""}</div>
          <div>사이즈 선택</div>
          <DropdownButton id="dropdown-basic-button" title="Dropdown button">
            <Dropdown.Item href="#/action-1">S</Dropdown.Item>
            <Dropdown.Item href="#/action-2">M</Dropdown.Item>
            <Dropdown.Item href="#/action-3">L</Dropdown.Item>
          </DropdownButton>
          {/* <select>
            <option>{detail?.size[0]}</option>
            <option>{detail?.size[1]}</option>
            <option>{detail?.size[2]}</option>
          </select> */}
          <div className="add-button">
            <button>추가</button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
