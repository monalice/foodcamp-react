import React, { useState } from 'react';

export default function Card(props) {

    var { imgSrc, name, description, price } = props;
    var [classCard, setClass] =  useState(false);

    return (
        <div 
            className={classCard ? "card, select" : "card"} 
            onClick={() => setClass(!classCard)}>
            <img src={imgSrc} />
            <h4>{name}</h4>
            <p className="description">{description}</p>
            <p>{price}</p>
        </div>
    );
}

/*function Amount() {
    var [value, setValue] =  useState(0);
    return (
        <span className="cell">
            <button className="plus" onClick={() => setValue(value + 1)} >+</button>
            <span className="value">{value}</span>
            <button className="minus" onClick={() => setValue(value - 1)}>-</button>
        </span>
  );
}

function amount() {
}*/