import React, { useState, useEffect } from "react";
import axios from "axios";

const Services = (props) => {
  const [servicesOptions, setServicesOptions] = useState([]);
  let running_price = props.totalPrice;

  useEffect(() => {
    getServices();
  }, []);

  const getServices = async () => {
    const response = await axios.get("http://localhost:8000/services/");
    setServicesOptions(response.data);
  };

  const handleChoice = (choice) => {
    props.setServiceChoice(choice);
    props.setTotalPrice((running_price += choice.Price));
    props.setServicePrice(choice.Price)
    props.setVis(false);
    props.setExtraVis(true);
  };

  const goBack = () => { 
    let newTotal = props.totalPrice
    props.setTotalPrice(newTotal -= props.switchPrice)
    props.setVis(false);
    props.setSwitchVis(true);
  }


  const services = servicesOptions.map((service) => (
    <div
      className="layout-card"
      onClick={() => {
        handleChoice(service);
      }}
    >
      <div className="layout-title">
        <h4>{service.Name}</h4>
      </div>
      <div className="layout-body">
        <p>{service.Discription}</p>
      </div>
      <div className="layout-price">
        <h5>$ {service.Price}</h5>
      </div>
    </div>
  ));

  return (
    <div className="layout-container">
      <div>
        <h2>Services</h2>
      </div>
      <div className="cards-container">{services}</div>
      <div className="total-price">
        <h3>Build Cost</h3>
        <h3>$ {props.totalPrice} </h3>
      </div>
      <div><button className="goback-btn" onClick={() => {goBack()}}>Go Back</button></div>
    </div>
  );
};

export default Services;
