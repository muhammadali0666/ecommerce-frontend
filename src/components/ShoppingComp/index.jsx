import React, { useEffect, useState } from "react";
import { Container, Title } from "../StyledComponents";
import { LatestProducts } from "../LatestProduct";
import { MdDelete } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import "./shopping.css";

export const ShoppingComp = () => {
  const [quantity, setQuantity] = useState(0);
  const [info, setInfo] = useState([]);

  const quantityIncreement = () => {
    setQuantity((quant) => quant + 1);
  };

  const quantityDecreement = () => {
    setQuantity((quant) => quant - 1);
  };

  const getShoppingCart = () => {
    fetch(`http://localhost:4001/get_shopping_cart`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        token: localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((data) => setInfo(data.products));
  };

  useEffect(() => {
    getShoppingCart();
  }, []);

  return (
    <Container style={{ marginTop: "140px" }}>
      <Title>Our Shopping</Title>
      <div className="shopping-wrapper">
        <div className="shopping-left">
          <input type="checkbox" className="shopping-input" id="product" />
          <label htmlFor="product" className="shopping-label">
            Select all
          </label>
          {info.length > 0 ? (
            info.map((item, idx) => (
              <div className="shopping-left-box" key={idx}>
                <div className="shopping-left-box-left">
                  <input
                    type="checkbox"
                    className="shopping-left-box-left-input"
                  />
                  <img
                    src={item?.image}
                    alt=""
                    className="shopping-left-box-left-img"
                  />
                </div>
                <div className="shopping-left-box-middle">
                  <h4 className="shopping-left-box-middle-title">
                    {item?.name}
                  </h4>
                  <div className="shopping-left-box-middle-btn-box">
                    <button
                      className="shopping-left-box-middle-btn"
                      onClick={quantity > 0 ? quantityDecreement : undefined}
                    >
                      <FaMinus style={{ fontSize: "16px" }} />
                    </button>
                    <button className="shopping-left-box-middle-btn">
                      {item?.quantity}
                    </button>
                    <button
                      className="shopping-left-box-middle-btn"
                      onClick={quantityIncreement}
                    >
                      <FaPlus style={{ fontSize: "16px", color: "red" }} />
                    </button>
                  </div>
                </div>
                <div className="shopping-left-box-right">
                  <button className="shopping-left-box-right-btn">
                    <MdDelete className="shopping-left-box-right-btn-img" />{" "}
                    delete
                  </button>
                  <h4 className="shopping-left-box-right-paragraph">
                    {item?.new_price} so'm
                  </h4>
                  <p className="shopping-left-box-right-p">
                    {item?.old_price} so'm
                  </p>
                </div>
              </div>
            ))
          ) : (
            <h1>loading...</h1>
          )}
        </div>
        <div className="shopping-right">
          <h4 className="shopping-right-title">Our Order</h4>
          <div className="shopping-right-box">
            <p className="shopping-right-text">product (0):</p>
            <p className="shopping-right-text">300 000 sum</p>
          </div>
          <div className="shopping-right-box-bottom">
            <p className="shopping-right-box-bottom-p">All:</p>
            <div className="shopping-right-box-bottom-right">
              <h4 className="shopping-right-box-bottom-right-paragraph">
                149 000 sum
              </h4>
              <p className="shopping-right-box-bottom-right-p">
                You save 150 000 sum
              </p>
            </div>
          </div>
          <button className="shopping-right-btn">formalizing</button>
        </div>
      </div>
      <LatestProducts />
    </Container>
  );
};
