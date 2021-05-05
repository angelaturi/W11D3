import React from 'react';
import { Link } from "react-router-dom";

const PokemonIndexItem = ({pokemon}) => {
    return (
        <li>
            <Link to={`/pokemon/${this.props.pokemonId}`}>
                <img src={pokemon.imageUrl}/>
                <span>{pokemon.name}</span>
            </Link>
        </li>
    )
}
   
export default PokemonIndexItem;