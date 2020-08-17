import React from "react";
import { PageSpinner } from "../../Components/Common";
import {
  LandingSecion,
  About,
  Services,
  Contact,
} from "../../Components/index";

const OnePageWebSite = () => {
  return (
    <React.Suspense fallback={<PageSpinner />}>
      <LandingSecion></LandingSecion>
      <main id="main">
        <About></About>
        <Services></Services>
        <Contact></Contact>
      </main>
    </React.Suspense>
  );
};

export default OnePageWebSite;
