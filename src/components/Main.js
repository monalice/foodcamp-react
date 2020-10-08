import React from 'react';
import Title from './Titles';
import Card from './Card';

export default function Main() {

    var meals = [
        {
            imgSrc:"images/sanAtum.jpeg",
            name:"Sanduíche natural de Atum",
            description:"Pão integral, pasta de atum e cenoura, tomate e alface.",
            price:"R$ 6,50",
        },
        {
            imgSrc:"images/sanMilho.jpeg",
            name:"Sanduíche natural de Milho",
            description:"Pão integral, cmilho, maionese, alface e rúcula",
            price:"R$ 5,90",
        },
        {
            imgSrc:"images/sanRepolho.jpeg",
            name:"Sanduíche Intgral de Repolho",
            description:"Pão australiano integral, repolho, alface, tomate, agrião",
            price:"R$ 10,70",
        },
        {
            imgSrc:"images/sanRicotaCenoura.jpeg",
            name:"Sanduíche natural de Cenoura e Ricota",
            description:"Pão de forma, ricota e cenoura",
            price:"R$ 6,50",
        }
    ]; 
    
    var drinks = [
        {
            imgSrc:"images/sucogoiaba.png",
            name: "Suco de Goiaba",
            description:"Copo 500ml",
            price:"R$ 5,00",
        },
        {
            imgSrc:"images/sucolaranja.jpg",
            name:"Suco de Laranja",
            description:"Copo 500ml",
            price:"R$ 4,50",
        },
        {
            imgSrc:"images/sucomaracuja.jpeg",
            name:"Suco de Maracujá",
            description:"Copo 500ml",
            price:"R$ 5,00",
        },
        {
            imgSrc:"images/sucomorango.jpg",
            name:"Suco de Morango",
            description:"Copo 500ml",
            price:"R$ 6,50",
        }
    ];

    var desserts = [
        {
            imgSrc:"images/saladafruta.jpeg",
            name: "Salada de frutas",
            description:"Manga, maçã, morango, abacaxi, kiwi, banana. Granola opcional",
            price:"R$ 6,00",
        },
        {
            imgSrc:"images/sorveteamora.jpeg",
            name:"Sorvete de amora",
            description:"Sorvete caseiro de amora, 200ml",
            price:"R$ 5,00",
        },
        {
            imgSrc:"images/sorvetemanga.jpeg",
            name:"Sorvete de manga",
            description:"Sorvete caseiro de manga, 200ml",
            price:"R$ 5,00",
        },
        {
            imgSrc:"images/espetinhofruta.jpeg",
            name:"Espetinho de frutas",
            description:"Blueberry, mrango, maçã, kiwi, cereja e banana",
            price:"R$ 3,00",
        }
    ];
    return (
        <main>
            <Title title="Primeiro, seu prato" />

            <section>
            { meals.map(m => 
                <Card 
                    imgSrc={m.imgSrc}
                    name={m.name}
                    description={m.description}
                    price={m.price}
                />
            )}
            </section>

            <Title title="Agora, sua bebida" />

            <section>
            { drinks.map(d => 
                <Card 
                    imgSrc={d.imgSrc}
                    name={d.name}
                    description={d.description}
                    price={d.price}
                />
            )}
            </section>

            <Title title="Por fim, sua sobremesa" />

            <section>
            { desserts.map(ds => 
                <Card 
                    imgSrc={ds.imgSrc}
                    name={ds.name}
                    description={ds.description}
                    price={ds.price}
                />
            )}
            </section>
        </main>
    ); 
}