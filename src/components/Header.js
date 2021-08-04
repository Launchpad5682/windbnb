import React, { useContext } from "react";
import "../styles/components/Header.css";
import windBnBIcon from "../assets/logo.svg";
import SlidingHeader from "./SlidingHeader";
import Overlay from "./Overlay";
import { SlidingHeaderContext } from "../context/SlidingHeaderContext";
import { PlacesContext } from "../context/PlacesContext";

function Header() {
  const { slideDownHeader, setSlideDownHeader } =
    useContext(SlidingHeaderContext);

  const { city } = useContext(PlacesContext);
  const [selectedCity] = city;
  function clickHandler() {
    setSlideDownHeader(true);
  }

  return (
    <div>
      {slideDownHeader ? <Overlay /> : null}
      {slideDownHeader ? <SlidingHeader /> : null}
      <header className="header-class">
        <img src={windBnBIcon} className="svg-logo" alt="windBnB Logo" />
        <form className="form-class" onClick={clickHandler}>
          {" "}
          <input
            type="text"
            className="search-input"
            id="left-input"
            placeholder={selectedCity}
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
