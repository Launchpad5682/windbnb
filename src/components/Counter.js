import React from "react";
import "../styles/components/Counter.css";

function Counter(props) {
  const counter = 0;
  return (
    <div className="counter-div">
      <h4>{props.heading}</h4>
      <p>{props.subHeading}</p>
      <div className="counter-container">
        <button className="counter-btn">-</button>
        {counter}
        <button className="counter-btn">+</button>
      </div>
    </div>
  );
}

export default Counter;
