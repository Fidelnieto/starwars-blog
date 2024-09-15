import React, { useContext, useEffect } from "react";
import { Context } from "./provider";
import { REDUCER_ACTION_TYPES } from "./constants";
import CardGetterCharacter from "../components/cardGetterCharacter";
import CardGetterPlanets from "../components/cardGetterPlanets";
import CardGetterVehicles from "../components/cardGetterVehicles";
import NavBar from "./navbar";

const Home = () => {
  const { dispatch } = useContext(Context);

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
      <NavBar />

      <h1 className="text-danger">Characters</h1>
      {/* {state.characters.find((item) => item.uid === "1")?.name} */}
      <CardGetterCharacter />

      <h1 className="text-danger">Planets</h1>
      {/* {state.planets.find((item) => item.uid === "1")?.name} */}
      <CardGetterPlanets />

      <h1 className="text-danger">Vehicles</h1>
      {/* {state.vehicles.find((item) => item.uid === "4")?.name} */}
      <CardGetterVehicles />
    </div>
  );
};

export default Home;
