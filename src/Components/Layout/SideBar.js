import React from "react";
import "./layout.css";

const SideBar = ({ sideBarCollapes }) => {
  return (
    // <!-- ======= Header ======= -->
    <header id="header" class="d-flex flex-column justify-content-center">
      <nav class="nav-menu">
        <ul>
          <li class="active">
            <a href="#hero">
              <i class="bx bx-home"></i> <span>Home</span>
            </a>
          </li>
          <li>
            <a href="#about">
              <i class="bx bx-user"></i> <span>About</span>
            </a>
          </li>
          <li>
            <a href="#services">
              <i class="bx bx-server"></i> <span>Services</span>
            </a>
          </li>
          <li>
            <a href="#contact">
              <i class="bx bx-envelope"></i> <span>Contact</span>
            </a>
          </li>
        </ul>
      </nav>
      {/* <!-- .nav-menu --> */}
    </header>
  );
};

export default SideBar;
