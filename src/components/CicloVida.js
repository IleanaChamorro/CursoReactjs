import React, {Component} from 'react';

export default class CicloVida extends Component{
    constructor(props){
        super(props);
        //Fase montaje
        console.log(0, 'El componente se inicializa aún NO está en el DOM');

        this.state = {
            hora: new Date().toLocaleTimeString()
        };

        this.temporizador = null;
    }

    //Este metodo se ejecuta luego de que el render cargue todos los elementos
    componentDidMount(){
        console.log(1, 'El componente ya se encuentra en el DOM');
    }

    //Metodo que permite pasar las propiedades y estado previo, por si uno las necesita antes de actualizar el estado previo
    componentDidUpdate(prevProps, prevState){
        console.log(2, "El estado o las props del componente han cambiado")
        console.log(prevProps);
        console.log(prevState);
    }

    tictac = () => {
        this.temporizador = setInterval(() => {
            this.setState({
                hora:  new Date().toLocaleTimeString(),
            });
        }, 1000);
    };

    iniciar = () => {
        this.tictac();
    };
    
    detener = () => {
        clearInterval(this.temporizador);
    };

    render(){
        console.log(4, 'El componente se dibuja(o redibuja por algun cambio) en el DOM');
        return(
            <>
            <h2>Ciclo de Vida de los Componentes de Clase</h2>
            <h3>{this.state.hora}</h3>
            <button onClick={this.iniciar}>Iniciar</button>
            <button onClick={this.detener}>Detener</button>
            </>
        )
    }
}