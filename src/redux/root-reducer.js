import { combineReducers } from "redux";
import SignupReducer from "./Signup/SignupReducer";
import loginReducer from "./LoginLogout/loginReducer";
import RegularUserReducer from "./RegularUser/createRegularUserReducer";
import getUserReducer from "./GetUser/getUserReducer";
import deleteUserType from "./DeleteUser/deleteUserReducer";
import updateUserReducer from "./UpdateUser/updateUserReducer";
import createWorkLogReducer from "./CreateWorkLog/createWorkLogReducer";
import getUserLogsReducer from "./getUserLogs/getUserLogsReducer";
const rootReducer = combineReducers({
  SignupReducer,
  loginReducer,
  RegularUserReducer,
  getUserReducer,
  deleteUserType,
  updateUserReducer,
  createWorkLogReducer,
  getUserLogsReducer,
});
export default rootReducer;
