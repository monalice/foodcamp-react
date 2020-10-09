import React from 'react';
import Card from './Card';

export default function Section(props) {

    return (
        <>
            <h3 className="title">{props.section.title}</h3>

            <section>
            {props.section.options.map(option => 
                <Card option={option} selection={props.selection} />)}
            </section>
        </>
    ); 
}


