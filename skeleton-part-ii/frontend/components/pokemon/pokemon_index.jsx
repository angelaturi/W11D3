import React from 'react';
import PokemonIndexItem from './pokemon_index_item';


class PokemonIndex extends React.Component{
  constructor(props){
  super(props)
  }
  
  componentDidMount(){
  this.props.requestAllPokemon()
  }
  
  render(){
    const {pokemon} = this.props
    const pokemonItems = pokemon.map(poke => (
      <PokemonIndexItem key={poke.id} pokemon={poke} />
    ));
    
    // And inside the render:
    // <section className="pokedex">
    //   <ul>{pokemonItems}</ul>
    // </section>;

    return (
    <section className="pokedex">
      <ul>{pokemonItems}
      {/* {this.props.pokemon.map((poke) => (
        <li className="pokemon-index-item">
          <span>{poke.id}</span>
          <img src={poke.imageUrl}/>
          <span>{poke.name}</span>
        </li>
      ))} */}
      </ul>
    </section>
    )
  }
  }
  
  
  
  export default PokemonIndex;