import "./hero.css"
import { IoCallOutline } from "react-icons/io5";
import HeroBg from "../../assets/img/model.avif"
import { Container } from "../StyledComponents";

export const Hero = () => {
  return (
    <section className="hero">
      <Container>
        <div className="hero-inner">
          <div className="hero-box">
            <h1 className="hero-title">
            Everything is fast and clear at ZarStore.
            </h1>
            <p className="hero-text">
            Make shopping easy and convenient through ZarStore. Use ZarStore to save your money and shop conveniently.
            </p>
            <a href="tel:+998904565025" className="hero-btn">
              <IoCallOutline className="hero-icon"/>
              Call
            </a>
          </div>
          <img src={HeroBg} alt="bg" className="hero-img" width={500} height={400}/>
        </div>
      </Container>
    </section>
  )
}
