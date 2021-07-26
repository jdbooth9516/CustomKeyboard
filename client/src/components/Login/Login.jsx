import axios from "axios";
import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { Form, FormGroup, Label, Input, FormText, Button } from "reactstrap";
import useForm from "../UseForm/UseForm";

import "./Login.css";

const Login = (props) => {
  const { values, handleChange, handleSubmit } = useForm(() => {
    loginUser(values);
  });

  function loginUser(values) {
    async function getUser(values) {
      try {
        const response = await axios.post(
          "http://localhost:8000/login/",
          values
        );
        const userData = JSON.stringify(response.data);
        console.log(userData);
        localStorage.setItem("user", userData);
        props.getLoggedInUser();
        window.location.href = "/";
      } catch (error) {
        console.log(error.response.data);
      }
    }
    getUser(values);
  }

  return (
    <div>
      <div className="form-container">
        <Form>
          <FormGroup>
            <Label for="Username">User Name</Label>
            <Input
              type="text"
              name="Username"
              id="Username"
              placeholder="User Name"
              defaultValue=""
              onChange={handleChange}
              value={values.Username}
            />
          </FormGroup>
          <FormGroup>
            <Label for="Username">UserName</Label>
            <Input
              type="password"
              name="Password"
              id="Password"
              placeholder="Password"
              defaultValue=""
              onChange={handleChange}
              value={values.Password}
            />
          </FormGroup>
          <button onClick={handleSubmit} className="reg-submit">
            Login
          </button>
        </Form>
      </div>
    </div>
  );
};

export default Login;
