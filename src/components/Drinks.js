import React from 'react';
import Card from './Card.js';

export default function Drinks() {
    return (
        <section className="drinks">
            <Card 
                imgSrc="images/sucogoiaba.png"
                name="Suco de Goiaba"
                description="Copo 500ml"
                price="R$ 5,00"
            />
            <Card 
                imgSrc="images/sucolaranja.jpg"
                name="Suco de Laranja"
                description="Copo 500ml"
                price="R$ 4,50"
            />
            <Card 
                imgSrc="images/sucomaracuja.jpeg"
                name="Suco de Maracujá"
                description="Copo 500ml"
                price="R$ 5,00"
            />
            <Card 
                imgSrc="images/sucomorango.jpg"
                name="Suco de Morango"
                description="Copo 500ml"
                price="R$ 6,50"
            />
        </section>
    );
}