import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { ButtonsContainer, ImgContainer, PokeCardContainer, PokeImg } from '../PokemonCard/styled';
import { goToPokemonDetail } from '../../routes/coordinator';
import { GlobalStateContext } from '../../global/GlobalStateContext';


function PokemonCard({ pokemon, isPokedex }) {

    const navigate = useNavigate();

    // Para pegar dados do estado global
    const { pokemons, setPokemons, pokedex, setPokedex } = useContext(GlobalStateContext)

    const addToPokedex = () => {
        const pokeIndex = pokemons.findIndex((item) => item.name === pokemon.name)
        const newPokemonsList = [...pokemons]
        newPokemonsList.splice(pokeIndex, 1)
        const newPokedexList = [...pokedex, pokemon]

        setPokedex(newPokedexList);
        setPokemons(newPokemonsList)
    };

    const removeFromPokedex = () => {
        const pokeIndex = pokemons.findIndex((item) => item.name === pokemon.name)
        const newPokedexList = [...pokedex]
        newPokedexList.splice(pokeIndex, 1)
        const newPokemonsList = [...pokemons, pokemon]

        setPokedex(newPokedexList);
        setPokemons(newPokemonsList)
    }

    return (
        <div>
            <PokeCardContainer>
                <ImgContainer>
                    <PokeImg
                        src={pokemon.sprites.front_default}
                        alt={pokemon.name}
                    />
                </ImgContainer>
                <ButtonsContainer>
                    <button onClick={isPokedex ? removeFromPokedex : addToPokedex}>
                        {isPokedex ? "Remover da Pokedex" : "Adicionar à Pokedex"}
                    </button>
                    <button onClick={() => goToPokemonDetail(navigate, pokemon.name)}>Ver detalhes</button>
                </ButtonsContainer>
            </PokeCardContainer>
        </div>
    )
}

export default PokemonCard;