import React from "react";
import { Route, Redirect } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
const ProtectedRoute = ({ isAuth, component: Component, role, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isAuth && role === "admin") {
          return (
            <>
              <Navbar />
              <Component />
            </>
          );
        } else {
          return (
            <Redirect to={{ pathname: "/", state: { from: props.location } }} />
          );
        }
      }}
    />
  );
};

export default ProtectedRoute;
