import React from "react";
import { Link, useHistory } from "react-router-dom";
import "../stylesheets/Nav.css";

const Nav = () => {
  const history = useHistory();

  return (
    <nav className="nav">
      <Link to="/">
        <button className="Button">Home</button>
      </Link>
      <Link to="/tasks">
        <button className="Button">Tasks</button>
      </Link>
      <Link to="/tasks/create">
        <button className="Button">Create A Task</button>
      </Link>
      <Link to="/login">
        <button className="Button">Login</button>
      </Link>
      <Link to="/sign-up">
        <button className="Button">Sign Up</button>
      </Link>
      <span
        onClick={() => {
          localStorage.removeItem("token");
          history.pushState("/login");
        }}
      >
        <button className="Button">Logout</button>
      </span>
    </nav>
  );
};

export default Nav;
