import "./App.css";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar/Navbar";
import Register from "./Components/Auth/Register";
import Login from "./Components/Auth/Login";
import Manager from "./Components/Manager/Manager";
import GetUserFromManager from "./Components/getUserFromManager/GetUserFromManager";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";
import ProtectedRouteManager from "./Components/ProtectedRoute/ProtectedRouteManager";
import ProtectedRouteUser from "./Components/ProtectedRoute/ProtectedRouteUser";
import User from "./Components/User/User";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Admin from "./Components/Admin/Admin";
import GetUserFromAdmin from "./Components/getUserFromAdmin/GetUserFromAdmin";
import ProtectedRouteManagerUser from "./Components/ProtectedRoute/ProtectedRouteManagerUser";
import ProtectedRouteAdminUser from "./Components/ProtectedRoute/ProtectedRouteAdminUser";
import ProtectedRouteUserLog from "./Components/ProtectedRoute/ProtectedRouteUserLog";
import GetUserLog from "./Components/User/GetUserLog";
function App() {
  const props = useSelector((state) => state.loginReducer);
  console.log(props.ab);
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Navbar />
            <Home />
          </Route>
          <Route path="/signup">
            <Navbar />
            <Register />
          </Route>
          <Route path="/login">
            <Navbar />
            <Login />
          </Route>
          {/* <Route path="/manager">
            <Navbar />
            <Manager />
          </Route> */}
          {/* <Route component={GetUserFromManager} path="/manager/user" /> */}
          {/* <Route component={GetUserFromAdmin} path="/admin/user" /> */}
          {/* <Route>No Page Found</Route> */}
          <ProtectedRouteManagerUser
            exact
            path="/manager/user"
            component={GetUserFromManager}
            isAuth={props.isLoggedIn}
            role={props.isLoggedIn ? props.user.user.roles[0].name : null}
          />
          <ProtectedRouteAdminUser
            exact
            path="/admin/user"
            component={GetUserFromAdmin}
            isAuth={props.isLoggedIn}
            role={props.isLoggedIn ? props.user.user.roles[0].name : null}
          />
          <ProtectedRouteUserLog
            exact
            path="/user/getlog"
            component={GetUserLog}
            isAuth={props.isLoggedIn}
            role={props.isLoggedIn ? props.user.user.roles[0].name : null}
          />
          <ProtectedRoute
            path="/admin"
            component={Admin}
            isAuth={props.isLoggedIn}
            role={props.isLoggedIn ? props.user.user.roles[0].name : null}
          />

          <ProtectedRouteManager
            path="/manager"
            component={Manager}
            isAuth={props.isLoggedIn}
            role={props.isLoggedIn ? props.user.user.roles[0].name : null}
          />
          <ProtectedRouteUser
            exact
            path="/user"
            component={User}
            isAuth={props.isLoggedIn}
            role={props.isLoggedIn ? props.user.user.roles[0].name : null}
          />
        </Switch>
      </Router>
    </>
  );
}

export default App;
