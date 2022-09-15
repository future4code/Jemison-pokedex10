import axios from "axios";
import React, { useEffect, useState } from "react"
import { useLocation } from "react-router-dom";
import { BASE_URL } from "../../constants/url";

function Details () {

    const search = useLocation().search;
    const [pokeID, setPokeID] = useState({})
 

    // const pokemonDetails = (name) => {
    //     axios
    //         .get(`${BASE_URL}/${name}`)
    //         .then((response)=>{
    //             setPokeID(response.data)
    //     })
    //         .catch((error)=>{
    //             console.log(error)
    //         })
    // }

    useEffect(() => {
        const actualId = new URLSearchParams(search).get("name");
        console.log(actualId)
        // pokemonDetails(actualId)
    }, [])



    return (
        <>
            <h1>Olá!</h1>
            {pokeID.name}
        </>
    )
}

export default Details