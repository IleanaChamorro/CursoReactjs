import React from 'react';

//Funcion Expresada
const Componente = (props) => <h2>{props.msg}</h2>

//Componente Funcional
/*function Componente(){
    return <h2>{props.msg}</h2>
}
*/

//Componente basado en clases
/*class Componente extends Component {
        return(){
        <h2>{this.props.msg}</h2> 
    } 
}
*/

export default Componente
