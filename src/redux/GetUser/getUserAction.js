import axios from "axios";
import {
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAILURE,
} from "./getUserType.js";
const getUserRequest = () => {
  return {
    type: GET_USER_REQUEST,
  };
};

const getUserSuccess = (userData) => {
  return {
    type: GET_USER_SUCCESS,
    payload: userData,
  };
};

const getUserFailure = (error) => {
  return {
    type: GET_USER_FAILURE,
    payload: error,
  };
};

const getUserData = () => {
  let token = JSON.parse(localStorage.getItem("auth"));
  return (dispatch) => {
    dispatch(getUserRequest);
    axios
      .get("http://34.210.129.167/api/users", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token.user.token}`,
        },
      })
      .then((response) => {
        const userData = response.data;
        dispatch(getUserSuccess(userData));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(getUserFailure(errorMsg));
      });
  };
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getUserRequest,
  getUserSuccess,
  getUserFailure,
  getUserData,
};
