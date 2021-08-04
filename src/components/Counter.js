import React, { useContext } from "react";
import { PlacesContext } from "../context/PlacesContext";
import "../styles/components/Counter.css";

function Counter(props) {
  const type = props.type;
  const { adult, child } = useContext(PlacesContext);
  const [adults, setAdults] = adult;
  const [children, setChildren] = child;
  let count;
  function incrementCounter() {
    if (type === "adults") {
      count = adults + 1;
      setAdults(count);
    }
    if (type === "children") {
      count = children + 1;
      setChildren(count);
    }
  }

  function decrementCounter() {
    if (type === "adults") {
      count = adults - 1;
      if (count >= 0) setAdults(count);
    }
    if (type === "children") {
      count = children - 1;
      if (count >= 0) setChildren(count);
    }
  }

  return (
    <div className="counter-div">
      <h4>{props.heading}</h4>
      <p>{props.subHeading}</p>
      <div className="counter-container">
        <button className="counter-btn" onClick={decrementCounter}>
          -
        </button>
        {type === "adults" ? <p>{adults}</p> : <p>{children}</p>}
        <button className="counter-btn" onClick={incrementCounter}>
          +
        </button>
      </div>
    </div>
  );
}

export default Counter;
