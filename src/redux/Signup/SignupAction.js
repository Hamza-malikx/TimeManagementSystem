import axios from "axios";
import { SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE } from "./SignupType";

const signUpRequest = () => {
  return {
    type: SIGNUP_REQUEST,
  };
};
const signUpSuccess = (SignUpData) => {
  return {
    type: SIGNUP_SUCCESS,
    payload: SignUpData,
  };
};
const signUpFailure = (error) => {
  return {
    type: SIGNUP_FAILURE,
    payload: error,
  };
};
const SignUpData = (userState, history) => {
  return async (dispatch) => {
    try {
      const api = "http://34.210.129.167/api/register";
      dispatch(signUpRequest);
      var res = await axios.post(api, userState);
      const { data } = res;
      dispatch(signUpSuccess(data));
      alert("Account created Successfully");
    } catch (error) {
      const msg = error.message;
      dispatch(signUpFailure(msg));
    }
  };
};
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  signUpRequest,
  signUpSuccess,
  signUpFailure,
  SignUpData,
};
