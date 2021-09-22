import React, { useState, useEffect } from 'react';

const initialForm = {
    name: "",
    team: "",
    id: null,
}


const CrudForm = () => {
    const [form, setForm] = useState(initialForm);

    const handleChange = (e) => {}

    const handleSubmit = (e) => {}

    const handleReset = (e) => {}

    return (
        <div>
            <h3>Agregar</h3>
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
