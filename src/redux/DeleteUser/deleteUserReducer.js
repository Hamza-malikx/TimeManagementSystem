import {
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAILURE,
} from "./deleteUserType.js";
const initialState = {
  loading: false,
  userData: [],
  error: "",
};

const deleteUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_USER_SUCCESS:
      return {
        loading: false,
        userData: action.payload,
        error: "",
      };
    case DELETE_USER_FAILURE:
      return {
        loading: false,
        userData: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
export default deleteUserReducer;
