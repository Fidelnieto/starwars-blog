import React, { useContext } from "react";
import CardVehicles from "./cardVehicles";

const CardGetterVehicles = () => {
  return (
    <div className=" d-flex col-8 overflow-auto mx-auto mt- ">
      <CardVehicles
        id={4}
        urlImage="https://upload.wikimedia.org/wikipedia/en/a/aa/Star_Wars_Sandcrawler.png"
      />
      <CardVehicles
        id={7}
        urlImage="https://lumiere-a.akamaihd.net/v1/images/E4D_IA_1136_6b8704fa.jpeg?region=237%2C0%2C1456%2C819"
      />
      <CardVehicles
        id={6}
        urlImage="https://www.rebelscum.com/potf2/potf2t16skyhopperloose-m.jpg"
      />
      <CardVehicles
        id={8}
        urlImage="https://cdn.rebrickable.com/media/thumbs/mocs/moc-167755.jpg/1000x800.jpg"
      />
      <CardVehicles
        id={14}
        urlImage="https://lumiere-a.akamaihd.net/v1/images/snowspeeder_ef2f9334.jpeg?region=0%2C337%2C2048%2C1028"
      />
      <CardVehicles
        id={18}
        urlImage="https://lumiere-a.akamaihd.net/v1/images/AT-AT_89d0105f.jpeg?region=214%2C19%2C1270%2C716"
      />
      <CardVehicles
        id={16}
        urlImage="https://www.brickvault.toys/cdn/shop/products/Bomber_main_1024x1024.jpg?v=1524840388"
      />
      <CardVehicles
        id={19}
        urlImage="https://m.media-amazon.com/images/I/61f86Ozv8IL._AC_UF894,1000_QL80_.jpg"
      />
      <CardVehicles
        id={20}
        urlImage="https://cdna.artstation.com/p/assets/images/images/009/354/520/large/jay-machado-cloudcar-0003.jpg?1518502674"
      />
      <CardVehicles
        id={24}
        urlImage="https://www.hallmarkornaments.com/assets/images/hallmark-2023-Jabbas-Barge-3799QXI7109.jpg"
      />
    </div>
  );
};

export default CardGetterVehicles;
