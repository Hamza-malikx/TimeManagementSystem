import React, { useEffect, useState } from "react";
import styles from "./GetUserLog.module.css";
import { useSelector, useDispatch } from "react-redux";
import allActions from "../../redux";
import { useHistory } from "react-router-dom";
var correctId = 0;
const GetUserLog = () => {
  const history = useHistory();
  const [state, setState] = useState();
  // const [ref, setRef] = useState(0);
  const dispatch = useDispatch();
  const getLogs = useSelector((state) => state.getUserLogsReducer);
  const logs = getLogs?.record?.data?.workLogs?.data;
  const [hours, setHours] = useState(8);
  const [updateLog, setUpdateLog] = useState({
    log_date: "",
    hours: "",
    description: "",
  });
  const ab = useSelector((state) => state.loginReducer);
  const loginId = ab.user.user.id;
  const editHandler = (id) => {
    const editLog = logs?.filter((value) => {
      return value.id === id;
    });
    setUpdateLog({
      logDate: editLog[0]?.log_date,
      hours: editLog[0]?.hours,
      description: editLog[0]?.description,
    });
    correctId = id;
  };
  const changeHandler = (event) => {
    const { name, value } = event.target;
    setUpdateLog((val) => {
      return { ...val, [name]: value };
    });
  };
  useEffect(() => {
    dispatch(allActions.getUserLogsAction.getUserLogsData());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);
  const changeInputHandler = (e) => {
    setHours(e.target.value);
  };
  return (
    <div className="container">
      <span>
        <button
          className="back"
          onClick={() => {
            history.goBack();
          }}
        >
          back
        </button>
      </span>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            allActions.prefferedHoursAction.prefferedHourData(hours, loginId)
          );
        }}
      >
        <input
          type="number"
          placeholder="Preffered Hours=7"
          value={hours}
          onChange={changeInputHandler}
          className={styles.input}
        />
      </form>
      <h3 className="text-center">WorkLogs</h3>
      <table className={`${styles.customers} mb-4`}>
        <tbody>
          <tr>
            <th>Log Date</th>
            <th>hours</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>

          {logs?.map((value, id) => {
            return (
              <tr
                key={id}
                style={{
                  backgroundColor: !!(value.hours >= hours) ////state)
                    ? "green"
                    : " rgba(255, 0, 0,0.8)",
                }}
              >
                <td>{value.log_date}</td>
                <td>{value.hours}</td>
                <td>{value.description}</td>
                <td>
                  <button
                    className="btn-edit"
                    onClick={() => {
                      editHandler(value.id);
                    }}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className={styles.updatebox}>
        <h2>Edit Log</h2>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            dispatch(
              allActions.updateLogAction.updateLogData(updateLog, correctId)
            );
            setState(correctId);
          }}
        >
          <div className={styles.userbox}>
            <input
              type="date"
              name="log_date"
              onChange={changeHandler}
              value={updateLog.logDate || ""}
            />
            <label>FirstName</label>
          </div>
          <div className={styles.userbox}>
            <input
              type="number"
              name="hours"
              onChange={changeHandler}
              value={updateLog.hours || ""}
            />
            <label>LastName</label>
          </div>
          <div className={styles.userbox}>
            <input
              type="text"
              name="description"
              onChange={changeHandler}
              value={updateLog.description || ""}
            />
            <label>Email</label>
          </div>
          <button type="submit">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Edit
          </button>
        </form>
      </div>
    </div>
  );
};

export default GetUserLog;
