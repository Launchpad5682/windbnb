import { useState, createContext } from "react";

export const PlacesContext = createContext();

export const PlacesProvider = (props) => {
  const [selectedCity, setSelectedCity] = useState("Helsinki");
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [guests, setGuests] = useState("Add Guests");

  return (
    <PlacesContext.Provider
      value={{
        city: [selectedCity, setSelectedCity],
        adult: [adults, setAdults],
        child: [children, setChildren],
        guest: [guests, setGuests],
      }}
    >
      {props.children}
    </PlacesContext.Provider>
  );
};
