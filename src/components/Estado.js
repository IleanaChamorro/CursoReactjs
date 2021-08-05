//Estado - Variables que intervienen en la modificacion de dicho componente y que valores tienen segun su estado(son inmutables)
import React, {Component} from 'react';

function EstadoAHijo(props){
    return(
        <div>
            <h3>{props.contadorHijo}</h3>
        </div>
    );
}
export default class Estado extends Component{
    constructor(props){
        super(props); 
        //Objeto del estado
        this.state = {
            contador: 0,
        };

        setInterval(() => {
            //De esta manera no se puede, por que se actualizaria directamente el estado
            //this.state.contador += 1;
            this.setState({
                contador: this.state.contador + 1
            });
        }, 1000);
    }
    //Renderizar el elemento
    render(){
        return (
            <div>
                <h2>El state</h2>
                <p>{this.state.contador}</p>
                <EstadoAHijo contadorHijo={this.state.contador}/>
            </div>
        )
    }
}