import { useState, createContext } from "react";

export const SlidingHeaderContext = createContext();

export const SlidingHeaderProvider = (props) => {
  const [slideDownHeader, setSlideDownHeader] = useState(true);

  return (
    <SlidingHeaderContext.Provider
      value={{ slideDownHeader, setSlideDownHeader }}
    >
      {props.children}
    </SlidingHeaderContext.Provider>
  );
};
