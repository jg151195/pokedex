import Filters from "./Filters"

export default function Header({ logo, searchLogo, handleChange, pokemonInput, pokemonList, setPokemonList}) {
    return (
        <header>
            <img className="logo" src={logo}></img>
            <div className="group">
                <img className="icon" src={searchLogo}/>
                <input placeholder="Search !" onChange={handleChange} type="text" value={pokemonInput}></input>
            </div>
            <Filters pokemonList={pokemonList} setPokemonList={setPokemonList}/>
        </header>

    )
}