import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav
      className="navbar"
      style={{
        backgroundColor: "lightgray",
      }}
    >
      <div className="container d-flex justify-content-between">
        <a className="navbar-brand" href="/">
          <img
            src="https://pngimg.com/uploads/star_wars_logo/small/star_wars_logo_PNG34.png"
            alt="Logo"
            width="100px"
            height="100px"
            className="d-inline-block ms-5"
          />
        </a>
        <div className="d-flex">
          <Link to="/favorites" className="btn btn-outline-primary">
            Favorites
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
