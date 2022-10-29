import React, { useEffect, useContext, useState } from 'react'
import { useParams } from 'react-router-dom';
import { GlobalStateContext } from '../../global/GlobalStateContext';
import Header from '../../components/Header/Header'
import { ImagesContainer, ImgWrapper, MovesContainer, PokeInfosContainer, StatsContainer, TitleContainer, TypeAndMovesContainer, TypesContainer } from './styled';

function PokemonDetailScreen() {

  //Pegar o pokemon por params (nome do poke na url) 
  const { name } = useParams()
  // Para procurar no GlobalState o pokemon e pegar os dados necessários
  const { pokemons } = useContext(GlobalStateContext);
  // Estado local para guardar o pokemon
  const [selectedPokemon, setSelectedPokemon] = useState()

  useEffect(() => {
    const currentPokemon = pokemons.find((item) => {
      return item.name === name
    })
    setSelectedPokemon(currentPokemon)
  }, [])

  return (
    <div>
      <Header />
      <PokeInfosContainer>
        <ImagesContainer>
          <ImgWrapper src={selectedPokemon && selectedPokemon.sprites.front_default} />
          <ImgWrapper src={selectedPokemon && selectedPokemon.sprites.back_default} />
        </ImagesContainer>
        <StatsContainer>
          <TitleContainer>Poderes</TitleContainer>
          { }
        </StatsContainer>
        <TypeAndMovesContainer>
          <TypesContainer>
            { }
          </TypesContainer>
          <MovesContainer>
            <TitleContainer>Principais Ataques</TitleContainer>
            { }
          </MovesContainer>
        </TypeAndMovesContainer>
      </PokeInfosContainer>
    </div>
  )
}

export default PokemonDetailScreen;