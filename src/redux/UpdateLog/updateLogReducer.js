import {
  UPDATE_LOG_REQUEST,
  UPDATE_LOG_SUCCESS,
  UPDATE_LOG_FAILURE,
} from "./updateLogType";
const initialState = {
  loading: false,
  userData: [],
  error: "",
};

const updateLogReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_LOG_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_LOG_SUCCESS:
      return {
        loading: false,
        userData: action.payload,
        error: "",
      };
    case UPDATE_LOG_FAILURE:
      return {
        loading: false,
        userData: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
export default updateLogReducer;
