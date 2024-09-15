import React, { useContext, useEffect, useState } from "react";
import CardCharacter from "./cardCharacter";
import { Context } from "../js/provider";

const CardGetterCharacter = () => {
  const { state } = useContext(Context);

  return (
    <div className=" d-flex col-8 overflow-auto mx-auto mt-4 ">
      <CardCharacter
        id={1}
        urlImage="https://nsabers.com/cdn/shop/articles/opolar_A_super_realistic_scene_of_Luke_Skywalker_holding_his__e21e8637-47d5-413c-b53d-e78c8a275e90_1.png?v=1718860845"
      />
      <CardCharacter
        id={2}
        urlImage="https://upload.wikimedia.org/wikipedia/en/5/5c/C-3PO_droid.png"
      />
      <CardCharacter
        id={3}
        urlImage="https://m.media-amazon.com/images/I/61srwGulapL._AC_UF894,1000_QL80_.jpg"
      />
      <CardCharacter
        id={4}
        urlImage="https://lumiere-a.akamaihd.net/v1/images/darth-vader-main_4560aff7.jpeg?region=71%2C0%2C1139%2C854"
      />
      <CardCharacter
        id={5}
        urlImage="https://pngimg.com/d/raccoon_PNG16977.png"
      />
      <CardCharacter
        id={6}
        urlImage="https://pngimg.com/d/raccoon_PNG16977.png"
      />
      <CardCharacter
        id={7}
        urlImage="https://pngimg.com/d/raccoon_PNG16977.png"
      />
      <CardCharacter
        id={8}
        urlImage="https://pngimg.com/d/raccoon_PNG16977.png"
      />
      <CardCharacter
        id={9}
        urlImage="https://pngimg.com/d/raccoon_PNG16977.png"
      />
      <CardCharacter
        id={10}
        urlImage="https://pngimg.com/d/raccoon_PNG16977.png"
      />
    </div>
  );
};

export default CardGetterCharacter;
