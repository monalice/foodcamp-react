import * as React from 'react';
import {Link} from 'react-router-dom';

export default function Footer(props) {
    
    var {btnEnabled} = props;
    var text = btnEnabled ? "Revisar Pedido" : "Selecione os 3 itens para fechar o pedido"
    return (
        <footer>
            <Link onClick = {element => !btnEnabled ? element.preventDefault() : null} to="/review">
            <button className={btnEnabled ? "btn-footer btn-select" : "btn-footer"}>{text}</button>
            </Link>
        </footer>
    );
}
//disabled={!btnEnabled}