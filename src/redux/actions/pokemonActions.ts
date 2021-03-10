import {Dispatch} from 'redux'
import axios from 'axios';
import {POKEMON_LOADING, POKEMON_FAIL, POKEMON_SUCCESS, PokemonDispatchTypes} from './pokemonActionTypes';

export const getPokemons: Function = (pokemon: string) => async(dispatch: Dispatch<PokemonDispatchTypes>) => {
    dispatch({type: POKEMON_LOADING});
    try {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
        dispatch({type: POKEMON_SUCCESS, payload: res.data});
    } catch (e) {
        dispatch({type: POKEMON_FAIL});
    }
}