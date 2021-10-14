import React, { useState } from "react";
import styles from "./Login.module.css";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import allActions from "../../redux";

const Login = () => {
  const dispatch = useDispatch();
  const [loginState, setLoginState] = useState({});
  const history = useHistory();
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 ">
          <div className={styles.card}>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                // login(loginState, history);
                dispatch(allActions.loginAction.postLogin(loginState, history));
              }}
              className={styles.box}
            >
              <h1>Login</h1>
              <p className={styles.text_muted}>
                Please enter your login and password!
              </p>
              <input
                type="email"
                placeholder="Email"
                onChange={(e) => {
                  const email = e.target.value;
                  setLoginState({ ...loginState, ...{ email } });
                }}
              />
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => {
                  const password = e.target.value;
                  setLoginState({ ...loginState, ...{ password } });
                }}
              />
              <Link className={`${styles.forgot} text-muted`} to="/signup">
                Not a user? Sign up
              </Link>
              <input type="submit" name="" value="Login" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
