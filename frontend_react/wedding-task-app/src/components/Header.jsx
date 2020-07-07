import React from "react";
import header from "../images/topheader.jpg";
import "../stylesheets/Header.css";

class Header extends React.Component {
  render() {
    return (
      <div className="Header">
        <img src={header} alt="header" />
      </div>
    );
  }
}

export default Header;
