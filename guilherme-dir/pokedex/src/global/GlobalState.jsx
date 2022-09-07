import { GlobalContext } from "./GlobalContext";
import React from "react";
import { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../constants/url";

function GlobalState(props) {
  const [pokemons, setPokemons] = useState([]);
  const [pokemonsInPokedex, setPokemonsInPodekex] = useState([]);


  const displayPokemons = axios
    .get(BASE_URL)
    .then((response) => {
      setPokemons(response.data.results);
    })
    .catch((error) => {
      console.log(error);
    });

  const addToPokedex = (pokemons) => {
    const pokeChoice = [...pokemonsInPokedex, pokemons];
    setPokemonsInPodekex(pokeChoice);
    console.log(pokemons);
  };

  return (
    <GlobalContext.Provider
      value={{
        displayPokemons,
        pokemons,
        setPokemons,
        addToPokedex,
        pokemonsInPokedex,
        setPokemonsInPodekex,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
}

export default GlobalState;
