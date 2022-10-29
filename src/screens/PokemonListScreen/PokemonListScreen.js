import React from 'react'
import Header from '../../components/Header/Header';
import PokemonCard from '../../components/PokemonCard/PokemonCard';

function PokemonListScreen() {
  return (
    <div>
      <Header />
      <PokemonCard />
      <PokemonCard />
      <PokemonCard />
    </div>
  )
}

export default PokemonListScreen;