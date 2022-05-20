import React, { useEffect, useState } from "react";
import PokemonListSection from "./PokemonListSection";
import PokemonInfoSection from "./PokemonInfoSection";
import pokemonLogo from "./imgs/pokemon-logo.svg"
import searchLogo from "./imgs/search-logo.png"
import Header from "./Header";




export default function App() {

    const [pokemonList, setPokemonList] = useState([]);
    const [pokemonData, setPokemonData] = useState({})
    const [pokemonInput, setPokemon] = useState("")

    //função para buscar dados na API

    async function getPokemonInfo() {
        const resp = await fetch(`https://pokeapi.co/api/v2/pokemon-form/${pokemonInput.toLocaleLowerCase()}`)
        const data = await resp.json()
        const arrayTypes = data.types.map(item => item.type.name)
        setPokemonData((prevPokemon) => {
            const { id, name } = data
            return prevPokemon = {
                id: id,
                img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
                name: name,
                types: arrayTypes
            }
        })

    }

    async function getPokemonList() {
        for (let i = 1; i <= 151; i++) {
            const resp = await fetch(`https://pokeapi.co/api/v2/pokemon-form/${i}`)
            const data = await resp.json();
            const arrayTypes = data.types.map(item => item.type.name)
            const { name, id } = data;
            const pokemonItem = {
                id: id,
                name: name,
                img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i}.svg`,
                types: arrayTypes
            }
            setPokemonList(prevPokemonList => {
                return prevPokemonList = [...prevPokemonList, pokemonItem]
            });
        }
    }


    useEffect(() => {
        getPokemonList();
    }, [])
    //useEffect
    useEffect(() => {
        getPokemonInfo();
    }, [pokemonInput])

    //função para sempre atualizar o estado
    function handleChange(e) {
        const { value } = e.target;
        setPokemon(prevPokemon => prevPokemon = value)
    }

    function getElementInfo(e) {
        const { id } = e.target
        const item = pokemonList.find(pokemon => pokemon.id == id);
        setPokemonData(prev => prev = {
            ...item,
            img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
        })
    }
    return (
        <div>
            <Header logo={pokemonLogo} searchLogo={searchLogo} pokemonInput={pokemonInput} handleChange={handleChange} pokemonList={pokemonList} setPokemonList={setPokemonList}
             />
            <PokemonListSection pokemonInput={pokemonInput} pokemonData={pokemonData} handleChange={handleChange} pokemonList={pokemonList} getElementInfo={(e) => getElementInfo(e)}
           />
        </div >

    )
}