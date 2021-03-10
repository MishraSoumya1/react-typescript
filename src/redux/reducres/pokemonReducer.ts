import {POKEMON_LOADING, POKEMON_FAIL, POKEMON_SUCCESS, pokemonType, PokemonDispatchTypes} from '../actions/pokemonActionTypes';

interface DefaultStateI {
    loading: boolean;
    pokemon?: pokemonType;
};

const initialState: DefaultStateI = {
    loading: false,
};

const pokemonReducer = (state: DefaultStateI = initialState, action: PokemonDispatchTypes) : DefaultStateI => {
    switch (action.type) {
        case POKEMON_LOADING: return {
            ...state,
            loading: true,
        }
        case POKEMON_FAIL: return {
            ...state,
            loading: false,
        }
        case POKEMON_SUCCESS: return {
            ...state,
            loading: false,
            pokemon: action.payload,
        }
        default: return state;
    }
}

export default pokemonReducer;