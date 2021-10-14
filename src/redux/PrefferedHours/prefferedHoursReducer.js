import {
  PREFFERED_HOURS_REQUEST,
  PREFFERED_HOURS_SUCCESS,
  PREFFERED_HOURS_FAILURE,
} from "./prefferedHoursType";
import axios from "axios";
const userState = {
  number: [],
  isLoggedIn: false,
};
//helper function to create localStorage
const getAuthState = () => {
  const auth = localStorage.getItem("auth");
  try {
    const authobj = JSON.parse(auth);
    const { token_type } = authobj.user.token;
    axios.defaults.headers.common["Authorization"] = `Bearer ${token_type}`;
    return authobj;
  } catch (error) {
    return userState;
  }
};
const newAuth = getAuthState();
const loginReducer = (state = newAuth, action) => {
  switch (action.type) {
    case PREFFERED_HOURS_REQUEST:
      return {
        ...state,
      };
    case PREFFERED_HOURS_SUCCESS:
      const newAuthState = {
        user: action.payload.data,
        error: "",
      };
      return newAuthState;
    case PREFFERED_HOURS_FAILURE:
      return {
        user: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
export default loginReducer;
