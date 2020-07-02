import React from "react";
import "../stylesheets/App.css";
import { Route, Switch } from "react-router-dom";
import Tasks from "./Tasks";
import NoMatch from "./NoMatch";
import Nav from "../shared/Nav";
import CreateTask from "./CreateTask";
import EditTask from "./EditTask";
import Task from "./Task";
// import ProtectedRoute from "./ProtectedRoute";
// import Login from "./Login";
// import SignUp from "./Signup";

class App extends React.Component {
  render() {
    return (
      <>
        <Nav />
        <Switch>
          <Route exact path="/tasks/:id/edit" component={EditTask} />
          <Route exact path="/tasks" component={Tasks} />
          <Route exact path="/tasks/create" component={CreateTask} />
          {/* <Route exact path="/tasks/:id" component={Tasks} /> */}
          <Route exact path="/tasks/:id" component={Task} />
          {/* <Route exact path="/login" component={Login} />
          <Route exact path="/sign-up" component={SignUp} /> */}
          <Route component={NoMatch} />
        </Switch>
      </>
    );
  }
}

export default App;
