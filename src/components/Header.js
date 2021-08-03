import React, { useState } from "react";
import "../styles/components/Header.css";
import windBnBIcon from "../assets/logo.svg";
import SlidingHeader from "./SlidingHeader";
import Overlay from "./Overlay";

function Header() {
  const [slideDownHeader, setSlideDownHeader] = useState(true);
  const onOverlay = true;
  function clickHandler() {
    console.log("Hello form");
    // setSlideDownHeader(!slideDownHeader);
  }

  return (
    <div>
      {onOverlay ? <Overlay onClick={onOverlay} /> : null}
      {slideDownHeader ? <SlidingHeader /> : null}
      <header className="header-class">
        <img src={windBnBIcon} className="svg-logo" alt="windBnB Logo" />
        <form className="form-class" onClick={clickHandler}>
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
    </div>
  );
}

export default Header;
