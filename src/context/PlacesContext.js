import { useState, createContext } from "react";

export const PlacesContext = createContext();

export const PlacesProvider = (props) => {
  const [selectedCity, setSelectedCity] = useState("Helsinki");

  return (
    <PlacesContext.Provider value={{ selectedCity, setSelectedCity }}>
      {props.children}
    </PlacesContext.Provider>
  );
};
