import React from 'react'

export default function Footer(props) {
    
    var {btnEnabled} = props;
    var text = btnEnabled ? "Revisar Pedido" : "Selecione os 3 itens para fechar o pedido"
    return (
        <footer>
            <button className={btnEnabled ? "btn-footer btn-select" : "btn-footer"} disabled={!btnEnabled}>{text}</button>
        </footer>
    );
}