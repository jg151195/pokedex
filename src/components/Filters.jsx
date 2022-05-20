import React from "react";
export default function Filters({pokemonList,setPokemonList}){

    function filter(e){ 
        const {value} = e.target;
        const newList = pokemonList.filter(item => item.types[0] === value ||  item.types[1] === value);
        console.log(newList)
        setPokemonList(prev =>{
            return prev = newList;
        });
    }

    return(
        <div className="filters-container">
            <button id="refresh-button" onClick={() => window.location.reload()}>Refresh Filter !</button>
            <button className="filter-button" style={{backgroundColor: '#a8a878'}} value='normal' onClick={filter}>Normal</button>
            <button className="filter-button" style={{backgroundColor: '#f57070d7'}} value='fire' onClick={filter}>Fire</button>
            <button className="filter-button" style={{backgroundColor: '#6890f0'}} value='water' onClick={filter}>Water</button>
            <button className="filter-button" style={{backgroundColor: '#78c850'}} value='grass' onClick={filter}>Grass</button>
            <button className="filter-button" style={{backgroundColor: '#c03028'}} value='fighting' onClick={filter}>Fighting</button>
            <button className="filter-button" style={{backgroundColor: '#a040a0'}} value='poison' onClick={filter}>Poison</button>
            <button className="filter-button" style={{backgroundColor: 'white'}} value='flying' onClick={filter}>Flying</button>
            <button className="filter-button" style={{backgroundColor: '#f8d030'}} value='electric' onClick={filter}>Electric</button>
            <button className="filter-button" style={{backgroundColor: '#e0c068'}} value='ground' onClick={filter}>Ground</button>
            <button className="filter-button" style={{backgroundColor: '#b8a038'}} value='rock' onClick={filter}>Rock</button>
            <button className="filter-button" style={{backgroundColor: '#f85888'}} value='psychic' onClick={filter}>Psychic</button>
            <button className="filter-button" style={{backgroundColor: '#98d8d8'}} value='ice' onClick={filter}>Ice</button>
            <button className="filter-button" style={{backgroundColor: '#a8b820'}} value='bug' onClick={filter}>Bug</button>
            <button className="filter-button" style={{backgroundColor: '#705898'}} value='ghost' onClick={filter}>Ghost</button>
            <button className="filter-button" style={{backgroundColor: 'grey'}} value='steel' onClick={filter}>Steel</button>
            <button className="filter-button" style={{backgroundColor: '#7038f8'}} value='dragon' onClick={filter}>Dragon</button>
            <button className="filter-button" style={{backgroundColor: '#ee99ac'}} value='fairy' onClick={filter}>Fairy</button>
        </div>
    )
}