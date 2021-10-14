import React from "react";
import { Route, Redirect } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
const ProtectedRouteManager = ({
  isAuth,
  component: Component,
  role,
  ...rest
}) => {
  // const ab = false;
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isAuth && role === "manager") {
          return (
            <>
              <Navbar />
              <Component />
            </>
          );
        } else {
          return (
            <>
              <Redirect
                to={{ pathname: "/", state: { from: props.location } }}
              />
            </>
          );
        }
      }}
    />
  );
};

export default ProtectedRouteManager;
