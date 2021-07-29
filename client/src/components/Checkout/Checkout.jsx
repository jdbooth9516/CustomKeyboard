import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Checkout.css";

const Checkout = (props) => {
  const [refresh, setRefresh] = useState(false);
  const [readyForSubmit, setReadyForSubmit] = useState(false);

  // format the paymant for the API
  let payment = parseInt(props.cart.Price);
  const formatedPayment = parseInt(payment + "0" + "0");
  const body = {
    amount: formatedPayment,
  };
  const [paymentAccount, setPaymentAccount] = useState({});

  // formatting the build to sendit to the database
  const orderBody = {
    User: props.cart.User,
    Build: props.cart.Build,
    Price: props.cart.Price,
  };

  useEffect(() => {
    console.log(props.cart);
    console.log(paymentAccount);
  }, [refresh]);

  const getPaymentAccount = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8000/PaymentAccount/${props.cart.User}/`
      );
      setPaymentAccount(response.data[0]);
      setReadyForSubmit(true);
    } catch (error) {
      console.log(error.response);
    }
  };

  const sendOrder = async () => {
    try {
      const response = await axios.post("http://localhost:8000/payment/", body);
      catalogOrder();
      props.setCheckoutVis(false);
      console.log("Order sent.");
    } catch (error) {
      console.log(error.response);
    }
  };

  const catalogOrder = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8000/orders/",
        orderBody
      );
      console.log(response.data);
    } catch (error) {
      console.log(error.response);
    }
  };

  if (!refresh) {
    setRefresh(true);
  }

  return (
    <div>
      <div className="checkout-Container">
        <div>
          <h3>{props.cart.Build_name}</h3>
          <h5>{props.cart.Price}</h5>
        </div>
        <div className="payment-section">
          {!readyForSubmit ? (
            <div className="payment account">
              <p>Use previous payment infomation</p>
              <button
                className="info-btn"
                onClick={() => {
                  getPaymentAccount();
                }}
              >
                Yes
              </button>
            </div>
          ) : (
            <button
              className="build-btn"
              onClick={() => {
                sendOrder();
              }}
            >
              Submit Order
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Checkout;
