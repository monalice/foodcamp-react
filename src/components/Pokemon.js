import React from 'react';
import {Link} from 'react-router-dom';

export default function Pokemon(props) {
    
    const { pokemon } = props;
    const { name } = pokemon;

    const pathUrl = pokemon.url;
    const paths = pathUrl.split("/");
    const id = paths[6];

    return (
        <>
            {
                pokemon
                ? <li className="box">
                    <Link to={`/pokemon/:${id}`}>
                        <img className="card" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} />
                        <h2> { name } </h2>
                        <h3> #{id} </h3>
                    </Link>
                </li>
                : <p className="loading">Carregando imagem...</p>
            }
        </>
    );
}