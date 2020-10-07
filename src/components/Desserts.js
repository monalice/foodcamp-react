import React from 'react';
import Card from './Card.js';

export default function Desserts() {
    return (
        <section className="desserts">
            <Card 
                imgSrc="images/saladafruta.jpeg"
                name="Salada de frutas"
                description="Manga, maçã, morango, abacaxi, kiwi, banana. Granola opcional"
                price="R$ 6,00"
            />
            <Card 
                imgSrc="images/sorveteamora.jpeg"
                name="Sorvete de amora"
                description="Sorvete caseiro de amora, 200ml"
                price="R$ 5,00"
            />
            <Card 
                imgSrc="images/sorvetemanga.jpeg"
                name="Sorvete de manga"
                description="Sorvete caseiro de manga, 200ml"
                price="R$ 5,00"
            />
            <Card 
                imgSrc="images/espetinhofruta.jpeg"
                name="Espetinho de frutas"
                description="Blueberry, mrango, maçã, kiwi, cereja e banana"
                price="R$ 3,00"
            />
        </section>
    );
}