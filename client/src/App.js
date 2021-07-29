import { Switch, Route, Redirect, Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

// imported components
import NavBar from "./components/NavBar/NavBar";
import Registration from "./components/Registration/Registration";
import Information from "./components/Information/Information";
import Login from "./components/Login/Login";
import Logout from "./components/Logout/Logout";
import BuildForm from "./components/Buildform/BuildForm";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";

function App() {
  const [infoSwitch, setInfoSwitch] = useState(false);
  const [loggedInUser, setUser] = useState({});
  const [carts, setCarts] = useState([]);

  useEffect(() => {
    getCart();
  }, [loggedInUser, setUser]);

  function getLoggedInUser() {
    const loggedUser = JSON.parse(localStorage.getItem("user"));
    setUser(loggedUser);
    console.log(loggedInUser);
  }

  async function getCart() {
    if (loggedInUser === {}) {
      console.log("not logged in");
    } else {
      const response = await axios.get(
        `http://localhost:8000/cart/${loggedInUser.id}/`
      );
      console.log("downloaded Cart");
      setCarts(response.data);
    }
  }

  return (
    <div className="App" onMouseEnter={() => getLoggedInUser()}>
      <NavBar user={loggedInUser}></NavBar>
      {window.location.pathname === "/" && (
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
                <p>
                  Know what you want? Click here to start building your custom
                  keyboard.
                </p>
                <button
                  className="build-btn"
                  onClick={() => (window.location.href = "/build")}
                >
                  Build It
                </button>
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
          <Route
            path="/login"
            render={(props) => (
              <Login {...props} getLoggedInUser={getLoggedInUser} />
            )}
          />
          <Route path="/logout" component={Logout} />
          <Route
            path="/build"
            render={(props) => (
              <BuildForm
                {...props}
                loggedInUser={loggedInUser}
                getCart={getCart}
              />
            )}
          />
          <Route
            path="/cart"
            render={(props) => <ShoppingCart {...props} carts={carts} />}
          />
        </Switch>
      </div>
    </div>
  );
}

export default App;
