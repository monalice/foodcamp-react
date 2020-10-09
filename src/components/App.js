import React, { useState } from 'react';
import Header from './Header.js';
import Section from './Section.js';
import Footer from './Footer.js';

export default function App() {

    var [sections, setSections] = useState(sectionsArray());

    function selected(option) {
        option.checkSelect = (!option.checkSelect);
        option.select = (option.checkSelect ? 1 : 0);
        setSections([...sections]);
    }

    function increment(option) {
        option.select = option.select + 1;
        setSections([...sections]);
    }

    function decrement(option) {
        option.select = option.select - 1;
        setSections([...sections]);
    }


    var sectionsSelected = sections.filter(section => {
        var optionsSelected = section.options.filter(option => option.select);
        return optionsSelected.length > 0;
    });

    var btnEnabled = false;
    if(sectionsSelected.length === sections.length){
        btnEnabled = true;
    }
    
    return (
        <>
            <Header />
            <main>
                {sections.map(section => <Section
                    section={section}
                    increment={increment}
                    decrement={decrement}
                    selected={selected} />)}
            </main>
            <Footer btnEnabled={btnEnabled} />
        </>
    );
}


function sectionsArray() {
    return [
        {title: "Primeiro, seu prato",
        options: [
            {
                imgSrc:"images/sanAtum.jpeg",
                name:"Sanduíche natural de Atum",
                description:"Pão integral, pasta de atum e cenoura, tomate e alface.",
                price:"R$ 6,50",
                priceUse: 6.5,
                select: 0,
                checkSelect: false
            },
            {
                imgSrc:"images/sanMilho.jpeg",
                name:"Sanduíche natural de Milho",
                description:"Pão integral, cmilho, maionese, alface e rúcula",
                price:"R$ 5,90",
                priceUse: 5.9,
                select: 0,
                checkSelect: false
            },
            {
                imgSrc:"images/sanRepolho.jpeg",
                name:"Sanduíche Intgral de Repolho",
                description:"Pão australiano integral, repolho, alface, tomate, agrião",
                price:"R$ 10,70",
                priceUse: 10.7,
                select: 0,
                checkSelect: false
            },
            {
                imgSrc:"images/sanRicotaCenoura.jpeg",
                name:"Sanduíche natural de Cenoura e Ricota",
                description:"Pão de forma, ricota e cenoura",
                price:"R$ 6,50",
                priceUse: 6.5,
                select: 0,
                checkSelect: false
            }
        ]},
        
        {title: "Agora, sua bebida",
        options: [
            {
                imgSrc:"images/sucogoiaba.png",
                name: "Suco de Goiaba",
                description:"Copo 500ml",
                price:"R$ 5,00",
                priceUse: 5.0,
                select: 0,
                checkSelect: false
            },
            {
                imgSrc:"images/sucolaranja.jpg",
                name:"Suco de Laranja",
                description:"Copo 500ml",
                price:"R$ 4,50",
                priceUse: 4.5,
                select: 0,
                checkSelect: false
            },
            {
                imgSrc:"images/sucomaracuja.jpeg",
                name:"Suco de Maracujá",
                description:"Copo 500ml",
                price:"R$ 5,00",
                priceUse: 5.0,
                select: 0,
                checkSelect: false
            },
            {
                imgSrc:"images/sucomorango.jpg",
                name:"Suco de Morango",
                description:"Copo 500ml",
                price:"R$ 6,50",
                priceUse: 6.5,
                select: 0,
                checkSelect: false
            }
        ]},
    
        {title: "Por fim, sua sobremesa",
        options: [
            {
                imgSrc:"images/saladafruta.jpeg",
                name: "Salada de frutas",
                description:"Manga, maçã, morango, abacaxi, kiwi, banana. Granola opcional",
                price:"R$ 6,00",
                priceUse: 6.0,
                select: 0,
                checkSelect: false
            },
            {
                imgSrc:"images/sorveteamora.jpeg",
                name:"Sorvete de amora",
                description:"Sorvete caseiro de amora, 200ml",
                price:"R$ 5,00",
                priceUse: 5.0,
                select: 0,
                checkSelect: false
            },
            {
                imgSrc:"images/sorvetemanga.jpeg",
                name:"Sorvete de manga",
                description:"Sorvete caseiro de manga, 200ml",
                price:"R$ 5,00",
                priceUse: 5.0,
                select: 0,
                checkSelect: false
            },
            {
                imgSrc:"images/espetinhofruta.jpeg",
                name:"Espetinho de frutas",
                description:"Blueberry, mrango, maçã, kiwi, cereja e banana",
                price:"R$ 3,00",
                priceUse: 3.0,
                select: 0,
                checkSelect: false
            }
        ]}
    ];
}