export const selectAllPokemon = (state) => {
  return Object.values(state.entities.pokemon)
}
  
export const selectPokemonMovesNames = (state) => {
  // debugger
  const moves = Object.values(state.entities.moves).map (move => {
    return move.name
  })

  return moves; 
}

export const selectAllItems = (state) => {
  return Object.values(state.entities.items)
}