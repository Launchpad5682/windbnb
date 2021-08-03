import React from "react";
import "../styles/components/Overlay.css";

function Overlay(props) {
  return <div className="overlay" onClick={() => !props.onOverlay}></div>;
}

export default Overlay;