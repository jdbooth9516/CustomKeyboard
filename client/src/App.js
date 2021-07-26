import { Switch, Route, Redirect, Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

// imported components
import NavBar from "./components/NavBar/NavBar";
import Registration from "./components/Registration/Registration";
import Information from "./components/Information/Information";

console.log(window.location);

function App() {
  const [infoSwitch, setInfoSwitch] = useState(false);

  return (
    <div className="App">
      <NavBar></NavBar>
      {window.location.pathname == "/" && (
        <div>
          <div className="main-body">
            <h1 className="welcome-title">Welcome to customKeys</h1>
            <h3 className="welcome-description">
              Find and make your perfect custom mechanical keyboard.
            </h3>
            <div className="btn-holder">
              <div className="info-card">
                <h4>Need To Learn More</h4>
                <p>
                  Click on the button below to learn more about what makes up a
                  custom keyboard
                </p>
                <button
                  className="info-btn"
                  onClick={() => setInfoSwitch(!infoSwitch)}
                >
                  Info
                </button>
              </div>

              <div className="info-card">
                <h4>Ready to Build</h4>
                <p> Click here to start building your keyboard</p>
                <button ClassName=" build-btn">Build it</button>
              </div>
            </div>
          </div>

          <div className="info-section">
            {infoSwitch ? <Information /> : null}
          </div>
        </div>
      )}
      <div>
        <Switch>
          <Route path="/register" component={Registration} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
