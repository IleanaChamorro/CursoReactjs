import { useState, useEffect } from 'react';

export const useFetch = (url) => {
    //Almacena Datos Api's
    const [data, setData] = useState(null);
    //Posibles errores en Api's
    const [error, setError] = useState(null);
    //Estado de la peticion
    const [carga, setCarga] = useState(false);


    //Petición a la api
    //Cuando la url cambie, se ejecuta useEffect
    useEffect(() => {
        const abortController = new abortController();
        const signal = abortController.signal;

        const fetchData = async() => {
            setCarga(true);


            try{
                const res = await fetch(url);

                //Manejo error
                if(!res.ok){
                    let err = new Error("Error en la petición Fetch");
                    err.status = res.status || "00";
                    err.statusText = res.statusText || "Ocurrio un error";
                    throw err;
                }

                //Conversion de json a str
                const json = await res.json();

                if(!signal.aborted){
                    setData(json);
                    setError(null);
                }
            }catch(error){
                if(!signal.aborted){
                    setData(null);
                    setError(error);
                }
            }finally{
                if (!signal.aborted){
                    setCarga(false);
                }
            }
        };

        fetchData();

        return () => abortController.abort();
    }, [url]);

    return { data, error, carga};
}   
