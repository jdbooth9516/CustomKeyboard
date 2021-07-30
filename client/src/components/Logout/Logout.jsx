import React from "react";

const Logout = (props) => {
  localStorage.removeItem("user");
  props.setUser({ Role: "none" });
  window.location.href = "/";
  return <div></div>;
};

export default Logout;
