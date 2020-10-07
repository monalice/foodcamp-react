import React from 'react'
import Meals from './Meals.js';
import Title from './Titles';
import Drinks from './Drinks.js';
import Desserts from './Desserts.js';

export default function Main() {
    return (
        <main>
            <Title title="Primeiro, seu prato" />
            <Meals />
            <Title title="Agora, sua bebida" />
            <Drinks />
            <Title title="Por fim, sua sobremesa" />
            <Desserts />
        </main>
    );
}