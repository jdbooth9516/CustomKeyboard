import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import { Form, FormGroup, Label, Input } from "reactstrap";
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
        console.log(localStorage.getItem("user"));
        window.location.href = "/";
      } catch (error) {
        console.log(error.response);
        alert("error during login");
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
            <Label for="Password">Password</Label>
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
