import React, { Fragment } from "react";
import "./about.css";

const About = () => {
  return (
    <Fragment>
      {/* <!-- ======= About Section End ======= --> */}
      <section id="about" class="section-padding about-us">
        <div class="container">
          <div class="row">
            <div
              class="col-sm-5 img-bg d-flex shadow align-items-center justify-content-center justify-content-md-end img-2"
              style={{ backgroundImage: "url(./assets/img/hero-2.jpg)" }}
            ></div>
            <div class="col-sm-7 py-5 pl-md-0 pl-4">
              <div class="heading-section pl-lg-5 ml-md-5">
                <h2>
                  Welcome to <span class="heading">Your Extreme Fitness.</span>
                </h2>
              </div>
              <div class="pl-lg-5 ml-md-5">
                <p>
                  Health is the biggest wealth. What do you say…? Is really your
                  health your biggest wealth…? Don’t worry we are here to help
                  you.
                  <span class="company-name">“Your Extreme Fitness”</span>
                </p>

                <p>
                  We cater you with the best in class Health and Fitness
                  services, which are delivered to you through Healthy Foods,
                  Fitness Trainings, Massage Therapy and Mindfulness. <br />
                  We have handpicked each and every item to make sure the
                  quality and service meets your expectations.
                </p>

                <p class="mb-0">
                  <b>
                    A little bit about who we are and how
                    <span class="company-name">“Your Extreme Fitness”</span>
                    started
                  </b>
                </p>
                <p>
                  We are two brothers who are passionate about making lives
                  easier with creativity and right mind set. Health & Fitness is
                  one of our key focus area, our vision is to build an extremely
                  healthy and powerful community. Help to reach your goals and
                  see yourself as an achiever.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default About;
