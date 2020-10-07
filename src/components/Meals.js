import React from 'react'
import Card from './Card.js';

export default function Meals() {
    return (
        <section className="meals">
            <Card 
                imgSrc="images/sanAtum.jpeg"
                name="Sanduíche natural de Atum"
                description="Pão integral, pasta de atum e cenoura, tomate e alface."
                price="R$ 6,50"
            />
            <Card 
                imgSrc="images/sanMilho.jpeg"
                name="Sanduíche natural de Milho"
                description="Pão integral, cmilho, maionese, alface e rúcula"
                price="R$ 5,90"
            />
            <Card 
                imgSrc="images/sanRepolho.jpeg"
                name="Sanduíche Intgral de Repolho"
                description="Pão australiano integral, repolho, alface, tomate, agrião"
                price="R$ 10,70"
            />
            <Card 
                imgSrc="images/sanRicotaCenoura.jpeg"
                name="Sanduíche natural de Cenoura e Ricota"
                description="Pão de forma, ricota e cenoura"
                price="R$ 6,50"
            />
        </section>
    );
}