import React, { useContext } from "react";
import Data from "../assets/stays.json";
import { PlacesContext } from "../context/PlacesContext";
import "../styles/components/Grid.css";
import StayHeading from "../styles/components/StayHeading";

function GridImages() {
  const { city, adult, child } = useContext(PlacesContext);
  const [selectedCity] = city;
  const [adults] = adult;
  const [children] = child;
  let count = 0;
  let keyTag;
  return (
    <div>
      <StayHeading />
      <div className="grid-area">
        {Data.map((data) => {
          if (
            selectedCity === data.city &&
            adults + children <= data.maxGuests
          ) {
            count += 1;
            keyTag = `key-tag-${count}`;
            return (
              <div className="image-box" key={keyTag}>
                <img src={data.photo} alt="places" />
                <div className="image-footer">
                  {data.superHost ? (
                    <span className="superhost-span">SUPER HOST</span>
                  ) : null}
                  <span className="type-style">
                    {data.type}, {data.beds} beds
                  </span>
                  <span className="rating-span">⭐{data.rating}</span>
                  <p className="title-para">{data.title}</p>
                </div>
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
}

export default GridImages;
