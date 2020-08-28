import React, { Fragment } from "react";

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
        </div>
      </footer>
      {/* <!-- End Footer --> */}
    </Fragment>
  );
};

export default Footer;
