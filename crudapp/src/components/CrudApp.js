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


    const actData = (data) => {
        //Si el elemento que recibe es exactamente igual al que recibe, lo reemplaza por la nueva data
        let nuevaData = db.map(el => el.id === data.id ? data : el);
        //Actualizacion db con nueva data
        setDb(nuevaData);
    };
    const borrarData = (id) => {
        //Consultar si el usuario esta seguro de borrar 
        let borrar = window.confirm(
            `¿Esta seguro de eliminar el registro '${id}' ?`
        );

        //Accion de Borrar
        if(borrar){
            let nuevaData = db.filter(el => el.id !== id);
            setDb(nuevaData);
        }else{
            return;
        }
    };

    return (
        <div>
            <h2>Crud App</h2>
            <article className="grid-1-2">
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
            </article>
        </div>
    )
}

export default CrudApp
