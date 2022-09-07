import React, { useContext } from "react";
import { HomeHeader, PokeCardName } from "./styles";
import { goToPokedex, goToDetailPage } from "../../router/coordinator";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../global/GlobalContext";

function Home() {

  const navigate = useNavigate();
  const context = useContext(GlobalContext)

  return (
    <div>
      <HomeHeader>
        <button onClick={() => goToPokedex(navigate)}>Ver minha POKEDEX</button>
        <h1> Home Page PokedeX </h1>
        

      </HomeHeader>
      {context.pokemons.map((pokemon) => (
        <PokeCardName
          key={pokemon.id}
          pokemon={pokemon}
          addToPokedex={context.addToPokedex}
        >
          {pokemon.name}

          <button onClick={() => context.addToPokedex(pokemon)}>Adicionar</button>
          <button>Detalhes</button>
          <button onClick={() => goToDetailPage(navigate)}>Ver Detalhes Pokemon</button>
        </PokeCardName>
      ))}
    </div>
  );
}

export default Home;
