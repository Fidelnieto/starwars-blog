import React, { useEffect, useState } from "react";

const CardCharacter = (props) => {
  const [details, setDetails] = useState(null);
  const { id, urlImage } = props;

  const fetchCharacterDetails = async (id) => {
    try {
      const response = await fetch(`https://www.swapi.tech/api/people/${id}`);
      const data = await response.json();
      setDetails(data.result.properties);
    } catch (error) {
      console.error("Error fetching character details:", error);
    }
  };

  useEffect(() => {
    fetchCharacterDetails(id);
  }, [id]);

  if (!details) {
    return <div>Loading...</div>;
  }

  return (
    <div
      className="inline-block card col-3"
      style={{
        width: "400px",
        margin: "10px",
      }}
    >
      <img
        src={urlImage}
        className="card-img-top"
        alt="..."
        style={{
          maxWidth: "400px",
          maxHeight: "200px",
          objectFit: "contain",
        }}
      />
      <div className="card-body">
        <h5 className="card-title">{details.name}</h5>
        <p className="card-text">
          Gender: {details.gender}
          <br />
          Hair-Color: {details.hair_color}
          <br />
          Eye-color: {details.eye_color}
        </p>

        <div className="d-flex justify-content-between">
          <a href={`/character/${id}`} className="btn btn-primary">
            Learn More
          </a>
          <a href="#" className="btn btn-primary">
            ❤️
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardCharacter;
