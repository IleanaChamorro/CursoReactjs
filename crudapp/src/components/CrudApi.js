import React, { useState, useEffect } from 'react';
import { helpHttp } from '../helpers/helpHttp';
import CrudForm from './CrudForm';
import CrudTable from './CrudTable';
import Loader from './Loader';
import Message from './Message';


const CrudApi = () => {
    const [db, setDb] = useState(null);
    const [dataAEditar, setDataAEditar] = useState(null);
    const [error, setError] = useState(null);
    const [carga, setCarga] = useState(false);

    let api = helpHttp();

    //endpoint url
    let url = "http://localhost:5000/pilotos";

    useEffect(() => {
        //Antes de hacer la peticion, 'setCarga' actualiza a true, para visualizar el loader
        setCarga(true);
        api.get(url).then((res) => {
            if(!res.err){
                setDb(res);
                //Si no existe error por parte del helper
                setError(null);
            }else{
                setDb(null);
                setError(res);
            }
            //Luego de la peticion 'setCarga' vuelve a falso
            setCarga(false);
        });
    }, [url]);
    
    const crearData = (data) => {
        data.id = Date.now();

        let options = { 
            body: data, 
            headers: {"content-type": "application/json"},
        };

        api.post(url, options).then((res) => {
            console.log(res);
        if(!res.err){
            setDb([...db, res]);
        }else{
         setError(res);
        }
      });
    };


    const actData = (data) => {
        //union url api, trae data de formulario mas id
        let endpoint = `${url}/${data.id}`;
        //Si el elemento que recibe es exactamente igual al que recibe, lo reemplaza por la nueva data
        //Actualizacion db con nueva data

        let options = { 
            body: data, 
            headers: {"content-type": "application/json"},
        };

        api.put(endpoint, options).then((res) => {
            console.log(res);
        if(!res.err){
            let nuevaData = db.map(el => el.id === data.id ? data : el);
            setDb(nuevaData);
        }else{
         setError(res);
        }
      });
    };
    const borrarData = (id) => {
        //Consultar si el usuario esta seguro de borrar 
        let borrar = window.confirm(
            `¿Esta seguro de eliminar el registro '${id}' ?`
        );

        //Accion de Borrar
        if(borrar){
            //Eliminar registro api
            let endpoint = `${url}/${id}`;
            let options = {
                headers: { "content-type":"application/json"}
            }
            api.del(endpoint, options).then((res) => {
                if(!res.err){
                    let nuevaData = db.filter(el => el.id !== id);
                    setDb(nuevaData);
                }else{
                 setError(res);
                }
            })
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
                {/* Solo renderiza cuando 'carga' es True */}
                {carga && <Loader/>}
                {/* Cuando exista un error*/}
                {error && <Message 
                msg={`Error ${error.status}: ${error.statusText}`} bgColor="#dc3545" />}
                {/* Cuando database tenga algo*/}
                {db && (
                <CrudTable 
                data={db}
                setDataAEditar={setDataAEditar}
                borrarData={borrarData}
                />
                )}
            </article>
        </div>
    )
}

export default CrudApi
