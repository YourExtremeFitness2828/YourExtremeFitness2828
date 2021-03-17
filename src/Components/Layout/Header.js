import React, { useState, Fragment } from "react";
import { Button } from "reactstrap";

const Header = ({ handleToggleSideBar }) => {
  const [isShopMobileNav, setIsShowMobileNav] = useState(false);

  // Function.
  const toggleSideMobileNav = () => {
    setIsShowMobileNav((prevState) => !prevState);
  };

  return (
    <Fragment>
      {/* <!-- ======= Mobile nav toggle button ======= --> */}

      <button
        type="button"
        className="mobile-nav-toggle  text"
        onClick={toggleSideMobileNav}
      >
        {isShopMobileNav ? (
          <i className="fas fa-times text"></i>
        ) : (
          <i className="fas fa-bars text"></i>
        )}
      </button>
      <header
        id="header"
        className="d-flex flex-column justify-content-center   "
        style={isShopMobileNav ? { left: "0" } : {}}
      >
        <nav className="nav-menu">
          <ul>
            <li className="active">
              <a href="#hero">
              <i class="bx bx-home"></i> <span>Home</span>
                <span>Home</span>
              </a>
            </li>
            <li>
              <a href="#about">
              <i class="bx bx-user"></i> <span>About</span>
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
