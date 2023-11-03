import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";


import Home from "./pages/Home";
import About from "./pages/About";
import BakeryMenu from "./pages/BakeryMenu";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"  element={<Home />} />
        <Route path="/About"  element={<About />} />
        <Route path="/BakeryMenu"  element={<BakeryMenu />} />
        <Route path="/Contact"  element={<Contact />} />
        <Route path="/*"  element={<h2>  Error Page  </h2>} />

      </Routes>
    </BrowserRouter>
  );

}

export default App;