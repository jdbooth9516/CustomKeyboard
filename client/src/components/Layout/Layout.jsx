import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Layout.css";

const Layout = (props) => {
  const [layoutOptions, setLayoutOptions] = useState([]);

  useEffect(() => {
    getLayouts();
  }, []);

  const getLayouts = async () => {
    const response = await axios.get("http://localhost:8000/layouts/");
    setLayoutOptions(response.data);
  };

  const handleChoice = (choice) => {
    props.setLayoutChoice(choice);
    props.setLayoutVis(false);
    props.setSwitchVis(true);
  };

  const layouts = layoutOptions.map((layout) => (
    <div
      className="layout-card"
      onClick={() => {
        handleChoice(layout);
      }}
    >
      <div className="layout-title">
        <h4>{layout.Name}</h4>
      </div>
      <div className="layout-body">
        <p>{layout.Discription}</p>
      </div>
      <div className="layout-price">
        <h5>$ {layout.Price}</h5>
      </div>
    </div>
  ));

  return (
    <div className="layout-container">
      <div>
        <h2>Layouts</h2>
      </div>
      <div className="cards-container">{layouts}</div>
    </div>
  );
};

export default Layout;