import React, { useState } from "react";
import { Container, Title } from "../StyledComponents";
import { LatestProducts } from "../LatestProduct";
import { MdDelete } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import "./shopping.css";

export const ShoppingComp = () => {
  const [quantity, setQuantity] = useState(0);

  const quantityIncreement = () => {
    setQuantity((quant) => quant + 1);
  };

  const quantityDecreement = () => {
    setQuantity((quant) => quant - 1);
  };

  return (
    <Container style={{ marginTop: "140px" }}>
      <Title>Our Shopping</Title>
      <div className="shopping-wrapper">
        <div className="shopping-left">
          <input type="checkbox" className="shopping-input" id="product" />
          <label htmlFor="product" className="shopping-label">
            Select all
          </label>
          <div className="shopping-left-box">
            <div className="shopping-left-box-left">
              <input type="checkbox" className="shopping-left-box-left-input" />
              <img
                src="https://picsum.photos/200/200"
                alt=""
                className="shopping-left-box-left-img"
              />
            </div>
            <div className="shopping-left-box-middle">
              <h4 className="shopping-left-box-middle-title">
                Product name...
              </h4>
              <div className="shopping-left-box-middle-btn-box">
                <button
                  className="shopping-left-box-middle-btn"
                  onClick={quantity > 0 ? quantityDecreement : undefined}
                >
                  <FaMinus style={{ fontSize: "16px" }} />
                </button>
                <button className="shopping-left-box-middle-btn">
                  {quantity}
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
                <MdDelete className="shopping-left-box-right-btn-img" /> delete
              </button>
              <h4 className="shopping-left-box-right-paragraph">149 000 sum</h4>
              <p className="shopping-left-box-right-p">300 000 sum</p>
            </div>
          </div>
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
