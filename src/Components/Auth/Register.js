import React, { useState } from "react";
import styles from "./Register.module.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
// import allActions from "../../Components/Redux";
import allActions from "../../redux";
import { useHistory } from "react-router";

const Register = () => {
  // const { register } = props;
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const history = useHistory();
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    password_confirmation: "",
  });
  const dispatch = useDispatch();

  console.log(setUser);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(allActions.SignupAction.SignUpData(user, history));
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className={styles.card}>
            <form onSubmit={handleSubmit} className={styles.box}>
              <h1>Sign up</h1>
              <p className={styles.text_muted}>Please enter your Infos!</p>
              <input
                type="text"
                name="firstName"
                placeholder="FirstName"
                value={user.firstName}
                // onChange={(e) => {
                //   const firstName = e.target.value;
                //   setUser({ ...user, ...{ firstName } });
                // }}
                onChange={handleChange}
              />
              <input
                type="text"
                name="lastName"
                placeholder="LastName"
                value={user.lastName}
                // onChange={(e) => {
                //   const lastName = e.target.value;
                //   setUser({ ...user, ...{ lastName } });
                // }}
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={user.email}
                // onChange={(e) => {
                //   const email = e.target.value;
                //   setUser({ ...user, ...{ email } });
                // }}
                onChange={handleChange}
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={user.password}
                // onChange={(e) => {
                //   const password = e.target.value;
                //   setUser({ ...user, ...{ password } });
                // }}
                onChange={handleChange}
              />
              <input
                type="password"
                name="password_confirmation"
                placeholder="ConfirmPassword"
                value={user.password_confirmation}
                // onChange={(e) => {
                //   const password_confirmation = e.target.value;
                //   setUser({ ...user, ...{ password_confirmation } });
                // }}
                onChange={handleChange}
              />
              <Link className={`${styles.forgot} text-muted`} to="/login">
                Not a user? Log in
              </Link>
              <input type="submit" name="" value="Sign up" href="#sdaa" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
