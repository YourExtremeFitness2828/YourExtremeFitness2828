import React, { Fragment } from "react";

const LandingSection = () => {
  return (
    <Fragment>
      {/* <!-- ======= Hero Section ======= --> */}
      <section id="hero" class="d-flex flex-column justify-content-center">
        <div class="container">
          <div class="logo-company-name">
            <div class="img">
              <img
                src={require("../../img/logo-2.PNG")}
                alt="no logo"
                class="img-fluid text"
              />
            </div>
            <div>
              <h1 class="text">| Your Extreme Fitness |</h1>
            </div>
          </div>
          <p>
            <span>" We'er your life style partner..."</span>
          </p>
          <div class="social-links">
            <a href="#" class="facebook text">
              <i class="bx bxl-facebook"></i>
            </a>
            <a
              href="https://www.instagram.com/yourextremefitness/"
              class="instagram text"
            >
              <i class="bx bxl-instagram"></i>
            </a>
            <a
              href=" https://wa.me/917902828908"
              class="instagram text"
              target="_blank"
            >
              <i class="fab fa-whatsapp"></i>
            </a>
          </div>
        </div>
      </section>
      {/* <!-- End Hero --> */}
    </Fragment>
  );
};

export default LandingSection;
