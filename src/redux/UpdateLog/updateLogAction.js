import axios from "axios";
import {
  UPDATE_LOG_REQUEST,
  UPDATE_LOG_SUCCESS,
  UPDATE_LOG_FAILURE,
} from "./updateLogType.js";
const updateLogRequest = () => {
  return {
    type: UPDATE_LOG_REQUEST,
  };
};

const updateLogSuccess = (userData) => {
  return {
    type: UPDATE_LOG_SUCCESS,
    payload: userData,
  };
};

const updateLogFailure = (error) => {
  return {
    type: UPDATE_LOG_FAILURE,
    payload: error,
  };
};

const updateLogData = (data, id) => {
  let token = JSON.parse(localStorage.getItem("auth"));
  return (dispatch) => {
    dispatch(updateLogRequest);
    axios
      .put(`http://34.210.129.167/api/work-logs/${id}`, data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token.user.token}`,
        },
      })
      .then((response) => {
        const userData = response.data;
        dispatch(updateLogSuccess(userData));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(updateLogFailure(errorMsg));
      });
  };
};
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  updateLogRequest,
  updateLogSuccess,
  updateLogFailure,
  updateLogData,
};
