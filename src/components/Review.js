import React from 'react';
import Header from './Header';

export default function Review() {

    return(
        <>
            <Header />
            <main>
                <h3 className="title">Revise seu Pedido</h3>
                <section className="section-review">
                    <div className="review">
                        <span className="order">
                            <p>Frango Yin Yang</p>
                            <p>14,90</p>
                        </span>
                        <span className="order">
                            <p>Frango Yin Yang</p>
                            <p>14,90</p>
                        </span>
                        <span className="order">
                            <p>Frango Yin Yang</p>
                            <p>14,90</p>
                        </span>
                        <span className="order">
                            <p>TOTAL</p>
                            <p>R$ 14,90</p>
                        </span>
                    
                    </div>
                </section>
            </main>
        </>
    )
}