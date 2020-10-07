import React from 'react';

export default function Card(props) {

    var { imgSrc, name, description, price } = props;

    return (
        <div class="card">
            <img src={imgSrc} />
            <h4>{name}</h4>
            <p class="description">{description}</p>
            <p>{price}</p>
        </div>
    );
}