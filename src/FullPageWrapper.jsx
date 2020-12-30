/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import "fullpage.js/vendors/scrolloverflow"; // Optional. When using scrollOverflow:true
import ReactFullpage from "@fullpage/react-fullpage";

import "./styles.css";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Achievement from "./pages/achievement/Achievement";
import Testimony from "./pages/testimony/Testimony";
import Contact from "./pages/contact/Contact";

const anchors = ["home", "about", "achievements", "testimony", "contact"];

const FullPageWrapper = () => (
  <ReactFullpage
    anchors={anchors}
    navigation
    navigationTooltips={anchors}
    sectionsColor={["#04070e", "#03060c", "#04070e", "#03060c", "#03060c"]}
    onLeave={(origin, destination, direction) => {
      console.log("onLeave event", { origin, destination, direction });
    }}
    render={({ state, fullpageApi }) => {
      console.log("render prop change", state, fullpageApi); // eslint-disable-line no-console

      return (
        <div>
          <Home />
          <About />
          <Achievement />
          <Testimony />
          <Contact />
        </div>
      );
    }}
  />
);

export default FullPageWrapper;
