import PokemonDetail from './pokemon_detail';
import {connect} from 'react-redux';
import {requestOnePokemon} from './../../actions/pokemon_actions';
import { selectPokemonMovesNames, selectAllItems } from '../../reducers/selectors';

const mstp = (state, ownProps) => {
    const currPoke = state.entities.pokemon[ownProps.match.params.pokemonId]

    return {
        pokemon: currPoke,        
        moves: selectPokemonMovesNames(state),
        items: selectAllItems(state)
    }
}

const mdtp = (dispatch) => {
    return {
        requestOnePokemon: (pokemon) => dispatch(requestOnePokemon(pokemon))
    }
}


export default connect(mstp, mdtp)(PokemonDetail)