import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import allActions from "../../redux";
import styles from "./GetUserFromAdmin.module.css";
var correctId = 0;
const GetUserFromAdmin = () => {
  const dispatch = useDispatch();
  const getUsers = useSelector((state) => state.getUserReducer);
  const users = getUsers?.userData?.users?.data;
  const manager = users?.filter((value) => {
    return value.roles[0].name === "manager";
  });
  const user = users?.filter((value) => {
    return value.roles[0].name === "user";
  });
  const [state, setState] = useState("");
  const [updateUser, setUpdateUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const delUser = (id) => {
    dispatch(allActions.deleteUserAction.deleteUserData(id));
    setState(id);
  };
  const editHandler = (id) => {
    const editUser = users?.filter((value) => {
      return value.id === id;
    });
    console.log("Edit user", editUser);
    setUpdateUser({
      firstName: editUser[0]?.firstName,
      lastName: editUser[0]?.lastName,
      email: editUser[0]?.email,
    });
    correctId = id;
  };
  const changeHandler = (event) => {
    const { name, value } = event.target;
    setUpdateUser((val) => {
      return { ...val, [name]: value };
    });
  };
  useEffect(() => {
    dispatch(allActions.getUserAction.getUserData());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);
  return (
    <div>
      <div className="container">
        <h3>Manager</h3>
        <table className={styles.customers}>
          <tbody>
            <tr>
              <th>FirstName</th>
              <th>LastName</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>

            {manager?.map((value, id) => {
              return (
                <tr key={id}>
                  {console.log("bbb", value.roles)}
                  <td>{value.firstName}</td>
                  <td>{value.lastName}</td>
                  <td>{value.email}</td>
                  <td>
                    <button
                      className="btn btn-primary"
                      onClick={() => {
                        delUser(value.id);
                      }}
                    >
                      Delete
                    </button>
                    <button
                      className="btn btn-primary"
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
        <br />
        <h3>User</h3>
        <table className={styles.customers}>
          <tbody>
            <tr>
              <th>FirstName</th>
              <th>LastName</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
            {user?.map((value, id) => {
              return (
                <tr key={id}>
                  {console.log("bbb", value.roles)}
                  <td>{value.firstName}</td>
                  <td>{value.lastName}</td>
                  <td>{value.email}</td>
                  <td>
                    <button
                      className="btn btn-primary"
                      onClick={() => {
                        delUser(value.id);
                      }}
                    >
                      Delete
                    </button>
                    <button
                      className="btn btn-primary"
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
          <h2>Update</h2>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              dispatch(
                allActions.updateUserAction.updateUserData(
                  updateUser,
                  correctId
                )
              );
              setState(correctId);
            }}
          >
            <div className={styles.userbox}>
              <input
                type="text"
                name="firstName"
                onChange={changeHandler}
                value={updateUser.firstName}
              />
              <label>FirstName</label>
            </div>
            <div className={styles.userbox}>
              <input
                type="text"
                name="lastName"
                onChange={changeHandler}
                value={updateUser.lastName}
              />
              <label>LastName</label>
            </div>
            <div className={styles.userbox}>
              <input
                type="text"
                name="email"
                onChange={changeHandler}
                value={updateUser.email}
              />
              <label>Email</label>
            </div>
            <button type="submit">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GetUserFromAdmin;
