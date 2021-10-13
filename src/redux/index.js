import SignupAction from "./Signup/SignupAction";
import loginAction from "./LoginLogout/loginAction";
import createRegularUserAction from "./RegularUser/createRegularUserAction";
import getUserAction from "./GetUser/getUserAction";
import deleteUserAction from "./DeleteUser/deleteUserAction";
import updateUserAction from "./UpdateUser/updateUserAction";
import createWorkLogAction from "./CreateWorkLog/createWorkLogAction";
import getUserLogsAction from "./getUserLogs/getUserLogsAction";
const allActions = {
  SignupAction,
  loginAction,
  createRegularUserAction,
  getUserAction,
  deleteUserAction,
  updateUserAction,
  createWorkLogAction,
  getUserLogsAction,
};
export default allActions;
