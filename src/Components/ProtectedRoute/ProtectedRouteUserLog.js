import React from "react";
import { Route, Redirect } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
const ProtectedRouteUserLog = ({
  isAuth,
  component: Component,
  role,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isAuth && role === "user") {
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

export default ProtectedRouteUserLog;
