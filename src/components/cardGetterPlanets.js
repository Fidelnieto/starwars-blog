import React, { useContext } from "react";

import CardPlanets from "./cardPlanets";

const CardGetterPlanets = () => {
  return (
    <div className=" d-flex col-8 overflow-auto mx-auto mt-4 ">
      <CardPlanets
        id={1}
        urlImage="https://concepto.de/wp-content/uploads/2018/09/desierto2-e1537800205712.jpg"
      />
      <CardPlanets
        id={2}
        urlImage="https://lumiere-a.akamaihd.net/v1/images/alderaan-main_f5b676cf.jpeg?region=0%2C0%2C1280%2C720"
      />
      <CardPlanets
        id={3}
        urlImage="https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/06/image-1-2400x1200-562320997426.jpg"
      />
      <CardPlanets
        id={4}
        urlImage="https://static1.srcdn.com/wordpress/wp-content/uploads/2019/08/star-wars-empire-strikes-back-hoth-ion-canon-echo-base-Edited.jpg"
      />
      <CardPlanets
        id={5}
        urlImage="https://lumiere-a.akamaihd.net/v1/images/Dagobah_890df592.jpeg?region=0%2C80%2C1260%2C630"
      />
      <CardPlanets
        id={6}
        urlImage="https://static1.srcdn.com/wordpress/wp-content/uploads/2020/02/Bespin-Feature-Image-1.jpg"
      />
      <CardPlanets
        id={7}
        urlImage="https://lumiere-a.akamaihd.net/v1/images/databank_endor_01_169_68ba9bdc.jpeg?region=0%2C49%2C1560%2C780"
      />
      <CardPlanets
        id={8}
        urlImage="https://media.contentapi.ea.com/content/dam/walrus/images/2018/11/mapvista-theed-grid.jpg.adapt.crop191x100.628p.jpg"
      />
      <CardPlanets
        id={9}
        urlImage="https://images.theconversation.com/files/516919/original/file-20230322-984-capxez.jpeg?ixlib=rb-4.1.0&q=45&auto=format&w=754&fit=clip"
      />
      <CardPlanets
        id={10}
        urlImage="https://www.clarksvilleonline.com/wp-content/uploads/2016/12/NASAs-Space-Exploration-could-discover-planets-similar-to-ones-in-Star-Wars-Rogue-One-5.jpg"
      />
    </div>
  );
};

export default CardGetterPlanets;
