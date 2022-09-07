import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Pokedex from "../pages/Pokedex/Pokedex";
import Details from "../pages/Details/Details"

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="pokedex" element={<Pokedex />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </BrowserRouter>
  )
}