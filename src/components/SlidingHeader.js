import React from "react";
import "../styles/components/SlidingHeader.css";
import Counter from "./Counter";

function SlidingHeader() {
  const cityList = ["Helsinki", "Turku", "Vaasa", "Oulu"];

  return (
    <div className="sliding-header">
      <form className="form-header-class">
        {" "}
        <input
          type="text"
          className="search-input-header"
          id="left-input-header"
          placeholder="Helsinki, Finland"
        />
        <input
          type="text"
          className="search-input-header"
          id="middle-input-head  <React.StrictMode>
          <App />
        </React.StrictMode>er"
          placeholder="Add Guests"
        />
        <button className="search-input-header" id="right-button-header">
          Search
        </button>
      </form>
      <div className="drop-downs">
        <div className="drop-down-div">
          {cityList.map((city) => {
            return (
              <div className="city-list">
                <img src="https://img.icons8.com/pastel-glyph/32/000000/shipping-location--v1.png" />
                <p>{city}</p>
              </div>
            );
          })}
        </div>
        <div className="drop-down-div">
          <Counter heading="Adults" subHeading="Ages 13 or above" />
          <Counter heading="Children" subHeading="Ages 2-12" />
        </div>
      </div>
    </div>
  );
}

export default SlidingHeader;
/*
{cityList.map((city) => {
            return (
              <div className="city-list">
                <p>{city}</p>
              </div>
            );
          })}*/
