import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import {
        receiveAllPokemon,
        requestAllPokemon,
        requestOnePokemon
        } from './actions/pokemon_actions'
import {fetchAllPokemon} from './util/api_util'
import { selectAllPokemon, selectPokemonMovesNames, selectPokemonItems} from './reducers/selectors'

document.addEventListener("DOMContentLoaded", () => {
  const rootEl = document.getElementById("root");
  const store = configureStore();
  window.store = store;
  window.getState = store.getState;
  window.dipatch = store.dispatch;
  window.selectAllPokemon = selectAllPokemon;
  window.selectPokemonMovesNames = selectPokemonMovesNames;
  window.selectPokemonItems = selectPokemonItems;
  window.fetchAllPokemon = fetchAllPokemon;
  window.receiveAllPokemon = receiveAllPokemon;
  window.requestAllPokemon = requestAllPokemon;
  window.requestOnePokemon = requestOnePokemon;
  ReactDOM.render(<Root store={store} />, rootEl)
})