import React, { useEffect, useState } from "react";
import NavBar from "../js/navbar";
import { useParams } from "react-router";

const PlanetsProfile = () => {
  const [detailPlanet, setDetailPlanet] = useState(null);
  const [urlImage, setUrlImage] = useState("");

  const { id } = useParams();

  const fetchPlanetDetails = async (id) => {
    try {
      const response = await fetch(`https://www.swapi.tech/api/planets/${id}`);
      const translatedResponse = await response.json();

      setDetailPlanet(translatedResponse.result.properties);

      const imageUrls = {
        1: "https://concepto.de/wp-content/uploads/2018/09/desierto2-e1537800205712.jpg",
        2: "https://upload.wikimedia.org/wikipedia/en/5/5c/C-3PO_droid.png",
        3: "https://m.media-amazon.com/images/I/61srwGulapL._AC_UF894,1000_QL80_.jpg",
        4: "https://lumiere-a.akamaihd.net/v1/images/darth-vader-main_4560aff7.jpeg?region=71%2C0%2C1139%2C854",
      };

      setUrlImage(imageUrls[id]);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchPlanetDetails(id);
  }, [id]);

  if (!detailPlanet) {
    return <div>Loading...</div>;
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
          <h1 className="fs-1"> {detailPlanet.name}</h1>
          <p className="fs-4">
            {detailPlanet.name} is a fictional character in the Star Wars
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
          {detailPlanet.name}
        </span>
        <span className="col-2 text-danger fs-3 text-center">
          <strong>Population</strong> <br />
          {detailPlanet.population}
        </span>
        <span className="col-2 text-danger fs-3 text-center">
          <strong>Terrain</strong> <br />
          {detailPlanet.terrain}
        </span>
        <span className="col-2 text-danger fs-3 text-center">
          <strong>Diameter</strong> <br />
          {detailPlanet.diameter}
        </span>
        <span className="col-2 text-danger fs-3 text-center">
          <strong>Gravity</strong> <br />
          {detailPlanet.gravity}
        </span>
        <span className="col-2 text-danger fs-3 text-center">
          <strong>Climate</strong> <br />
          {detailPlanet.climate}
        </span>
      </div>
    </div>
  );
};

export default PlanetsProfile;
