import React, { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../constants/url";
import { HomeHeader, PokeCardName } from "./styles";
import { goToPokedex } from '../../router/coordinator';
import { useNavigate } from "react-router-dom";

function Home({ pokemon }) {
  const [pokemons, setPokemons] = useState([]);

  const navigate = useNavigate();

  axios
    .get(BASE_URL)
    .then((response) => {
      setPokemons(response.data.results);
    })
    .catch((error) => {
      console.log(error);
    });

  const addToPokedex = (event) => {

  }


  return (
    <div>
      <HomeHeader>
        <button onClick={() => goToPokedex(navigate)}>Ver minha POKEDEX</button>
        <h1> Home Page PokedeX </h1>
      </HomeHeader>
      {pokemons.map((pokemon) => (
        <PokeCardName key={pokemon.id}>
          {pokemon.name}

          <button onClick={() => addToPokedex(pokemon)} >Adicionar</button>
          <button>Detalhes</button>
        </PokeCardName>
      ))}
    </div>
  )
}

export default Home;
