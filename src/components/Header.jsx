import Filters from "./Filters"

export default function Header({ logo, searchLogo, handleChange, pokemonInput, pokemonList, setPokemonList ,setFilteredList}) {
    return (
        <header>
            <img className="logo" src={logo}></img>
            <div className="group">
                <img className="icon" src={searchLogo}/>
                <input placeholder="Search !" onChange={handleChange} type="text" value={pokemonInput}></input>
            </div>
            <Filters setFilteredList={setFilteredList} pokemonList={pokemonList} setPokemonList={setPokemonList}/>
        </header>

    )
}