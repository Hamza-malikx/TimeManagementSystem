import axios from "axios";
import {
  GET_USER_LOGS_REQUEST,
  GET_USER_LOGS__SUCCESS,
  GET_USER_LOGS__FAILURE,
} from "./getUserLogsType";

const getUserLogsRequest = () => {
  return {
    type: GET_USER_LOGS_REQUEST,
  };
};

const getUserLogsSuccess = (userData) => {
  return {
    type: GET_USER_LOGS__SUCCESS,
    payload: userData,
  };
};

const getUserLogsFailure = (error) => {
  return {
    type: GET_USER_LOGS__FAILURE,
    payload: error,
  };
};

const getUserLogsData = () => {
  return async (dispatch) => {
    try {
      let token = JSON.parse(localStorage.getItem("auth"));
      dispatch(getUserLogsRequest);
      const config = {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${token.user.token}`,
        },
      };
      const api = "http://34.210.129.167/api/work-logs";
      var res = await axios.get(api, config);
      dispatch(getUserLogsSuccess(res));
    } catch (error) {
      console.error(error);
      dispatch(getUserLogsFailure(error.message));
    }
  };
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getUserLogsRequest,
  getUserLogsSuccess,
  getUserLogsFailure,
  getUserLogsData,
};
