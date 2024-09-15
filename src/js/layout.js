import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./home";
import NotFound from "./notfound";
import CharacterProfile from "../profiles/characterProfile";
import PlanetsProfile from "../profiles/planetsProfile";

const Layout = () => {
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/character/:id" element={<CharacterProfile />} />
          <Route path="/planets/:id" element={<PlanetsProfile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Layout;
