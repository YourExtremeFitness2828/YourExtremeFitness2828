import React, { useState, Fragment } from "react";
import { Content, Header, Footer } from "./index";

const MainLayout = (props) => {
  const [sideBarCollapes, setSideBarCollapes] = useState(false);

  return (
    <Fragment>
      <Header />
      <main className="wrapper ">
        {/* <SideBar sideBarCollapes={sideBarCollapes}></SideBar> */}
        <Content fluid>{props.children}</Content>
      </main>
      <Footer />
    </Fragment>
  );
};

export default MainLayout;
