import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from '../../global/GlobalContext';
import { goToHomePage } from '../../router/coordinator';
import { PokedexHeader } from './styles';


function Pokedex() {

    const navigate = useNavigate();
    const context = useContext(GlobalContext)
    
    return (
        <>
        <PokedexHeader>
            <button onClick={() => goToHomePage(navigate)}>Voltar para a Home</button>
            <h1>Pokedex</h1>
        </PokedexHeader>
        <span>
            {context.pokemonsInPokedex.map((pokemon)=>(
                <div key={pokemon.id}>
                    {pokemon.name}
                </div>
            ))}
        </span>
        </>

    )
}

export default Pokedex