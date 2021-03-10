export const POKEMON_LOADING = "POKEMON_LOADING";
export const POKEMON_FAIL = "POKEMON_FAIL";
export const POKEMON_SUCCESS = "POKEMON_SUCCESS";

export type pokemonAbility = {
    ability: {
        name: string;
        url: string;
    }
}

export type pokemonSprite = {
    front_default: string;
};

export type pokemonStat = {
    base_stat: number;
    stat: {
        name: string;
        url: string;
    };
};

export type pokemonType = {
    abilities: pokemonAbility[];
    sprites: pokemonSprite;
    stats: pokemonStat[];
}

export interface pokemonLoading {
    type: typeof POKEMON_LOADING;
}

export interface pokemonFail {
    type: typeof POKEMON_FAIL;
}

export interface pokemonSuccess {
    type: typeof POKEMON_SUCCESS;
    payload: pokemonType;
}

export type PokemonDispatchTypes = pokemonLoading | pokemonSuccess | pokemonFail;