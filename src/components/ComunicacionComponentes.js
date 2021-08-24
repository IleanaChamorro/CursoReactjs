import React, { Component } from 'react';

export default class Padre extends Component{
    state = {
        contador: 0,
    };

    //Metodo ejecutado por el Hijo que afecta el estado del Padre
    incrementarContador = (e) => {
        this.setState({
            contador: this.state.contador + 1
        })
    }
    render(){
        return(
            <>
            <h2>Comunicacion entre Componentes</h2>
            <p>Contador <b>{this.state.contador}</b></p>
            <Hijo incrementarContador={this.incrementarContador} mensaje="Mensaje para el hijo 1" />
            <Hijo incrementarContador={this.incrementarContador} mensaje="Mensaje para el hijo 2"/>
            </>
        );
    }
}


//Cuando se requiere pasar informacion de un componente padre al componente hijo se realiza a traves de las props
function Hijo(props){
    return (
        <>
        <h3>{props.mensaje}</h3>
        <button onClick={props.incrementarContador}> + </button>
        </>
    );
}