import React from 'react'
import { ButtonsContainer, ImgContainer, PokeCardContainer, PokeImg } from '../PokemonCard/styled';

function PokemonCard({ pokemon }) {

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
                    <button>Adicionar a Pokédex</button>
                    <button>Ver detalhes</button>
                </ButtonsContainer>
            </PokeCardContainer>
        </div>
    )
}

export default PokemonCard;