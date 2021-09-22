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
    const [db, setDb] = useState(initialDb)
    return (
        <div>
            <h2>Crud App</h2>
            <CrudForm/>
            <CrudTable data={db}/>
        </div>
    )
}

export default CrudApp
