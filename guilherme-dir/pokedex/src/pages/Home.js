import React, { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../constants/url";

function Home() {
  const [pokemons, setPokemons] = useState([]);

  axios
    .get(BASE_URL)
    .then((response) => {
      setPokemons(response.data.results);
    })
    .catch((error) => {
      console.log(error);
    });

  return (
    <div>
      <h1> Home Page PokedeX </h1>
      {pokemons.map((pokemon) => (
        <div key={pokemon.id}>
          <span>{pokemon.name}</span>
        </div>
      ))}
    </div>
  )
}

export default Home;
