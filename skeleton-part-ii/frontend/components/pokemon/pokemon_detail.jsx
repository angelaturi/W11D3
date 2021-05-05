import React from 'react';
import Item from './../components/pokemon_items/item';

class PokemonDetail extends React.Component{
    constructor(props){
        super(props);
    }
    
    render(){
        const {pokemon, moves, items} = this.props;
        if (!pokemon) {
            return null;
        }
        return(
            <section className="pokemon-detail">
                <figure>
                    <img src={pokemon.imageUrl}/>
                </figure>
                <ul>
                    <li><h2>{pokemon.name}</h2></li>
                    <li>Type: {pokemon.pokeType}</li>
                    <li>Attack: {pokemon.attack}</li>
                    <li>Defense: {pokemon.defense}</li>
                    <li>Moves: {moves.join(", ")}</li>
                </ul>
                <section className="pokemon-toys">
                    <h3>Items</h3>
                    <ul>
                        {items.map(
                            item => (<Item key={item.name} item={item}/>)
                        )}
                    </ul>
                </section>
            </section>
        )
    }
}

export default PokemonDetail;