import React, { useState, useEffect } from "react";
import axios from "axios";
import SalesChart from "../SalesChart/SalesChart";
import SalesTable from "../SalesTable/SalesTable";
import "./Employeeportal.css";

const Employeeportal = () => {
  const [orders, setAllOrders] = useState([]);
  const [builds, setSoldBuilds] = useState([]);
  const [sold, setSold] = useState([]);
  const [chartsVis, setChartsVis] = useState(false);

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

  return (
    <div
      className="employee"
      onMouseEnter={() => {
        AllSales();
      }}
    >
      employee portal
      <div className="portal-container">
        <div className="employee-options">
          <h5>Product Options</h5>
          <button>Layouts</button>
          <button>Switches</button>
          <button>Services</button>
          <button>Extras</button>
        </div>
        <div className="sales-container">
          <div>
            sales
            <button
              onMouseEnter={() => {
                AllSales();
              }}
              onClick={() => {
                AllSales();
                setChartsVis(true);
              }}
            >
              get sales info
            </button>
          </div>
          <div>{chartsVis ? <SalesTable sold={sold} /> : null}</div>
          <div>{chartsVis ? <SalesChart sold={sold} /> : null}</div>
        </div>
      </div>
    </div>
  );
};

export default Employeeportal;
