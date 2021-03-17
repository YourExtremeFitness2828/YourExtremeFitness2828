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
        <div className="container bg-hero ">
          <div className="logo-company-name  ">
            <div className="img">
              <img
                src={require("../../img/logo-2.PNG")}
                alt="no logo"
                className="img-fluid text"
              />
            </div>
            <div className="">
              <h1 className="text">| Your Extreme Fitness |</h1>
            </div>
          </div>
          <div className="text-center">
            <p>
              <span>" We're your life style partner..."</span>
            </p>
            <div className="social-links">
              <a href="https://www.facebook.com/yourextremefitness" className="facebook text">
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
              <i className="bx bxl-whatsapp"></i>
                {/* <i className="fab fa-whatsapp"></i> */}
              </a>
              <a
                href="https://www.pinterest.com/yourextremefitness"
                className="instagram text"
                target="_blank"
              >
              <i className="bx bxl-pinterest"></i>

              {/* <i class="fab fa-pinterest-p"></i> */}
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Hero --> */}
    </Fragment>
  );
};

export default LandingSection;
