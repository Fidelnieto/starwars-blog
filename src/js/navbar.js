import React from "react";

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
        <button className="btn btn-primary me-5">Favorites</button>
      </div>
    </nav>
  );
};

export default NavBar;
