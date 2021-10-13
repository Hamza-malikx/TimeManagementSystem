import axios from "axios";
import {
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILURE,
} from "./updateUserType.js";
const updateUserRequest = () => {
  return {
    type: UPDATE_USER_REQUEST,
  };
};

const updateUserSuccess = (userData) => {
  return {
    type: UPDATE_USER_SUCCESS,
    payload: userData,
  };
};

const updateUserFailure = (error) => {
  return {
    type: UPDATE_USER_FAILURE,
    payload: error,
  };
};

const updateUserData = (data, id) => {
  let token = JSON.parse(localStorage.getItem("auth"));
  console.log("Token", token.user.token);
  return (dispatch) => {
    dispatch(updateUserRequest);
    axios
      .put(`http://34.210.129.167/api/users/${id}`, data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token.user.token}`,
        },
      })
      .then((response) => {
        const userData = response.data;
        console.log("...", userData);
        dispatch(updateUserSuccess(userData));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(updateUserFailure(errorMsg));
      });
  };
};
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  updateUserRequest,
  updateUserSuccess,
  updateUserFailure,
  updateUserData,
};
