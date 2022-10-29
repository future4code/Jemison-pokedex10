import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HeaderContainer, LeftHeaderButton, RightHeaderButton } from './styled';
import { goToPokedex } from '../../routes/coordinator'

// Recebendo as informações por props
function Header({ title, leftButtonFunction, showRightBotton }) {

  const navigate = useNavigate()

  return (
    <HeaderContainer>
      <LeftHeaderButton>Botão</LeftHeaderButton>
      <h1>{title}</h1>
      {/* Para só mostrar o botão da direita se a condição for verdadeira */}
      {
        showRightBotton &&
        <RightHeaderButton onClick={() => goToPokedex(navigate)}>Ir para Pokedex</RightHeaderButton>

      }
    </HeaderContainer>
  )
}

export default Header;