import React, { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../constants/url";
import { HomeHeader, PokeCardName } from "./styles";

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
      <HomeHeader>
        <button>Ver minha Pokedex</button>
        <h1> Home Page PokedeX </h1>
      </HomeHeader>
      {pokemons.map((pokemon) => (
        <div key={pokemon.id}>
          <PokeCardName>{pokemon.name}</PokeCardName>   
        </div>
      ))}
    </div>
  )
}

export default Home;
