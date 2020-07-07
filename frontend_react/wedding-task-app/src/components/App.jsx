import React from "react";
import "../stylesheets/App.css";
import { Route, Switch } from "react-router-dom";
import Tasks from "./Tasks";
import NoMatch from "./NoMatch";
import Nav from "../shared/Nav";
import CreateTask from "./CreateTask";
import EditTask from "./EditTask";
import Task from "./Task";
import Header from "./Header";
import ProtectedRoute from "./ProtectedRoute";
import Login from "./Login";
import SignUp from "./SignUp";

class App extends React.Component {
  render() {
    return (
      <>
        <Nav />
        <Header />
        <Switch>
          <ProtectedRoute exact path="/tasks/:id/edit" component={EditTask} />
          <ProtectedRoute exact path="/tasks/create" component={CreateTask} />
          <ProtectedRoute exact path="/tasks" component={Tasks} />
          <ProtectedRoute exact path="/tasks/:id" component={Task} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/sign-up" component={SignUp} />
          <Route component={NoMatch} />
        </Switch>
      </>
    );
  }
}

export default App;
