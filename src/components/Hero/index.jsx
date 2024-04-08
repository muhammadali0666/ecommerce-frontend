import "./hero.css"
import { IoCallOutline } from "react-icons/io5";
import HeroBg from "../../assets/img/model.avif"

export const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-inner">
          <div className="hero-box">
            <h1 className="hero-title">
              ZarStoreda barchasi tez va aniq.
            </h1>
            <p className="hero-text">
              ZarStore orqali oson va qulay xarid amalga oshiring.
              Pullaringizni tejash va qulay xarid uchun ZarStoredan foydalaning.
            </p>
            <a href="tel:+998904565025" className="hero-btn">
              <IoCallOutline className="hero-icon"/>
              Call
            </a>
          </div>
          <img src={HeroBg} alt="bg" className="hero-img" width={700} height={700}/>
        </div>
      </div>
    </section>
  )
}
