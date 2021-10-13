import React, { useEffect } from "react";
import styles from "./GetUserLog.module.css";
import { useSelector, useDispatch } from "react-redux";
import allActions from "../../redux";

const GetUserLog = () => {
  const dispatch = useDispatch();
  const getLogs = useSelector((state) => state.getUserLogsReducer);
  const logs = getLogs?.record?.data?.workLogs?.data;
  console.log("QQQQQQQQ", logs);
  useEffect(() => {
    dispatch(allActions.getUserLogsAction.getUserLogsData());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <table className={styles.customers}>
      <tbody>
        <tr>
          <th>Log Date</th>
          <th>hours</th>
          <th>Description</th>
          <th>Actions</th>
        </tr>

        {logs?.map((value, id) => {
          return (
            <tr key={id}>
              <td>{value.log_date}</td>
              <td>{value.hours}</td>
              <td>{value.description}</td>
              <td>
                <button
                  className="btn btn-primary"
                  // onClick={() => {
                  //   delUser(value.id);
                  // }}
                >
                  Delete
                </button>
                <button
                  className="btn btn-primary"
                  // onClick={() => {
                  //   delUser(value.id);
                  // }}
                  // onClick={() => {
                  //   editHandler(value.id);
                  // }}
                >
                  Edit
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default GetUserLog;
