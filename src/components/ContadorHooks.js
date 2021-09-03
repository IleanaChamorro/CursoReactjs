//Use State - Permite manipular el estado de un componente funcional, se comporta como el objeto state y a la función this.setState de los componentes de clase.


//Para usarlo, debemos importarlo desde la librería de React.
import React, {useState} from 'react'

export default function ContadorHooks(props){

    //inicializar el hook, para ello asignaremos mediante la destructuración de arreglos 2 elementos:
    //El valor del estado y un metodo para actualizarlo
    const [contador, setContador] = useState(0);
    //Adicionalmente le pasaremos como parámetro el valor inicial del estado al método useState

    //Para actualizar el estado tenemos que utilizar el método resultante de la destructuración de useState y pasarle el nuevo valor.
    const sumar = () => setContador(contador + 1);

    const restar = () => setContador(contador - 1);
    return(
        <>
            <h2>Hooks - useState </h2>
            <nav>
                <button onClick={sumar}>+</button>
                <button onClick={restar}>-</button>
            </nav>
            <p>Contador de {props.titulo}</p>
            <h3>{contador}</h3>
        </>
    );
}

ContadorHooks.defaultProps = {
    titulo: 'Clicks',
}