import React, { Fragment } from "react";
import "./layout.css";

const Footer = () => {
  return (
    <Fragment>
      {/* <!-- ======= Footer ======= --> */}
      <footer id="footer">
        <div className="container">
          {/* <!-- <div className="copyright">
          &copy; Copyright <strong><span>MyResume</span></strong
          >. All Rights Reserved
        </div> --> */}
          <div className="credits">
            <a href="http://yourextremefitness.com/" className="text">
              | YourExtremeFitness |
            </a>
          </div>
          <div className=" footer-social-links">
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
      </footer>
      {/* <!-- End Footer --> */}
    </Fragment>
  );
};

export default Footer;
