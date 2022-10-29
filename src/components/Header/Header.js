/* eslint-disable no-unreachable */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HeaderContainer, LeftHeaderButton, RightHeaderButton } from './styled';
import { goToPokedex } from '../../routes/coordinator'

// Recebendo as informações por props
function Header({ title, leftButtonFunction, showRightButton }) {

  const navigate = useNavigate()

  const leftButtonTitle = () => {
    switch (title) {
      case "Lista de Pokemons":
        return "Ir para Pokedex";
        break;
      case "Pokedex":
        return "Voltar para a lista de pokemons";
        break;
      default:
        return "Voltar"
        break;
    }
  };

  return (
    <HeaderContainer >
      <LeftHeaderButton onClick={leftButtonFunction}>
        {leftButtonTitle()}
      </LeftHeaderButton>
      <h1>{title}</h1>
      {/* Para só mostrar o botão da direita se a condição for verdadeira */}
      {
        showRightButton && (
          <RightHeaderButton onClick={() => goToPokedex(navigate)}>Ir para Pokedex</RightHeaderButton>
        )}
    </HeaderContainer>
  )
}

export default Header;