import React, { useContext, useState } from "react";
import "../styles/components/SlidingHeader.css";
import Counter from "./Counter";
import { PlacesContext } from "../context/PlacesContext";

function SlidingHeader() {
  const cityList = ["Helsinki", "Turku", "Vaasa", "Oulu"];
  const { city } = useContext(PlacesContext);
  const [selectedCity, setSelectedCity] = city;
  const [cities, setCities] = useState(false);
  const [counters, setCounters] = useState(false);

  function renderCitiesList() {
    setCities(true);
    setCounters(false);
  }

  function renderCounters() {
    setCounters(true);
    setCities(false);
  }

  function chooseCity(event) {
    console.log(event.target.textContent);
    setSelectedCity(event.target.textContent);
    setCities(false);
  }

  return (
    <div className="sliding-header">
      <form className="form-header-class">
        {" "}
        <input
          type="text"
          className="search-input-header"
          id="left-input-header"
          placeholder={selectedCity}
          onClick={renderCitiesList}
        />
        <input
          type="text"
          className="search-input-header"
          id="middle-input-head"
          placeholder="Add Guests"
          onClick={renderCounters}
        />
        <button className="search-input-header" id="right-button-header">
          Search
        </button>
      </form>
      <div className="drop-downs">
        {cities ? (
          <div className="drop-down-div left-down-div">
            {cityList.map((city) => {
              return (
                <div className="city-list" onClick={chooseCity} key={city}>
                  <img
                    src="https://img.icons8.com/pastel-glyph/32/000000/shipping-location--v1.png"
                    alt="location icon"
                  />
                  <p>{city}</p>
                </div>
              );
            })}
          </div>
        ) : null}
        {counters ? (
          <div className="drop-down-div right-down-div">
            <Counter heading="Adults" subHeading="Ages 13 or above" />
            <Counter heading="Children" subHeading="Ages 2-12" />
          </div>
        ) : null}
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

/* */
