import React from 'react'

export default function Footer(props) {
    //recebendo props.btnEnabled (pra liberar o botão e mudar o texto exibido);
    return (
        <footer>
            <button id="btn-footer" disabled>Selecione os 3 itens<br />para fechar o pedido</button>
        </footer>
    );
}