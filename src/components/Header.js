import React from "react";
import "../styles/components/Header.css";
import windBnBIcon from "../assets/logo.svg";

function Header() {
  return (
    <header className="header-class">
      <img src={windBnBIcon} className="svg-logo" alt="windBnB Logo" />
      <form className="form-class">
        {" "}
        <input
          type="text"
          className="search-input"
          id="left-input"
          placeholder="Helsinki, Finland"
        />
        <input
          type="text"
          className="search-input"
          id="middle-input"
          placeholder="Add Guests"
        />
        <button className="search-input" id="right-button"></button>
      </form>
    </header>
  );
}

export default Header;
