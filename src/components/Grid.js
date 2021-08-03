import React from "react";
import Data from "../assets/stays.json";
import "../styles/components/Grid.css";

function GridImages() {
  let superHost = false;

  return (
    <div className="grid-area">
      {Data.map((data) => (
        <div className="image-box">
          <img src={data.photo} />
          <div className="image-footer">
            {data.superHost ? (
              <span className="superhost-span">SUPER HOST</span>
            ) : null}
            <span>
              {data.type}, {data.beds} beds
            </span>
            <span className="rating-span">{data.rating}</span>
            <p className="title-para">{data.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default GridImages;
