import React, {ReactElement} from 'react'
import {connect} from 'react-redux';
import {pokemonType} from './redux/actions/pokemonActionTypes'
import {getPokemons} from './redux/actions/pokemonActions';

interface appProps {
    loading: boolean;
    data?: pokemonType;
    fetchPokemon: (a: string) => void;
}

const App: React.FC<appProps> = <T extends appProps>(props: T):ReactElement => {
    return (
        <>
            <div>
                Hello JavaScript
                {
                    JSON.stringify(props?.data)
                }
            </div>
            <button type="submit" onClick={() => props.fetchPokemon('ivysaur')}>fetchPokemon</button>
        </>
    )
}

const mapStateToProps = (state: { pokemon: { loading: boolean; pokemon: pokemonType; }; }) => ({
    loading: state.pokemon.loading,
    data: state.pokemon.pokemon
});

const mapDispatchtoProps = (dispatch: typeof getPokemons) => ({
    fetchPokemon: (data: string) => dispatch(getPokemons(data))
});

export default connect(mapStateToProps, mapDispatchtoProps)(App);
