import axios from "axios";
import {
  PREFFERED_HOURS_REQUEST,
  PREFFERED_HOURS_SUCCESS,
  PREFFERED_HOURS_FAILURE,
} from "./prefferedHoursType";

const prefferedHoursRequest = () => {
  return {
    type: PREFFERED_HOURS_REQUEST,
  };
};

const prefferedHoursSuccess = (loginData) => {
  return {
    type: PREFFERED_HOURS_SUCCESS,
    payload: loginData,
  };
};

const prefferedHoursFailure = (error) => {
  return {
    type: PREFFERED_HOURS_FAILURE,
    payload: error,
  };
};
const prefferedHourData = (value, id) => {
  return async (dispatch) => {
    try {
      dispatch(prefferedHoursRequest);
      const token = JSON.parse(localStorage.getItem("auth"));
      const config = {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${token.user.token}`,
        },
      };
      var res = await axios.patch(
        `http://34.210.129.167/api/users/${parseInt(
          id
        )}/preferred-working-hours`,
        { workingHours: value },
        config
      );
      dispatch(prefferedHoursSuccess(res));
      console.log(value, "+++++++++", id);
      console.log("ab", id);
      console.log("Successful Login");
    } catch (error) {
      console.error(error);
      dispatch(prefferedHoursFailure(error.message));
    }
  };
};
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  prefferedHoursRequest,
  prefferedHoursSuccess,
  prefferedHoursFailure,
  prefferedHourData,
};
