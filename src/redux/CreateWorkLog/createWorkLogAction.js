import axios from "axios";
import {
  CREATE_LOG_REQUEST,
  CREATE_LOG__SUCCESS,
  CREATE_LOG__FAILURE,
} from "./createWorkLogType";

const createLogRequest = () => {
  return {
    type: CREATE_LOG_REQUEST,
  };
};

const createLogSuccess = (userData) => {
  return {
    type: CREATE_LOG__SUCCESS,
    payload: userData,
  };
};

const createLogFailure = (error) => {
  return {
    type: CREATE_LOG__FAILURE,
    payload: error,
  };
};

const createWorkLogData = (state) => {
  return async (dispatch) => {
    try {
      let token = JSON.parse(localStorage.getItem("auth"));
      console.log("Token", token.user.token);
      // console.log("NAq", dispatch);
      dispatch(createLogRequest);
      const config = {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${token.user.token}`,
        },
      };
      const api = "http://34.210.129.167/api/work-logs";
      var res = await axios.post(api, state, config);
      // const { data } = res;
      dispatch(createLogSuccess(res));
      console.log("ab", state);
      console.log("Successful Log");
    } catch (error) {
      console.error(error);
      dispatch(createLogFailure(error.message));
    }
  };
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  createLogRequest,
  createLogSuccess,
  createLogFailure,
  createWorkLogData,
};
