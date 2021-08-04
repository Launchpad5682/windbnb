import React, { useContext } from "react";
import { PlacesContext } from "../context/PlacesContext";
import "../styles/components/Counter.css";

function Counter(props) {
  const type = props.type;
  const { adult, child } = useContext(PlacesContext);
  const [adults, setAdults] = adult;
  const [children, setChildren] = child;

  console.log(adults);
  function incrementCounter() {
    if (type === "adults") {
      setAdults(adults + 1);
    }
    if (type === "children") {
      setChildren(children + 1);
    }
    console.log(adults);
  }
  function decrementCounter() {
    if (type === "adults") {
      if (adults - 1 >= 0) setAdults(adults - 1);
    }
    if (type === "children") {
      if (children - 1 >= 0) setChildren(children - 1);
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
