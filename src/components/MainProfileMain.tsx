import React from "react";
import Divider from "./Divider";
import AboutMe from "./AboutMe";
import Connections from "./Connections";
const MainProfileMain = () => {
  return (
    <div>
      <div className="header">
        <div className="aboutCard">
          <div className="tag">
            <span className="aboutName">`NotAsh</span>
            <span className="discriminator">#4190</span>
          </div>
          <div className="statusText">
            test status Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Aliquam consequuntur, assumenda ame
            <Divider />
          </div>
          <div className="aboutScroll">
            <div className="aboutMain">
              <AboutMe />
              <Divider />
            </div>
            <div className="connectionContainer">
              <Connections />
              <Connections />
              <Connections />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainProfileMain;
