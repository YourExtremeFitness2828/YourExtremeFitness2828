import React, { Fragment } from "react";
import "./contact.css";

const Contact = () => {
  return (
    <Fragment>
      {/* <!-- Contact --> */}
      <section id="contact" class="bg-fixed overlay">
        <div class="container">
          <div class="row justify-content-end">
            <div class="col-lg-5">
              <div class="section-content shadow bg-form">
                <div class="text-center section-title  ">
                  <h2>Contact Us</h2>
                </div>
                <form method="post" name="contact-us" action="">
                  <div class="row">
                    <div class="col-md-12 form-group">
                      <input
                        type="text"
                        class="form-control"
                        id="name"
                        name="name"
                        placeholder="Name"
                      />
                    </div>
                    <div class="col-md-12 form-group">
                      <input
                        type="text"
                        class="form-control"
                        id="email"
                        name="email"
                        placeholder="Email"
                      />
                    </div>
                    <div class="col-md-12 form-group">
                      <input
                        type="number"
                        class="form-control"
                        id="phoneNumber"
                        name="phoneNumber"
                        placeholder="Phone"
                      />
                    </div>
                    <div class="col-md-12 form-group">
                      <textarea
                        class="form-control"
                        id="message"
                        name="message"
                        rows="6"
                        placeholder="Your Message ..."
                      ></textarea>
                    </div>
                    <div class="col-md-12 text-center">
                      <button
                        class="btn btn-primary btn-shadow btn-sm"
                        type="submit"
                        name="submit"
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End of Reservation Section --> */}
    </Fragment>
  );
};

export default Contact;
