import React, { useReducer, useEffect } from "react";
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

  useEffect(() => {
    const savedFavorites = localStorage.getItem("favorites");
    if (savedFavorites) {
      dispatch({
        type: "LOAD_FAVORITES",
        payload: JSON.parse(savedFavorites),
      });
    }
  }, []);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};
