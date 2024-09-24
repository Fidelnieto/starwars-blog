import React, { useContext, useEffect, useState } from "react";
import CardCharacter from "./cardCharacter";

const CardGetterCharacter = () => {
  const id = [1, 2, 3, 4, 5, 6, 7, 8, 9];
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
        urlImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyzJ8jRjPXOEYiWhXHwZxT8aJXc9DS-WtV-Q&s"
      />
      <CardCharacter
        id={6}
        urlImage="https://www.hollywoodreporter.com/wp-content/uploads/2023/05/Joel-Edgerton-Obi-Wan-Kenobi-Publicity-H-2023.jpg"
      />
      <CardCharacter
        id={7}
        urlImage="https://www.figurerealm.com/userimages/characterprofiles/2500/2466-2-58cbe33f4de09.jpg"
      />
      <CardCharacter
        id={8}
        urlImage="https://lumiere-a.akamaihd.net/v1/images/r5-d4_main_image_7d5f078e.jpeg?region=374%2C0%2C1186%2C666"
      />
      <CardCharacter
        id={9}
        urlImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj8om-Zr0cX4-E2AYGXfgMzdKVfFLF_zbvLw&s"
      />
      <CardCharacter
        id={10}
        urlImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDLQWrixX_GQdaHGhLmY6XakCorjvBJ40hBw&s"
      />
    </div>
  );
};

export default CardGetterCharacter;
