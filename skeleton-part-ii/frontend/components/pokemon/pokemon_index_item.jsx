import React from 'react';
import { Link } from "react-router-dom";

// class PokemonIndexItem extends React.Component{
//     constructor(props){
//         super(props)
//     }
//     render() {
// // const PokemonIndexItem = ({pokemon}) => {
//     return (
//         <li>
//             <Link to={`/pokemon/${this.props.pokemon.id}`}>
//                 <img src={this.props.pokemon.imageUrl}/>
//                 <span>{this.props.pokemon.name}</span>
//             </Link>
//         </li>
//      )
//     }
// }

const PokemonIndexItem = ({pokemon}) => {
    // debugger
    return (
        <li key={pokemon.id}>
            <Link to={`/pokemon/${pokemon.id}`}>
                <img src={pokemon.imageUrl}/>
                <span>{pokemon.name}</span>
            </Link>
        </li>
     )
}

   
export default PokemonIndexItem;