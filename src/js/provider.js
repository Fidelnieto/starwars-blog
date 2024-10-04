import React, { useReducer, useEffect } from "react";
import { Reducer } from "./reducer";

const initialContext = {
  characters: [],
  planets: [],
  vehicles: [],
  favorites: JSON.parse(localStorage.getItem("favorites")) || [], // Cargar favoritos desde el Local Storage
};

export const Context = React.createContext(initialContext);

export const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialContext);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites"));
    if (storedFavorites) {
      dispatch({ type: "LOAD_FAVORITES", payload: storedFavorites });
    }
  }, []);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};
