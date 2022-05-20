export default function ListElement({id,name,img,types, getElementInfo}) {

    const background = {
        fire: types[0]==="fire" ? '#f57070d7' : '',
        water: types[0]==="water" ? '#6890f0' : '',
        fairy: types[0]==="fairy" ? '#ee99ac' : '',
        electric: types[0]==="electric" ? '#f8d030' : '',
        grass: types[0]==="grass" ? '#78c850' : '',
        rock: types[0]==="rock" ? '#b8a038' : '',
        fighting: types[0]==="fighting" ? '#c03028' : '',
        flying: types[0]==="flying" ? 'black' : '',
        ground: types[0]==="ground" ? '#e0c068' : '',
        psychic: types[0]==="psychic" ? '#f85888' : '',
        ice: types[0]==="ice" ? '#98d8d8' : '',
        bug: types[0]==="bug" ? '#a8b820' : '',
        ghost: types[0]==="ghost" ? '#7038f8' : '',
        dragon: types[0]==="dragon" ? '#7038f8' : '',
        steel: types[0]==="steel" ? '#grey' : '',
        poison: types[0]==="poison" ? '#a040a0' : ''
    }

    const {fire,bug,grass,rock,fighting,flying,fairy,steel,poison,dragon,ghost,ice,ground,electric,water,psychic} = background

    return (
        <button style={{backgroundColor: fire || water || fairy || electric || grass || rock || fighting || flying || ground || psychic || ice || bug ||
        ghost || dragon || steel || poison}} id={id} name={name} className="item-list" value={types[0]}  onClick={(e) => getElementInfo(e)}>
            <img className="img-list" src={img} />
            ID: {id} Name: {name}
        </button>
    )
}