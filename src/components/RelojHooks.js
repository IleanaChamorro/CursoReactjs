import React, {useState, useEffect} from 'react';


function Reloj({hour}){
    return <h3>{hour}</h3>;
}
export default function RelojHooks(){
    const [hour, setHour] = useState(new Date().toLocaleTimeString());
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        let temporizador;

        if(visible){
             //cuando visible este en true
            temporizador = setInterval(() => {
                setHour(new Date().toLocaleTimeString());
            }, 1000);
            //cuando no este visible 
        }else{
            clearInterval(temporizador);
        }
            return () => {
                //console.log('Fase de desmontaje');
                clearInterval(temporizador);
            }
    }, [visible])
    return(
        <>
            <h2>Reloj con Hooks</h2>
        {visible && <Reloj hour={hour}/>}
        <button onClick={() => setVisible(true)}>Iniciar</button>
        <button onClick={() => setVisible(false)}>Detener</button>
        </>
    );
}