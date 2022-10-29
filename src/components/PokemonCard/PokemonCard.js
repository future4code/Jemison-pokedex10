import React from 'react'
import { ButtonsContainer, ImgContainer, PokeCardContainer} from '../PokemonCard/styled';

function PokemonCard() {
    return (
        <div>
            <PokeCardContainer>
                <ImgContainer>
                  
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