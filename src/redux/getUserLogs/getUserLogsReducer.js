import {
  GET_USER_LOGS_REQUEST,
  GET_USER_LOGS__SUCCESS,
  GET_USER_LOGS__FAILURE,
} from "./getUserLogsType";

const initialState = {
  loading: false,
  record: [],
  error: "",
};

const getUserLogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_LOGS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_USER_LOGS__SUCCESS:
      return {
        loading: false,
        record: action.payload,
        error: "",
      };
    case GET_USER_LOGS__FAILURE:
      return {
        loading: false,
        record: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
export default getUserLogsReducer;
