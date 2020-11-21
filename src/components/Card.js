import React from 'react';

export default function Card(props) {
    var {option, increment, decrement, selected} = props;
    var {select} = option;

    return (
        <div 
            className={select > 0 ? "card, select" : "card"}>
            <img onClick={() => selected(option)} src={option.imgSrc} />
            <h4>{option.name}</h4>
            <p className="description">{option.description}</p>
            <p>{option.price}</p>
            <Amount increment={increment} decrement={decrement} option={option} />
        </div>
    );
}

function Amount(props) {
    var { increment, decrement, option} = props;
    
    return (
        <span className={option.select > 0 ? "cont" : "hidden"}>
            <button onClick={() => decrement(option)}>-</button>
            <span>{option.select}</span>
            <button onClick={() => increment(option)}>+</button>
        </span>
  );
}