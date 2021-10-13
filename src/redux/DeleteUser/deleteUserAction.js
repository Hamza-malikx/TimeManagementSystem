import axios from "axios";
import {
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAILURE,
} from "./deleteUserType";
const deleteUserRequest = () => {
  return {
    type: DELETE_USER_REQUEST,
  };
};

const deleteUserSuccess = (userData) => {
  return {
    type: DELETE_USER_SUCCESS,
    payload: userData,
  };
};

const deleteUserFailure = (error) => {
  return {
    type: DELETE_USER_FAILURE,
    payload: error,
  };
};

const deleteUserData = (id) => {
  let token = JSON.parse(localStorage.getItem("auth"));
  console.log("Token", token.user.token);
  console.log("id", id);
  return (dispatch) => {
    dispatch(deleteUserRequest);
    axios
      .delete(`http://34.210.129.167/api/users/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token.user.token}`,
        },
      })
      .then((response) => {
        const userData = response.data;
        console.log("...", userData);
        dispatch(deleteUserSuccess(userData));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(deleteUserFailure(errorMsg));
      });
  };
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  deleteUserRequest,
  deleteUserSuccess,
  deleteUserFailure,
  deleteUserData,
};
