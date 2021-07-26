import React from "react";

const Logout = () => {
  localStorage.removeItem("user");
  window.location.href = "/";
  return <div></div>;
};

export default Logout;
