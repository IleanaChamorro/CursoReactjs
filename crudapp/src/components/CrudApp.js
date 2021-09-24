import React, { useState } from 'react';
import CrudForm from './CrudForm';
import CrudTable from './CrudTable';

//llamado de datos
const initialDb = [
   {
    id: 1,
    name: 'Lewis Hamilton',
    team: 'Mercedes',
    },
    {
        id: 2,
        name: 'Valtteri Bottas',
        team: 'Mercedes',
    },
    {
        id: 3,
        name: 'Esteban Ocon',
        team: 'Alpine',
    },
    {
        id: 4,
        name: 'Fernando Alonso',
        team: 'Alpine',
    },
    {
        id: 5,
        name: 'Nikita Mazepin',
        team: 'Haas',
    }
];

const CrudApp = () => {
    const [db, setDb] = useState(initialDb);
    const [dataAEditar, setDataAEditar] = useState(null);

    const crearData = (data) => {
        data.id = Date.now();
        setDb([...db, data]);
    };
    const actData = (data) => {};
    const borrarData = (id) => {};

    return (
        <div>
            <h2>Crud App</h2>
            <CrudForm 
            crearData={crearData}
            actData={actData}
            dataAEditar={dataAEditar}
            setDataAEditar={setDataAEditar}
            />
            <CrudTable 
            data={db}
            setDataAEditar={setDataAEditar}
            borrarData={borrarData}
            />
        </div>
    )
}

export default CrudApp
