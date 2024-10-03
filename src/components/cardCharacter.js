import React, { useContext, useEffect, useState } from "react";
import { Context } from "../js/provider";

const CardCharacter = (props) => {
  const [details, setDetails] = useState(null);
  const { id, urlImage } = props;
  const { state, dispatch } = useContext(Context);

  const fetchCharacterDetails = async (id) => {
    try {
      const response = await fetch(`https://www.swapi.tech/api/people/${id}`);
      const data = await response.json();
      setDetails(data.result.properties);
    } catch (error) {
      console.error("Error fetching character details:", error);
    }
  };

  const toggleFavorite = () => {
    const isFavorite = state.favorites.some((fav) => fav.uid === id);

    if (isFavorite) {
      dispatch({ type: "REMOVE_FAVORITE", payload: { uid: id } });
    } else {
      dispatch({
        type: "ADD_FAVORITE",
        payload: { uid: id, name: details.name, urlImage },
      });
    }
  };

  useEffect(() => {
    fetchCharacterDetails(id);
  }, [id]);

  if (!details) {
    return <div className="text-center fs-1">Loading...</div>;
  }

  const isFavorite = state.favorites.some((fav) => fav.uid === id);

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
          <button onClick={toggleFavorite} className="btn btn-primary">
            {isFavorite ? "❤️ Remove" : "❤️ Add"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardCharacter;
