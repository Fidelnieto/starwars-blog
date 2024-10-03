import React, { useContext } from "react";
import { Context } from "../js/provider";
import { Link } from "react-router-dom";
import NavBar from "../js/navbar";

const FavoritesList = () => {
  const { state } = useContext(Context);

  if (state.favorites.length === 0) {
    return (
      <div className="text-center fs-1">
        {" "}
        <NavBar /> No items in favorites yet.
      </div>
    );
  }

  return (
    <div className="container'fluid">
      <NavBar />

      <h1 className="text-center">Your Favorite Characters</h1>
      <div className="row">
        {state.favorites.map((item) => (
          <div key={item.uid} className="col-4">
            <div className="card">
              <img
                src={item.urlImage}
                className="card-img-top"
                alt={item.name}
                style={{ maxHeight: "200px", objectFit: "contain" }}
              />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <Link to={`/character/${item.uid}`} className="btn btn-primary">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoritesList;
