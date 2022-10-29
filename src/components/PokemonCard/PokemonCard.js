import React from 'react'
import { useNavigate } from 'react-router-dom';
import { ButtonsContainer, ImgContainer, PokeCardContainer, PokeImg } from '../PokemonCard/styled';
import { goToPokemonDetail } from '../../routes/coordinator';


function PokemonCard({ pokemon, isPokedex }) {

    const navigate = useNavigate();


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
                    <button>
                        {isPokedex ? "Remover da Pokedex" : "Adicionar à Pokedex"}
                    </button>
                    <button onClick={() => goToPokemonDetail(navigate, pokemon.name)}>Ver detalhes</button>
                </ButtonsContainer>
            </PokeCardContainer>
        </div>
    )
}

export default PokemonCard;