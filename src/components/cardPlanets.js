import React, { useEffect, useState } from "react";

const CardPlanets = (props) => {
  const [details, setDetails] = useState(null);
  const { id, urlImage } = props;

  const fetchPlanetsDetails = async (id) => {
    try {
      const response = await fetch(`https://www.swapi.tech/api/planets/${id}`);
      const data = await response.json();
      setDetails(data.result.properties);
    } catch (error) {
      console.error("Error fetching character details:", error);
    }
  };

  useEffect(() => {
    fetchPlanetsDetails(id);
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
          objectFit: "cover",
        }}
      />
      <div className="card-body">
        <h5 className="card-title">{details.name}</h5>
        <p className="card-text">
          Population: {details.population}
          <br />
          Terrain: {details.terrain}
          <br />
        </p>

        <div className="d-flex justify-content-between">
          <a href={`/planets/${id}`} className="btn btn-primary">
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

export default CardPlanets;
