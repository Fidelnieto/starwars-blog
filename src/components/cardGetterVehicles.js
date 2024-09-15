import React, { useContext } from "react";
import CardVehicles from "./cardVehicles";
import { Context } from "../js/provider";

const CardGetterVehicles = () => {
  const { state } = useContext(Context);

  return (
    <div className=" d-flex col-8 overflow-auto mx-auto mt- ">
      <CardVehicles
        id={4}
        urlImage="https://pngimg.com/d/raccoon_PNG16977.png"
      />
    </div>
  );
};

export default CardGetterVehicles;
