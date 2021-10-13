import axios from "axios";
import {
  CREATE_USER_REQUEST,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAILURE,
} from "./createRegularUserType.js";

const createUserRequest = () => {
  return {
    type: CREATE_USER_REQUEST,
  };
};

const createUserSuccess = (userData) => {
  return {
    type: CREATE_USER_SUCCESS,
    payload: userData,
  };
};

const createUserFailure = (error) => {
  return {
    type: CREATE_USER_FAILURE,
    payload: error,
  };
};

const registerRegularUserData = (userRegState) => {
  return async (dispatch) => {
    try {
      dispatch(createUserRequest);
      const api = "http://34.210.129.167/api/users";
      const token = JSON.parse(localStorage.getItem("auth"));
      var res = await axios.post(api, userRegState, {
        headers: {
          Authorization: `Bearer ${token.user.token}`,
        },
      });
      const { data } = res;
      console.log("HELO WORDL", token.user.token);
      dispatch(createUserSuccess(data));
    } catch (error) {
      console.error(error);
      dispatch(createUserFailure(error.message));
    }
  };
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  createUserRequest,
  createUserSuccess,
  createUserFailure,
  registerRegularUserData,
};
