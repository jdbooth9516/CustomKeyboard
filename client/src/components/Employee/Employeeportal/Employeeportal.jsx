import React, { useState, useEffect } from "react";
import axios from "axios";
import LayoutChart from "../../Charts/LayoutChart/LayoutChart";
import SwitchChart from "../../Charts/SwitchChart/SwitchChart";
import SalesTable from "../SalesTable/SalesTable";
import ServicesChart from "../../Charts/ServicesChart/ServicesChart";
import ExtrasChart from "../../Charts/ExtrasChart/ExtrasChart";
import { Link } from "react-router-dom";
import "./Employeeportal.css";

const Employeeportal = () => {
  const [orders, setAllOrders] = useState([]);
  const [builds, setSoldBuilds] = useState([]);
  const [sold, setSold] = useState([]);
  const [chartsVis, setChartsVis] = useState("");

  useEffect(() => {
    AllSales();
  }, []);

  useEffect(() => {
    console.log(sold);
  }, [sold]);

  async function getAllBuilds() {
    const response = await axios.get("http://localhost:8000/build/");
    setSoldBuilds(response.data);

    console.log(builds);
    getAllOrders();
  }

  const getAllOrders = async () => {
    try {
      const response = await axios.get("http://localhost:8000/orders/");
      setAllOrders(response.data);
      console.log(orders);
      getSoldBuilds();
    } catch (error) {
      console.log(error.response);
    }
  };

  const getSoldBuilds = () => {
    const soldBuilds = [];
    orders.forEach((order) => {
      builds.forEach((build) => {
        if (build.id === order.Build) {
          soldBuilds.push(build);
        }
      });
    });
    console.log(soldBuilds);
    setSold(soldBuilds);
  };

  const AllSales = () => {
    getAllBuilds();
  };

  const createCarts = () => {
    setTimeout(() => {
      setChartsVis(
        <div>
          <div>
            <SalesTable sold={sold} />
          </div>
          <h4>Customer Interest by Builds</h4>
          <div>
            <LayoutChart builds={builds} />
          </div>
          <div>
            <SwitchChart builds={builds} />
          </div>
          <div>
            <ServicesChart builds={builds} />
          </div>
          <div>
            <ExtrasChart builds={builds} />
          </div>
        </div>
      );
    }, 500);
  };

  return (
    <div
      className="employee"
      onMouseEnter={() => {
        AllSales();
      }}
    >
      <h3>Employee Portal</h3>
      <div className="portal-container">
        <div className="employee-options">
          <h5>Product Options</h5>
          <Link to="/LayoutUpdate">
            <button className="option-btn">Layouts</button>
          </Link>
          <Link to="/SwitchUpdate">
            <button className="option-btn">Switches</button>
          </Link>
          <Link to="/ServicesUpdate">
            <button className="option-btn">Services</button>
          </Link>
          <Link to="/ExtrasUpdate">
            {" "}
            <button className="option-btn">Extras</button>
          </Link>
        </div>
        <div className="sales-container">
          <div>
            <button
              className="sales-info"
              onMouseEnter={() => {
                AllSales();
              }}
              onClick={() => {
                AllSales();
                createCarts();
              }}
            >
              get sales info
            </button>
          </div>
          {chartsVis}
        </div>
      </div>
    </div>
  );
};

export default Employeeportal;
