/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import ReactDOM from "react-dom";
import "fullpage.js/vendors/scrolloverflow"; // Optional. When using scrollOverflow:true
import ReactFullpage from "@fullpage/react-fullpage";

import "./styles.css";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Achievement from "./pages/achievement/Achievement";
import Testimony from "./pages/testimony/Testimony";

class MySection extends React.Component {
  render() {
    return (
      <div className="section">
        <h3>{this.props.content}</h3>
      </div>
    );
  }
}

const anchors = ["home", "about", "achievements", "testimony", "contact"];

const FullPageWrapper = () => (
  <ReactFullpage
    anchors={anchors}
    navigation
    navigationTooltips={anchors}
    sectionsColor={["#04070e", "#03060c", "#04070e", "#03060c", "#0798ec"]}
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
          <MySection content={"Slide up!"} />
        </div>
      );
    }}
  />
);

export default FullPageWrapper;
