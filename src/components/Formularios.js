import React, {useState} from 'react';

export default function Formularios(){
    const [nombre, setNombre] = useState("");
    const [sabor, setSabor] = useState("");
    return(
        <>
            <h2>Formularios</h2>
            <form>
                <label htmlFor="nombre">Nombre</label>
                <input 
                type="text" 
                id="nombre" 
                name="nombre" 
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                />
                <p>Elige tu Sabor JS Favorito: </p>
                <input type="radio" id="" name="sabor" value=""
                onChange={(e) => setSabor(e.target.value)}
                />
                <label htmlFor=""/>
            </form>
        </>
    )
}