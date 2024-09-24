import React, { useEffect, useState } from "react";
import NavBar from "../js/navbar";
import { useParams } from "react-router";

const VehiclesProfile = () => {
  const [detailVehicles, setDetailVehicles] = useState(null);
  const [urlImage, setUrlImage] = useState("");

  const { id } = useParams();

  const fetchVehiclesDetails = async (id) => {
    try {
      const response = await fetch(`https://www.swapi.tech/api/vehicles/${id}`);
      const translatedResponse = await response.json();

      setDetailVehicles(translatedResponse.result.properties);

      const imageUrls = {
        4: "https://upload.wikimedia.org/wikipedia/en/a/aa/Star_Wars_Sandcrawler.png",
        7: "https://lumiere-a.akamaihd.net/v1/images/E4D_IA_1136_6b8704fa.jpeg?region=237%2C0%2C1456%2C819",
        6: "https://www.rebelscum.com/potf2/potf2t16skyhopperloose-m.jpg",
        8: "https://cdn.rebrickable.com/media/thumbs/mocs/moc-167755.jpg/1000x800.jpg",
        14: "https://lumiere-a.akamaihd.net/v1/images/snowspeeder_ef2f9334.jpeg?region=0%2C337%2C2048%2C1028",
        18: "https://lumiere-a.akamaihd.net/v1/images/AT-AT_89d0105f.jpeg?region=214%2C19%2C1270%2C716",
        16: "https://www.brickvault.toys/cdn/shop/products/Bomber_main_1024x1024.jpg?v=1524840388",
        19: "https://m.media-amazon.com/images/I/61f86Ozv8IL._AC_UF894,1000_QL80_.jpg",
        20: "https://cdna.artstation.com/p/assets/images/images/009/354/520/large/jay-machado-cloudcar-0003.jpg?1518502674",
        24: "https://www.hallmarkornaments.com/assets/images/hallmark-2023-Jabbas-Barge-3799QXI7109.jpg",
      };

      setUrlImage(imageUrls[id]);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchVehiclesDetails(id);
  }, [id]);

  if (!detailVehicles) {
    return <div className="text-center fs-1">Loading...</div>;
  }

  return (
    <div>
      <NavBar />

      <div className="row container d-flex justify-content-between mx-auto">
        <div className="col-5 ">
          <img
            src={urlImage}
            width="700px"
            height="500px"
            style={{
              objectFit: "contain",
              margin: "20px",
            }}
          />
        </div>
        <div
          className="col-5 text-center"
          style={{
            margin: "20px",
          }}
        >
          <h1 className="fs-1"> {detailVehicles.name}</h1>
          <p className="fs-4">
            {detailVehicles.name} is a fictional character in the Star Wars
            franchise. He was introduced in the original film trilogy and also
            appears in the sequel trilogy. Raised as a moisture farmer on the
            planet Tatooine, Luke joins the Rebel Alliance and becomes a pivotal
            figure in the struggle against the Galactic Empire. He trains as a
            Jedi under Obi-Wan Kenobi and Yoda, and eventually confronts his
            father, the Sith Lord Darth Vader. Years later, Luke trains his
            nephew Ben Solo and mentors the scavenger Rey. Luke is the twin
            brother of Leia Organa.
          </p>
        </div>
      </div>
      <span className="d-flex col-9 mt-3 border border-danger container"></span>
      <div className="d-flex container col-10 mt-3">
        <span className="col-2 text-danger fs-3 text-center">
          <strong>Name</strong> <br />
          {detailVehicles.name}
        </span>
        <span className="col-2 text-danger fs-3 text-center">
          <strong>Model</strong> <br />
          {detailVehicles.model}
        </span>
        <span className="col-2 text-danger fs-3 text-center">
          <strong>Manufacturer</strong> <br />
          {detailVehicles.manufacturer}
        </span>
        <span className="col-2 text-danger fs-3 text-center">
          <strong>Capacity</strong> <br />
          {detailVehicles.cargo_capacity}
        </span>
        <span className="col-2 text-danger fs-3 text-center">
          <strong>Max Speed</strong> <br />
          {detailVehicles.max_atmosphering_speed}
        </span>
        <span className="col-2 text-danger fs-3 text-center">
          <strong>Cost</strong> <br />
          {detailVehicles.cost_in_credits}
        </span>
      </div>
    </div>
  );
};

export default VehiclesProfile;
