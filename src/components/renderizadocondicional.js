import React, { Component } from 'react'
//Renderizado - Cuando un valor del estado o de las propiedades del componente cambian esto obliga a que se vuelva a renderizar la interfaz  


function Login(){
    return(
        <div>
            <h3>Login</h3>
        </div>

    )
}

function LogOut(){
    return(
        <div>
            <h3>LogOut</h3>
        </div>

    )
}
export default class RenderizadoCondional extends Component{
    //variable de estado en el componente, que en base a su valor mostrar un componente o otro
    constructor(props){
        super(props);
        this.state = {
            //Cuando sea verdadero su valor renderiza login en caso contrario renderizar logout
            session: true,

        }
    }
    render(){
        return <div>
            <h2>Renderizado condicional</h2>
            {this.state.session ? <Login/> :  <LogOut/>}
        </div>
    }
}

