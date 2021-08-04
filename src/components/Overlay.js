import React, { useContext } from "react";
import { SlidingHeaderContext } from "../context/SlidingHeaderContext";
import "../styles/components/Overlay.css";

function Overlay(props) {
  const { slideDownHeader, setSlideDownHeader } =
    useContext(SlidingHeaderContext);

  function offOverlay() {
    setSlideDownHeader(false);
  }

  return <div className="overlay" onClick={offOverlay}></div>;
}

export default Overlay;
