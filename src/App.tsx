import { useState } from "react";
import "./styles/style.css";
import Divider from "./components/Divider";
import AboutMe from "./components/AboutMe";
import Connections from "./components/Connections";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="profileCard">
        <div className="banner"></div>
        <div className="avatar">
          <img alt=" " aria-hidden="true" src="/public/avatar.png" />
          <div className="status">
            <img alt=" " aria-hidden="true" src="/public/status/online.png" />
          </div>
        </div>
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
                <Connections /> <Connections />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
