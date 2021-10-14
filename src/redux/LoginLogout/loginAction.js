import axios from "axios";
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL,
} from "./loginType";

const loginRequest = () => {
  return {
    type: LOGIN_REQUEST,
  };
};

const loginSuccess = (loginData) => {
  return {
    type: LOGIN_SUCCESS,
    payload: loginData,
  };
};

const loginFailure = (error) => {
  return {
    type: LOGIN_FAILURE,
    payload: error,
  };
};
const postLogin = (loginState, history) => {
  return async (dispatch) => {
    try {
      dispatch(loginRequest);
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const api = "http://34.210.129.167/api/login";
      var res = await axios.post(api, loginState, config);
      const { data } = res;
      dispatch(loginSuccess(res));
      if (data.user.roles[0].name === "manager") {
        history.push("/manager");
      } else if (data.user.roles[0].name === "admin") {
        history.push("/admin");
      } else if (data.user.roles[0].name === "user") {
        history.push("/user");
      }
    } catch (error) {
      console.error(error);
      dispatch(loginFailure(error.message));
    }
  };
};
const LogOutAuthAction = (history) => {
  return async (dispatch) => {
    try {
      dispatch({ type: LOGOUT_SUCCESS, payload: {} });
      localStorage.removeItem("auth");
      history.push("/login");
    } catch (error) {
      console.error(error);
      dispatch({ type: LOGOUT_FAIL, payload: {} });
      localStorage.removeItem("auth");
      history.push("/signup");
    }
  };
};
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  loginRequest,
  loginSuccess,
  loginFailure,
  postLogin,
  LogOutAuthAction,
};
