import React, { useReducer } from "react";
import { Reducer } from "./reducer";

const initialContext = {
  characters: [],
  planets: [],
  vehicles: [],
  favorites: [],
};

export const Context = React.createContext(initialContext);

export const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialContext);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};
