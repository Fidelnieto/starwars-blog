import React, { useContext } from "react";
import { Context } from "../js/provider";
import CardPlanets from "./cardPlanets";

const CardGetterPlanets = () => {
  const { state } = useContext(Context);

  return (
    <div className=" d-flex col-8 overflow-auto mx-auto mt-4 ">
      <CardPlanets
        id={1}
        urlImage="https://concepto.de/wp-content/uploads/2018/09/desierto2-e1537800205712.jpg"
      />
      <CardPlanets
        id={2}
        urlImage="https://upload.wikimedia.org/wikipedia/en/5/5c/C-3PO_droid.png"
      />
    </div>
  );
};

export default CardGetterPlanets;
