import React, { Fragment } from "react";
import "./landingSection.css";
const LandingSection = () => {
  return (
    <Fragment>
      {/* <!-- ======= Hero Section ======= --> */}
      <section
        id="hero"
        className="d-flex flex-column justify-content-center  "
      >
        <div className="container bg-hero">
          <div className="logo-company-name">
            <div className="img">
              <img
                src={require("../../img/logo-2.PNG")}
                alt="no logo"
                className="img-fluid text"
              />
            </div>
            <div>
              <h1 className="text">| Your Extreme Fitness |</h1>
            </div>
          </div>
          <p>
            <span>" We'er your life style partner..."</span>
          </p>
          <div className="social-links">
            <a href="#" className="facebook text">
              <i className="bx bxl-facebook"></i>
            </a>
            <a
              href="https://www.instagram.com/yourextremefitness/"
              className="instagram text"
            >
              <i className="bx bxl-instagram"></i>
            </a>
            <a
              href=" https://wa.me/917902828908"
              className="instagram text"
              target="_blank"
            >
              <i className="fab fa-whatsapp"></i>
            </a>
          </div>
        </div>
      </section>
      {/* <!-- End Hero --> */}
    </Fragment>
  );
};

export default LandingSection;
