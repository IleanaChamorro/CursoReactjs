import React, { Component } from 'react';
import data from '../helpers/data.json'

function ElementoLista(props){
    return(
        <li>
            <a href={props.el.web} target="_blank"  >{props.el.nombre}</a>
        </li>
    )
}

export default class RenderizadoElementos extends Component{
    constructor(props){
        super(props);
        this.state = {
            estaciones: ['Primavera', 'Verano', 'Otoño', 'Invierno']
        };
    }
    render(){
        return(
            <div>
                <h2>Renderizado de Elementos</h2>
                <h3>Estaciones del año</h3>
                {/*Por cada elemento renderizado un 'li' que contiene elemento 
                Nota - cada elemento necesita un key
                */}
                <ol>
                    {
                        this.state.estaciones.map((el) => <li key={el}>{el}</li>)
                    }
                </ol>
                <h3>Frameworks Frontend Javascript</h3>
                <ul>
                {
                   data.frameworks.map((el) => (
                    <ElementoLista key={el.id} 
                    //Datos del framework pasados como propiedad
                    el={el}/>
                   ))}
                </ul>
            </div>
        );
    }
}