import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Pokedex from "../pages/Pokedex";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="pokedex" element={<Pokedex />} />
      </Routes>
    </BrowserRouter>
  )
}