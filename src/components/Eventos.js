import React, {Component} from 'react';

export default class EventosES6 extends Component{
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
        //console.log("Sumando");
       // console.log(this);
        //lo que realmente hace la funcion sumar
        this.setState({
            contador: this.state.contador + 1,
        });
    }

    restar(e){
        //console.log("Restar");
        //console.log(this);
        this.setState({
            contador: this.state.contador - 1,
        });
    }

    render(){
        return(
            <div>
                <h2>Eventos en Componentes de Clase ES6</h2>
                <nav>
                    <button onClick={this.sumar}>+</button>
                    <button onClick={this.restar}>-</button>
                </nav>
                <h3>{this.state.contador}</h3>
            </div>
        );
    }
}


//Ejemplo Eventos a partir de ES7

//Properties Initializer
export class EventosES7 extends Component{
        state = {
            contador: 0
        };

    //Arrow Functions
    //No es necesario el bind, el this que reconocen es a la clase a la que pertenecen
    sumar = (e) => {
        //console.log("Sumando");
        //console.log(this);
        //lo que realmente hace la funcion sumar
        this.setState({
            contador: this.state.contador + 1,
        });
    }

    restar = (e) => {
        //console.log("Restar");
        //console.log(this);
        this.setState({
            contador: this.state.contador - 1,
        });
    }

    render(){
        return(
            <div>
                <h2>Eventos en Componentes de Clase ES7</h2>
                <nav>
                    <button onClick={this.sumar}>+</button>
                    <button onClick={this.restar}>-</button>
                </nav>
                <h3>{this.state.contador}</h3>
            </div>
        );
    }
}

function Boton(props){
    return <button onClick={props.myOnClick}></button>
}
export class MasSobreEventos extends Component{
    //Manejador de eventos
    handleClick = (e, mensaje) => {
        //console.log(e);
        //Acceder al evento original
        //console.log(e.nativeEvent);
        //la consola devuelve button
        //console.log(e.target);
        //console.log(mensaje);
    } 
    render(){
        return(
            <div>
                <h2>Más sobre Eventos</h2>
                <button 
                onClick={(e) => 
                    //Esta arrow fuction se convierte en el nuevo manejador de evenetos
                    this.handleClick(e, "Hola pasando párametro desde un evento")
                }
                >
                    Saludar
                </button>
                {/* En caso de querer hacer lo mismo no funcionaria, ya que el evento onClick es propio de etiquetas jsx
                 <Boton onClick={(e) => 
                    //Esta arrow fuction se convierte en el nuevo manejador de evenetos
                    this.handleClick(e, "Hola pasando párametro desde un evento")
                }/>
                 */}
                 {/*Evento Personalizado => Crear props para pasarselo al componente, luego le pasamos esa prop al evento*/}
                 <Boton
                 myOnClick={(e) => 
                this.handleClick(e, "Hola pasando parametro desde un evento")
                }
                 />
            </div>
        )
    }
}