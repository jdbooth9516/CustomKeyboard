import { Switch, Route, Redirect, Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

// imported components
import NavBar from "./components/NavBar/NavBar";
import Registration from "./components/Registration/Registration";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <div className="main-body">
        <Switch>
          <Route path="/register" component={Registration} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
