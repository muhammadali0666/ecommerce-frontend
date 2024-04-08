import "./header.css";
import Logo from "../../assets/img/logo-store.png";
import { TiShoppingCart } from "react-icons/ti";
import { FaRegHeart } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";

export const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-inner">
          <div className="header-box">
            <a href="#" className="header-logo-link">
              <img
                src={Logo}
                alt="logo"
                className="header-logo"
                width={200}
                height={40}
              />
            </a>

            <nav className="header-nav">
              <ul className="header-list">
                <li className="header-item">
                  <a href="#" className="header-item-link">
                    Home
                  </a>
                </li>
                <li className="header-item">
                  <a href="#" className="header-item-link">
                    Men
                  </a>
                </li>
                <li className="header-item">
                  <a href="#" className="header-item-link">
                    Women
                  </a>
                </li>
                <li className="header-item">
                  <a href="#" className="header-item-link">
                    Kids
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <ul className="headerend-list">
            <li className="header-end-item">
              <a href="#" className="header-end-link">
                <FaRegUser />
                Login
              </a>
            </li>
            <li className="header-end-item">
              <a href="#" className="header-end-link">
                <FaRegHeart />
                Saved
              </a>
            </li>
            <li className="header-end-item">
              <a href="#" className="header-end-link">
                <TiShoppingCart />
                Shopping
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
