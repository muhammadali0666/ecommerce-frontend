import React, { useEffect, useState } from "react";
import { Container, Title } from "../StyledComponents";
import { TbShoppingBagPlus } from "react-icons/tb";
import Box from "@mui/material/Box";
import { CircularProgress } from "@mui/material";

export const LatestProducts = () => {
  const [latestProducts, setLatestProducts] = useState([]);

  const fetchLatestProducts = () => {
    fetch(`http://localhost:4001/latest_products`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setLatestProducts(data));
  };
  useEffect(() => {
    fetchLatestProducts();
  }, []);

  return (
    <Container>
      <Title>Latest 10 Products</Title>
      <ul className="card-list">
        {latestProducts.length > 0 ? (
          latestProducts.map((item, idx) => (
            <li className="card-item" key={idx}>
              <img
                src={item?.image}
                alt="product"
                className="card-img"
                width={200}
                height={200}
              />
              <div className="card-inner-box">
                <h4 className="card-item-title">{item?.name}</h4>
                <p className="card-text">
                  for
                  {" " + item?.category}
                </p>
                <div className="card-bottom">
                  <div className="card-bottom-left">
                    <p className="card-bottom-deleted">
                      {item?.old_price + " so'm"}
                    </p>
                    <p className="card-bottom-text">
                      {item?.new_price + " so'm"}
                    </p>
                  </div>

                  <button className="card-btn">
                    <TbShoppingBagPlus />
                  </button>
                </div>
              </div>
            </li>
          ))
        ) : (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: "100px",
            }}
          >
            <CircularProgress />
          </Box>
        )}
      </ul>
    </Container>
  );
};
