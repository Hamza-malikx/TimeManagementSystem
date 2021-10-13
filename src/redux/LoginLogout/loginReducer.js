import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL,
} from "./loginType";
import axios from "axios";
const userState = {
  user: [],
  error: "",
  ab: false,
  isLoggedIn: false,
};
//helper function to create localStorage
const getAuthState = () => {
  const auth = localStorage.getItem("auth");
  try {
    const authobj = JSON.parse(auth);
    const { token_type } = authobj.user.token;
    console.log("authobj", authobj);
    axios.defaults.headers.common["Authorization"] = `Bearer ${token_type}`;
    return authobj;
  } catch (error) {
    return userState;
  }
};
const newAuth = getAuthState();
const loginReducer = (state = newAuth, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
      };
    case LOGIN_SUCCESS:
      const newAuthState = {
        user: action.payload.data,
        error: "",
        isLoggedIn: true,
        ab: false,
      };
      localStorage.setItem("auth", JSON.stringify(newAuthState));
      console.log("Red", action.payload.data);
      return newAuthState;
    case LOGIN_FAILURE:
      return {
        user: [],
        error: action.payload,
        isLoggedIn: false,
        ab: true,
      };
    case LOGOUT_SUCCESS:
      return userState;

    case LOGOUT_FAIL:
      return userState;
    default:
      return state;
  }
};
export default loginReducer;
