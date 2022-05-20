import React from "react"

export default function PokemonInfoSection({pokemonData}){
    return(
        <section className="section-info">
            <h2>{pokemonData.name}</h2>
            <img style={{display: pokemonData.img ? 'block': 'none'}} className="imgPokemonData" src={pokemonData.img}></img>
            <div>{pokemonData.id ? pokemonData.types.map(item => <p>{item}</p>): ''}</div>
        </section>
    )
}