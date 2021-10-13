import { SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE } from "./SignupType";
const userState = {
  isLoggedIn: false,
  user: [],
  error: "",
};
const SignUpReducer = (state = userState, action) => {
  switch (action.type) {
    case SIGNUP_REQUEST:
      return {
        ...state,
        isLoggedIn: false,
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload,
        error: "",
      };

    case SIGNUP_FAILURE:
      return {
        ...state,
        isLoggedIn: false,
        user: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
export default SignUpReducer;
