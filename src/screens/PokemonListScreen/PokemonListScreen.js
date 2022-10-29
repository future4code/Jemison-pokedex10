import React from 'react'
import Header from '../../components/Header/Header';
import PokemonCard from '../../components/PokemonCard/PokemonCard';
import { PokeListContainer } from '../PokemonListScreen/styled';
function PokemonListScreen() {
  return (
    <div>
      <Header />
      <PokeListContainer>
        <PokemonCard />
      </PokeListContainer>
    </div>
  )
}

export default PokemonListScreen;