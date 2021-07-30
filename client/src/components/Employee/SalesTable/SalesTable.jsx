import React, { useState, useEffect } from "react";
import "./SalesTable.css";

const SalesTable = (props) => {
  useEffect(() => {
    console.log(soldItems);
  }, []);

  const soldItems = props.sold.map((item) => (
    <tr>
      <td className="table-column">{item.Name}</td>
      <td className="table-column">{item.Layout}</td>
      <td className="table-column">{item.Switch}</td>
      <td className="table-column">{item.Services}</td>
      <td className="table-column">{item.Extras}</td>
    </tr>
  ));

  return (
    <div className="orders-container">
      <h4> Order Histroy </h4>
      <div>
        <table className="orders-table">
          <thead className="table-head">
            <tr>
              <th className="table-column">Name</th>
              <th className="table-column">Layout</th>
              <th className="table-column">Switch</th>
              <th className="table-column">Services</th>
              <th className="table-column">Extras</th>
            </tr>
          </thead>
          <tbody className="table-body">{soldItems}</tbody>
        </table>
      </div>
    </div>
  );
};

export default SalesTable;
