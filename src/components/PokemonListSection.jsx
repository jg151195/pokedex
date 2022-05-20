import React from "react";
import ListElement from "./ListElement";

export default function PokemonListSection({ pokemonInput, pokemonData, pokemonList, getElementInfo}) {

    const list = pokemonList.map(({ id, name, img, types },index) => {
        return <ListElement key={index} id={id} name={name} img={img} types={types}  getElementInfo={(e)=>getElementInfo(e)} />
    })

    return (
        <section className="section-list">
            {
                pokemonData.id ?
                <div className="pokemon-info">
                    <h2>{pokemonData.name.toUpperCase()}</h2>
                    <img src={pokemonData.img}></img>
                    <label>{pokemonData.types[0].toUpperCase()}</label>
                    <label>{pokemonData.types[1] ? pokemonData.types[1].toUpperCase():""}</label>  
                </div> :
                <div>{pokemonInput === "" ? 
                <div className="list-all-pokemons">
                    {list.length === 0 ? "Not found ! Refresh filter !": list}
                </div> : "Searching..."} </div>
            }
        </section>
    )
}