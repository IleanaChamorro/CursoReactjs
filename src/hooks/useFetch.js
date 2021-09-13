//Hook Personalizado
//Para que React sepa que es un hook personalizado la funcion debe usar lowercamelcase
import { useState, useEffect } from 'react';

export const useFetch = (url) => {
   
    const [data, setData] = useState(null);
    //informacion pendiente, empieza con valor true
    const [isPending, setIsPending] = useState(true);
    //Manejo errores
    const [error, setError] = useState(null);

    //Se ejecuta cuando cambie la variable url
    useEffect(() => {
        const getData = async (url) => {
        try{
                let res = await fetch(url);
                //espera la respuesta a la variable fetch

            //si la respuesta es falsa (hubo un error)
            if(!res.ok){
               // throw{
                 //   err:true,
                   // status: res.status,
                    //statusText: !res.statusText ? "Ocurrio un error" : res.statusText,
                //};
            }
            //Si existe una petición, la espera y convierte en formato json
            let data = await res.json();

            //En caso de no existir error, se actualiza el estado
            setIsPending(false)
            setData(data);
            setError({err: false});
            }catch(err){
                setIsPending(true);
                setError(err);
            }
        };
        //Llamado a api
        getData(url);
    }, [url]);
    //Retorna un objeto 
    return {data, isPending, error};
}
