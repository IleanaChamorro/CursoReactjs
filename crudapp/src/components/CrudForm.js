import React, { useState, useEffect } from 'react';

const forminicial = {
    name: "",
    team: "",
    id: null,
}


const CrudForm = ({crearData, actData, dataAEditar, setDataAEditar}) => {
    const [form, setForm] = useState(forminicial);

    //Funcion Ejecutada cuando detecta que la variable DataAEditar cambie
    useEffect(() => {
        if(dataAEditar){
            //Envio Datos del formulario para editar
            setForm(dataAEditar);
        }else{
            setForm(forminicial);
        }
    }, [dataAEditar])
    //Agregar Nuevo Piloto
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]:e.target.value,

        });
    };

    //Envio Formulario
    const handleSubmit = (e) => {
        e.preventDefault();

        if(!form.name || !form.team){
            alert("Faltan Datos");
            return;
        }

        if(form.id === null){
            crearData(form);
        }else{
            actData(form);
        }

        handleReset();
    };

    //Limpiar Formulario
    const handleReset = (e) => {
        setForm(forminicial);
        setDataAEditar(null);
    };

    return (
        <div>
            <h3>{dataAEditar ? "Editar" : "Agregar"}</h3>
            <form onSubmit={handleSubmit}>
                <input 
                type="text"
                name="name"
                placeholder="Mick Schumacher"
                onChange={handleChange} 
                value={form.name} 
                />
                <input 
                type="text"
                name="team"
                placeholder="Haas"
                onChange={handleChange}
                value={form.team} 
                />
                <input type="submit" value="Enviar"/>
                <input type="reset" value="Limpiar" onClick={handleReset}/>
            </form>
        </div>
    )
}

export default CrudForm
