import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Gallery from "./Gallery";
import About from "./About";
import Contact from "./Contact";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default AllRoutes;
