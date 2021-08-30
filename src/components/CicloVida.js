import React, {Component} from 'react';


class Reloj extends Component {
    constructor(props){
        super(props);
    }
    //Se ejecuta cuando el elemento se remueve del dom
    componentWillUnmount(){
        console.log(3, "El componente ha sido eliminado del DOM");
    }
    render(){
        return <h3>{this.props.hora}</h3>
    }
}
export default class CicloVida extends Component{
    constructor(props){
        super(props);
        //Fase montaje
        console.log(0, 'El componente se inicializa aún NO está en el DOM');

        this.state = {
            hora: new Date().toLocaleTimeString(),
            visible: false
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
    //Se ejecuta cuando el componente ya no exista
    componentWillMount(){
        console.log(3, 'El componente ha sido eliminado del DOM')
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
        this.setState({
            visible: true,
        })
    };
    
    detener = () => {
        clearInterval(this.temporizador);
        this.setState({
            visible: false,
        })
    };

    render(){
        console.log(4, 'El componente se dibuja(o redibuja por algun cambio) en el DOM');
        return(
            <>
            <h2>Ciclo de Vida de los Componentes de Clase</h2>
            {this.state.visible && <Reloj hora={this.state.hora}/>}
            <button onClick={this.iniciar}>Iniciar</button>
            <button onClick={this.detener}>Detener</button>
            </>
        )
    }
}