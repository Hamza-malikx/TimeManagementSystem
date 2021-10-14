import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import styles from "./User.module.css";
import allActions from "../../redux";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
const User = () => {
  const dispatch = useDispatch();
  const [loginState, setLoginState] = useState({});
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 ">
          <div className={styles.card}>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                // login(loginState, history);
                dispatch(
                  allActions.createWorkLogAction.createWorkLogData(loginState)
                );
              }}
              className={styles.box}
            >
              <h1>Create Work Logs</h1>
              <p className={styles.text_muted}>Please enter your logs!</p>
              <input
                type="date"
                placeholder="logDate"
                onChange={(e) => {
                  const logDate = e.target.value;
                  setLoginState({ ...loginState, ...{ logDate } });
                }}
              />
              <input
                type="number"
                placeholder="hours"
                onChange={(e) => {
                  const hours = e.target.value;
                  setLoginState({ ...loginState, ...{ hours } });
                }}
              />
              <input
                type="text"
                placeholder="description"
                onChange={(e) => {
                  const description = e.target.value;
                  setLoginState({ ...loginState, ...{ description } });
                }}
              />
              <input type="submit" name="" value="Create" />
              <Link to="/user/getlog">
                <button className="btn btn-primary">Get Log</button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(User);
