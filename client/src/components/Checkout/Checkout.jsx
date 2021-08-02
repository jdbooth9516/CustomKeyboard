import React, { useState, useEffect } from "react";
import axios from "axios";
import { Form, FormGroup, Label, Input } from "reactstrap";
import useForm from "../UseForm/UseForm";
import "./Checkout.css";

const Checkout = (props) => {
  const { values, handleChange, handleSubmit } = useForm(() => {
    createPaymentAccount(values);
  });
  const [refresh, setRefresh] = useState(false);
  const [readyForSubmit, setReadyForSubmit] = useState(false);

  // format the paymant for the API
  let payment = parseInt(props.cart.Price);
  const formatedPayment = parseInt(payment + "0" + "0");
  const body = {
    User: props.cart.User,
    Build: props.cart.Build,
    Price: props.cart.Price,
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
    getPaymentAccount();
  }, []);

  useEffect(() => {
    console.log(paymentAccount);
  }, [refresh, paymentAccount]);

  const getPaymentAccount = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8000/PaymentAccount/${props.cart.User}/`
      );
      setPaymentAccount(response.data[0]);
    } catch (error) {
      console.log(error.response);
    }
  };

  function createPaymentAccount(values) { 
    async function addPaymentAccountToDatabase(values) { 
      values.User = props.cart.User;
      try { 
        const response = await axios.post("http://localhost:8000/PaymentAccount/", values
        );
        getPaymentAccount()
      } catch (error) { 
        console.log(error.response);
      }
    }
    addPaymentAccountToDatabase(values)
  }

  const sendOrder = async () => {
    try {
      const response = await axios.post("http://localhost:8000/payment/", body);
      catalogOrder();
      props.setCheckoutVis(false);
      console.log("Order sent.");
      alert("Order Sent")
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
        <div>
          <h5>Create New payment method</h5>
          <Form>
            <FormGroup>
              <Label for="Address">Address</Label>
              <Input
                type="text"
                name="Address"
                id="Address"
                placeholder="Address"
                defaultValue=""
                onChange={handleChange}
                value={values.Address}
              />
            </FormGroup>
            <FormGroup>
              <Label for="Card_number"> Card Number</Label>
              <Input
                type="text"
                name="Card_number"
                id="Card_number"
                placeholder="Card_number"
                defaultValue=""
                onChange={handleChange}
                value={values.Card_number}
              />
            </FormGroup>
            <FormGroup>
              <Label for="Exp_date">Expiration Date</Label>
              <Input
                type="text"
                name="Exp_date"
                id="Exp_date"
                placeholder="Expiration Date"
                defaultValue=""
                onChange={handleChange}
                value={values.Exp_date}
              />
            </FormGroup>
            <button onClick={handleSubmit} className="info-btn">
              Add Payment Method
            </button>
          </Form>
        </div>
        <div className="payment-section">
          {!readyForSubmit ? (
            <div className="payment account">
              <p>Use previous payment infomation</p>
              <button
                className="info-btn"
                onClick={() => {
                  getPaymentAccount();
                  setReadyForSubmit(true)
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
