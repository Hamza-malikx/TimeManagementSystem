import React from "react";
import { Link } from "react-router-dom";
// import { LogOutAuthAction } from "../../redux/Login";
import { useSelector, useDispatch } from "react-redux";
import allActions from "../../redux";
import styles from "./Navbar.module.css";

import { useHistory } from "react-router";
const Navbar = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const auth = useSelector((state) => state.loginReducer);
  return (
    <nav className={`navbar navbar-expand-lg navbar-light  ${styles.navbar}`}>
      <div className="container">
        <Link className="navbar-brand" to="/">
          Time Management System
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse mt-2 "
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ms-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>

            {!auth.isLoggedIn ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to="/signup">
                    Signup
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <p className="nav-link">
                    {auth.user.user &&
                      auth.user.user.firstName + " " + auth.user.user.lastName}
                  </p>
                </li>
                <li>
                  <button
                    className="nav-link"
                    onClick={() => {
                      dispatch(
                        allActions.loginAction.LogOutAuthAction(history)
                      );
                    }}
                  >
                    logout
                  </button>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
