import React, { useEffect, useState } from "react";
import NavBar from "../js/navbar";
import { useParams } from "react-router";

const CharacterProfile = () => {
  const [detailCharacter, setDetailCharacter] = useState(null);
  const [urlImage, setUrlImage] = useState("");

  const { id } = useParams();

  const fetchCharacterDetails = async (id) => {
    try {
      const response = await fetch(`https://www.swapi.tech/api/people/${id}`);
      const translatedResponse = await response.json();

      setDetailCharacter(translatedResponse.result.properties);

      const imageUrls = {
        1: "https://nsabers.com/cdn/shop/articles/opolar_A_super_realistic_scene_of_Luke_Skywalker_holding_his__e21e8637-47d5-413c-b53d-e78c8a275e90_1.png?v=1718860845",
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
    fetchCharacterDetails(id);
  }, [id]);

  if (!detailCharacter) {
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
          <h1 className="fs-1"> {detailCharacter.name}</h1>
          <p className="fs-4">
            {detailCharacter.name} is a fictional character in the Star Wars
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
          {detailCharacter.name}
        </span>
        <span className="col-2 text-danger fs-3 text-center">
          <strong>Birth Year</strong> <br />
          {detailCharacter.birth_year}
        </span>
        <span className="col-2 text-danger fs-3 text-center">
          <strong>Gender</strong> <br />
          {detailCharacter.gender}
        </span>
        <span className="col-2 text-danger fs-3 text-center">
          <strong>Height</strong> <br />
          {detailCharacter.height}
        </span>
        <span className="col-2 text-danger fs-3 text-center">
          <strong>Skin Color</strong> <br />
          {detailCharacter.skin_color}
        </span>
        <span className="col-2 text-danger fs-3 text-center">
          <strong>Eye Color</strong> <br />
          {detailCharacter.eye_color}
        </span>
      </div>
    </div>
  );
};

export default CharacterProfile;
