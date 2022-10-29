import React, { useContext } from 'react'
import Header from '../../components/Header/Header';
import PokemonCard from '../../components/PokemonCard/PokemonCard';
import { GlobalStateContext } from '../../global/GlobalStateContext';
import { PokeListContainer } from '../PokemonListScreen/styled';


function PokemonListScreen() {
  const { pokemons } = useContext(GlobalStateContext)
  return (
    <div>
      <Header />
      <PokeListContainer>
        {
          pokemons.map((pokemon) => {
            return <PokemonCard key={pokemon.name} pokemon={pokemon} />
          })
        }
      </PokeListContainer>
    </div>
  )
}

export default PokemonListScreen;