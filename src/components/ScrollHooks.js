//Uso Hooks
import React, {useState, useEffect} from 'react';

export default function ScrollHooks(){

    const [scrollY, setScrollY] = useState(0);

    //Cada vez que se renderiza, ejecuta todo lo que este dentro de la funcion
    useEffect(() => {
        //console.log('Moviendo Scroll');

        const detectarScroll = () => setScrollY(window.pageYOffset);
        
        window.addEventListener('scroll', detectarScroll);

        //cuando useEffect ya no exista
        return () => (window.removeEventListener('scroll', detectarScroll)
        );
    }, [scrollY]);

    useEffect(() => {
        //console.log('Fase de Montaje');
        //Esta porcion de codigo solo se ejecuta cuando la variable cambie
    }, [scrollY]);

    //Si el useEffect no tiene definido la lista de dependencias va a actuar como un componentDidUpdate(se ejecuta cada vez que se renderice el componente)
    useEffect(() => {
        //console.log('Fase de Actualizacion');
    });

    useEffect(() => {
        //Internamente al usar un return, useEffect usa la fase de desmontaje
        return () => {
            //console.log('Fase Desmontaje');    
        }
    });
    return(
        <>
            <h2>Hooks - useEffect y el ciclo de vida </h2>
            <p>Scroll Y del navegador {scrollY}px</p>
        </>
    )
}