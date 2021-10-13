import {
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILURE,
} from "./updateUserType";
const initialState = {
  loading: false,
  userData: [],
  error: "",
};

const updateUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_USER_SUCCESS:
      return {
        loading: false,
        userData: action.payload,
        error: "",
      };
    case UPDATE_USER_FAILURE:
      return {
        loading: false,
        userData: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
export default updateUserReducer;
