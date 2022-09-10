import React from 'react'
import { useNavigate } from 'react-router-dom'

function DetailsPage() {

 const navigate = useNavigate();

 const goToLastPage=()=>{
  navigate(-1)
 }

  return (
    <div>
        <h1>Details Page</h1>
        <button onClick={goToLastPage}>Voltar</button>
        <button>Adicionar/Remover da pokedex</button>
    </div>
  )
}

export default DetailsPage