import React from "react";
import { Link } from "react-router-dom";

class Nav extends React.Component {
  render() {
    return (
      <nav>
        <Link to="/">Home</Link>
        <Link to="/tasks">Tasks</Link>
        <Link to="/tasks/create">Create A Task</Link>
        {/* <Link to="/login">Login</Link> */}
        {/* <Link to="/sign-up">Sign Up</Link> */}
      </nav>
    );
  }
}

export default Nav;
