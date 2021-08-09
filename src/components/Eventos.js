import React, {Component} from 'react';

export default class Eventos extends Component{
    constructor(props){
        super(props)
        this.state = {
            contador: 0
        }
        //Al metodo sumar de la clase le enlazamos el 'this' de la clase
        this.sumar = this.sumar.bind(this);
        this.restar = this.restar.bind(this)
    };
    //Metodo
    sumar(e){
        console.log("Sumando");
        console.log(this);
        //lo que realmente hace la funcion sumar
        this.setState({
            contador: this.state.contador + 1,
        });
    }

    restar(e){
        console.log("Restar");
        console.log(this);
        this.setState({
            contador: this.state.contador - 1,
        });
    }

    render(){
        return(
            <div>
                <h2>Eventos en Componentes de Clase</h2>
                <nav>
                    <button onClick={this.sumar}>+</button>
                    <button onClick={this.restar}>-</button>
                </nav>
                <h3>{this.state.contador}</h3>
            </div>
        );
    }
}