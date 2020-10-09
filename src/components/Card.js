import React from 'react';

export default function Card(props) {

    return (
        <div 
            className={props.option.select ? "card, select" : "card"} 
            onClick={() => props.selection(props.option)}>
            <img src={props.option.imgSrc} />
            <h4>{props.option.name}</h4>
            <p className="description">{props.option.description}</p>
            <p>{props.option.price}</p>
        </div>
    );
}

/*function Amount() {
    var [value, setValue] =  useState(0);
    return (
        <span>
            <button onClick={() => setValue(value + 1)} >+</button>
            <span>{value}</span>
            <button onClick={() => setValue(value - 1)}>-</button>
        </span>
  );
}

function amount() {}
*/