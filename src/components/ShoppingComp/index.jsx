import React, { useEffect, useState } from "react";
import { Container, Title } from "../StyledComponents";
import { LatestProducts } from "../LatestProduct";
import { MdDelete } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import "./shopping.css";

export const ShoppingComp = () => {
  const [info, setInfo] = useState([]);
  const [handelMessage, setHandleMessage] = useState("");

  const getShoppingCart = () => {
    fetch(`http://localhost:4001/carts_list`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        token: localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.products) {
          setInfo(data?.products);
        }
        if (data.message) {
          setHandleMessage(data?.message);
        }
      });
  };

  const addQuantity = (id) => {
    fetch(`http://localhost:4001/add_quantity`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        token: localStorage.getItem("token"),
      },
      body: JSON.stringify({
        productId: id,
      }),
    });
    getShoppingCart();
  };

  const reduceQuantity = (id) => {
    fetch(`http://localhost:4001/reduce_quantity`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        token: localStorage.getItem("token"),
      },
      body: JSON.stringify({
        productId: id,
      }),
    });
    getShoppingCart();
  };

  const deleteProduct = (id) => {
    fetch(`http://localhost:4001/delete_cart`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        token: localStorage.getItem("token"),
      },
      body: JSON.stringify({
        productId: id,
      }),
    });
  };

  useEffect(() => {
    getShoppingCart();
  }, [addQuantity, reduceQuantity, deleteProduct]);

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
                    {item?.name ? item?.name.slice(0, 50) : item?.name}.
                  </h4>
                  <div className="shopping-left-box-middle-btn-box">
                    <button
                      className="shopping-left-box-middle-btn"
                      onClick={() => reduceQuantity(item?.productId)}
                    >
                      <FaMinus style={{ fontSize: "16px" }} />
                    </button>
                    <button className="shopping-left-box-middle-btn">
                      {item?.quantity}
                    </button>
                    <button
                      className="shopping-left-box-middle-btn"
                      onClick={() => addQuantity(item?.productId)}
                    >
                      <FaPlus style={{ fontSize: "16px", color: "red" }} />
                    </button>
                  </div>
                </div>
                <div className="shopping-left-box-right">
                  <button className="shopping-left-box-right-btn" onClick={() => deleteProduct(item?.productId)}>
                    <MdDelete className="shopping-left-box-right-btn-img" />{" "}
                    delete
                  </button>
                  <h4 className="shopping-left-box-right-paragraph">
                    {item?.new_price * item?.quantity} so'm
                  </h4>
                  <p className="shopping-left-box-right-p">
                    {item?.old_price * item?.quantity} so'm
                  </p>
                </div>
              </div>
            ))
          ) : (
            <h1>{handelMessage || "Loading..."}</h1>
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
