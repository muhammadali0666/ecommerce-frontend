import { useEffect, useState } from "react";
import { Container } from "../StyledComponents";
import "./card.css";
import { TbShoppingBagPlus } from "react-icons/tb";
import { Box, CircularProgress } from "@mui/material";

export const Card = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [pageCount, setPageCount] = useState(20);

  const fetchLatestProducts = (pageCount) => {
    fetch(`http://localhost:4001/all_products`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setAllProducts(data ? data.slice(0, pageCount) : data));
  };
  useEffect(() => {
    fetchLatestProducts(pageCount);
  }, [pageCount]);

  const pageCountIncrement = () => {
    setPageCount(pageCount + 20);
  };

  return (
    <section className="card">
      <Container>
        <div className="card-inner">
          <ul className="card-list">
            {allProducts.length > 0 ? (
              allProducts.map((item, idx) => (
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
          <div className="card-btn-box">
            <button className="card-bottom-btn" onClick={pageCountIncrement}>
              20 more views
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};
