import React from "react";

export const LandingSecion = React.lazy(() =>
  import("./LandingSecion/LandingSecion")
);
// About.
export const About = React.lazy(() => import("./About/About"));
// Services.
export const Services = React.lazy(() => import("./Services/Services"));
// Conatct.
export const Contact = React.lazy(() => import("./Contact/Contact"));
