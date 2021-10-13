import {
  CREATE_USER_REQUEST,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAILURE,
} from "./createRegularUserType";

const initialState = {
  loading: false,
  regularUserRecord: [],
  error: "",
};

const RegularUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CREATE_USER_SUCCESS:
      return {
        loading: false,
        regularUserRecord: action.payload,
        error: "",
      };
    case CREATE_USER_FAILURE:
      return {
        loading: false,
        regularUserRecord: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
export default RegularUserReducer;
