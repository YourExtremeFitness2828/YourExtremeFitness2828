import React, { Fragment } from "react";
import { Button } from "reactstrap";

const Header = ({ handleToggleSideBar }) => {
  return (
    <Fragment>
      <header id="header" className="d-flex flex-column justify-content-center">
        <nav className="nav-menu">
          <ul>
            <li className="active">
              <a href="#hero">
                <i className="bx bx-home"></i> <span>Home</span>
              </a>
            </li>
            <li>
              <a href="#about">
                <i className="bx bx-user"></i> <span>About</span>
              </a>
            </li>
            <li>
              <a href="#services">
                <i className="bx bx-server"></i> <span>Services</span>
              </a>
            </li>
            <li>
              <a href="#contact">
                <i className="bx bx-envelope"></i> <span>Contact</span>
              </a>
            </li>
          </ul>
        </nav>
        {/* <!-- .nav-menu --> */}
      </header>
    </Fragment>
  );
};

export default Header;
