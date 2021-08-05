import React from 'react';
import PropTypes from "prop-types"
 
export default function Propiedades(props){
    return (
        <div>
            <h2>{props.porDefecto}</h2>
            <ul>
                <li>{props.cadena}</li>
                <li>{props.numero}</li>
                <li>{props.boolean ? "Verdadero" : "Falso"} </li>
                <li>{props.arreglo}</li>
                <li>{props.objeto.nombre + ' -- ' + props.objeto.correo}</li>
                <li>{props.arreglo.map(props.funcion)}</li>
                <li>{props.elementoReact}</li>
                <li>{props.componenteReact}</li>
            </ul>
        </div>
    )
}

Propiedades.defaultProps ={
    porDefecto: "Las Props"
};
Propiedades.propTypes={
    numero: PropTypes.number.isRequired, //Esta propiedad solo va a recibir numeros y es requerida
}

