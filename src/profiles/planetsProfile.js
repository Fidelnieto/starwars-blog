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
        2: "https://lumiere-a.akamaihd.net/v1/images/alderaan-main_f5b676cf.jpeg?region=0%2C0%2C1280%2C720",
        3: "https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/06/image-1-2400x1200-562320997426.jpg",
        4: "https://static1.srcdn.com/wordpress/wp-content/uploads/2019/08/star-wars-empire-strikes-back-hoth-ion-canon-echo-base-Edited.jpg",
        5: "https://lumiere-a.akamaihd.net/v1/images/Dagobah_890df592.jpeg?region=0%2C80%2C1260%2C630",
        6: "https://static1.srcdn.com/wordpress/wp-content/uploads/2020/02/Bespin-Feature-Image-1.jpg",
        7: "https://lumiere-a.akamaihd.net/v1/images/databank_endor_01_169_68ba9bdc.jpeg?region=0%2C49%2C1560%2C780",
        8: "https://media.contentapi.ea.com/content/dam/walrus/images/2018/11/mapvista-theed-grid.jpg.adapt.crop191x100.628p.jpg",
        9: "https://images.theconversation.com/files/516919/original/file-20230322-984-capxez.jpeg?ixlib=rb-4.1.0&q=45&auto=format&w=754&fit=clip",
        10: "https://www.clarksvilleonline.com/wp-content/uploads/2016/12/NASAs-Space-Exploration-could-discover-planets-similar-to-ones-in-Star-Wars-Rogue-One-5.jpg",
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
