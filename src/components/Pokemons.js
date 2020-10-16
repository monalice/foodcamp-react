import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Pokemon from './Pokemon';

export default function Pokemons() {
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        const req = axios.get("https://pokeapi.co/api/v2/pokemon?limit=893");
        req.then(response => {
            setPokemons(response.data.results);
        });
    }, []);

    return (
        <>
            <ul className="container">
                {pokemons.map((pokemon, index) => <Pokemon pokemon={pokemon} key={index} />)}
            </ul>
        </>
    );
}