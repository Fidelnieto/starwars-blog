import React, { useContext, useEffect } from "react";
import { Context } from "./provider";
import { REDUCER_ACTION_TYPES } from "./constants";

const Home = () => {
  const { state, dispatch } = useContext(Context);

  const fetchForCharacters = async () => {
    try {
      const response = await fetch("https://www.swapi.tech/api/people", {
        method: "GET",
      });
      const translatedResponse = await response.json();

      dispatch({
        type: REDUCER_ACTION_TYPES.ADD,
        payload: {
          key: "characters",
          data: translatedResponse.results,
        },
      });

      console.log(translatedResponse);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchForPlanets = async () => {
    try {
      const response = await fetch("https://www.swapi.tech/api/planets", {
        method: "GET",
      });
      const translatedResponse = await response.json();

      dispatch({
        type: REDUCER_ACTION_TYPES.ADD,
        payload: {
          key: "planets",
          data: translatedResponse.results,
        },
      });

      console.log(translatedResponse);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchForVehicles = async () => {
    try {
      const response = await fetch("https://www.swapi.tech/api/vehicles", {
        method: "GET",
      });
      const translatedResponse = await response.json();

      dispatch({
        type: REDUCER_ACTION_TYPES.ADD,
        payload: {
          key: "vehicles",
          data: translatedResponse.results,
        },
      });

      console.log(translatedResponse);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchForCharacters();
    fetchForPlanets();
    fetchForVehicles();
  }, []);

  return (
    <div className="">
      <h1>Characters</h1>
      {state.characters.find((item) => item.uid === "1")?.name}
      <h1>Planets</h1>
      {state.planets.find((item) => item.uid === "1")?.name}
      <h1>Vehicles</h1>
      {state.vehicles.find((item) => item.uid === "4")?.name}
    </div>
  );
};

export default Home;
