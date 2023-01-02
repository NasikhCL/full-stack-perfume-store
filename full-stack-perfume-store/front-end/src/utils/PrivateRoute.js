import React from "react";
// import { Children } from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = (props) => {
  const { children } = props;
  const token = localStorage.getItem("jwt");

  if (!token) {
    return <Navigate to={"/signin-signup/signin"} />;
  }

  return children;
};

export default PrivateRoute;
