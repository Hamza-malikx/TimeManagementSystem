import React, { useState } from "react";
import styles from "./Manager.module.css";
import allActions from "../../redux";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
const Manager = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    password_confirmation: "",
    userType: "user",
  });
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className={styles.card}>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                dispatch(
                  allActions.createRegularUserAction.registerRegularUserData(
                    user
                  )
                );
                user.firstName = "";
                setUser({
                  firstName: "",
                  lastName: "",
                  email: "",
                  password: "",
                  password_confirmation: "",
                });
                alert("User created Successfully");
              }}
              className={styles.box}
            >
              <h1>Manager Dashboard</h1>
              <p className={styles.text_muted}>Please enter your Infos!</p>
              <input
                type="text"
                name=""
                placeholder="FirstName"
                onChange={(e) => {
                  const firstName = e.target.value;
                  setUser({ ...user, ...{ firstName } });
                }}
              />
              <input
                type="text"
                name=""
                placeholder="LastName"
                onChange={(e) => {
                  const lastName = e.target.value;
                  setUser({ ...user, ...{ lastName } });
                }}
              />
              <input
                type="email"
                name=""
                placeholder="Email"
                onChange={(e) => {
                  const email = e.target.value;
                  setUser({ ...user, ...{ email } });
                }}
              />
              <input
                type="password"
                name=""
                placeholder="Password"
                onChange={(e) => {
                  const password = e.target.value;
                  setUser({ ...user, ...{ password } });
                }}
              />
              <input
                type="password"
                name=""
                placeholder="ConfirmPassword"
                onChange={(e) => {
                  const password_confirmation = e.target.value;
                  setUser({ ...user, ...{ password_confirmation } });
                }}
              />
              {/* <input
                type="text"
                name=""
                placeholder="user"
                disabled
                onChange={(e) => {
                  const userType = user;
                  setUser({ ...user, ...{ userType } });
                }}
              /> */}
              <input type="submit" name="" value="Sign up" />
              <Link to="/manager/user">
                <button className="btn btn-primary">Get Users</button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default withRouter(Manager);
