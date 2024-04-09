import Telegram from "../../assets/img/telegram.png"
import Instagram from "../../assets/img/instagram.png"
import Youtube from "../../assets/img/youtube.png"
import Facebook from "../../assets/img/facebook.png"
import "./footer.css";


export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-top">
            <div className="footer-one-box">
              <ul className="footer-list">
                <h4 className="footer-list-title">Main list</h4>
                <li className="footer-item">
                  <a href="#" className="footer-item-link">
                    Home
                  </a>
                </li>
                <li className="footer-item">
                  <a href="#" className="footer-item-link">
                    Men
                  </a>
                </li>
              </ul>
              <ul className="footer-list">
                <h4 className="footer-list-title">Next list</h4>
                <li className="footer-item">
                  <a href="#" className="footer-item-link">
                    Women
                  </a>
                </li>
                <li className="footer-item">
                  <a href="#" className="footer-item-link">
                    Kids
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-box">
              <p className="footer-text">
                Bizning ijtimoiy tarmoqlarni kuzating!
              </p>
              <ul className="footer-box-list">
                <li className="footer-box-item">
                  <a href="#" className="footer-box-item-link">
                    <img src={Instagram} width={20} height={20} alt="social media icon" className="footer-icon"/>
                    Instagram
                  </a>
                </li>
                <li className="footer-box-item">
                  <a href="#" className="footer-box-item-link">
                    <img src={Youtube} width={20} height={20} alt="social media icon" className="footer-icon"/>
                    Youtube
                  </a>
                </li>
                <li className="footer-box-item">
                  <a href="#" className="footer-box-item-link">
                    <img src={Facebook} width={20} height={20} alt="social media icon" className="footer-icon"/>
                    Facebook
                  </a>
                </li>
                <li className="footer-box-item">
                  <a href="#" className="footer-box-item-link">
                    <img src={Telegram} width={20} height={20} alt="social media icon" className="footer-icon"/>
                    Telegram
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <hr className="footer-hr" />
          <p className="footer-bottom-text">
            {new Date().getFullYear()} Barcha huquqlar himoyalangan
          </p>
        </div>
      </div>
    </footer>
  );
};
