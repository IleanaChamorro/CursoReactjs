import React, { useState} from 'react';
import SelectLista from "./SelectLista"

const SelectsAnidados = () => {
    const [provincia, setProvincia] = useState("");
    const [municipio, setMunicipio] = useState("");
    const [ciudad, setCiudad] = useState("");

    return (
        <div>
            <h2>Selects Anidados</h2>
            <h3>Argentina</h3>
            <SelectLista titulo="provincia" url="" handleChange={(e) => {setProvincia(e.target.value)}} />
            {provincia && (
            <SelectLista titulo="municipio" url="" handleChange={(e) => {setMunicipio(e.target.value)}}/>
            )}
            {ciudad && (
            <SelectLista titulo="ciudad" url="" handleChange={(e) => {setCiudad(e.target.value)}}/>
            )}
            <pre>
                <code>
                    {provincia} - {municipio} - {ciudad}
                </code>
            </pre>
        </div>
    )
}

export default SelectsAnidados
