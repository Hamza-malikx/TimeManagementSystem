import {
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAILURE,
} from "./getUserType.js";
const initialState = {
  loading: false,
  userData: [],
  error: "",
};

const getUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_USER_SUCCESS:
      return {
        loading: false,
        userData: action.payload,
        error: "",
      };
    case GET_USER_FAILURE:
      return {
        loading: false,
        userData: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
export default getUserReducer;
