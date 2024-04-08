import "./header.css";
import Logo from "../../assets/img/logo-store.png";
import { TiShoppingCart } from "react-icons/ti";
import { FaRegHeart } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-inner">
          <div className="header-box">
            <NavLink to="/" className="header-logo-link">
              <img
                src={Logo}
                alt="logo"
                className="header-logo"
                width={200}
                height={40}
              />
            </NavLink>

            <nav className="header-nav">
              <ul className="header-list">
                <li className="header-item">
                  <NavLink to='' className="header-item-link">
                    Home
                  </NavLink>
                </li>
                <li className="header-item">
                  <NavLink to='/men' className="header-item-link">
                    Men
                  </NavLink>
                </li>
                <li className="header-item">
                  <NavLink to='/women' className="header-item-link">
                    Women
                  </NavLink>
                </li>
                <li className="header-item">
                  <NavLink to='/kids' className="header-item-link">
                    Kids
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>

          <ul className="headerend-list">
            <li className="header-end-item">
              <NavLink to='' className="header-end-link">
                <FaRegUser />
                Login
              </NavLink>
            </li>
            <li className="header-end-item">
              <NavLink to='' className="header-end-link">
                <FaRegHeart />
                Saved
              </NavLink>
            </li>
            <li className="header-end-item">
              <NavLink to='' className="header-end-link">
                <TiShoppingCart />
                Shopping
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
