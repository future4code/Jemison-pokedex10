import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import { goToPokemonList } from '../../routes/coordinator';

function PokedexScreen() {

  const navigate = useNavigate()
  return (
    <>
      <Header
        title={"Pokedex"}
        leftButtonFunction={() => goToPokemonList(navigate)}
      />
    </>
  )
}

export default PokedexScreen;