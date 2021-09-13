import React, {createRef, useRef} from 'react';

export default function Referencia(){
    //let refMenu = createRef(),
    let refMenu = useRef(),
    refMenuBtn = useRef();

    const handleToggleMenu = (e) => {
       /* const $menu = document.getElementById("menu");

        if(e.target.textContent === 'Menú'){
            e.target.TextContent = 'Cerrar';
            $menu.style.display = 'block'
        }else{
            e.target.textContent = 'Menú';
            $menu.style.display = 'none';
        }
        */
        if(refMenuBtn.current.textContent === 'Menú'){
            refMenuBtn.current.TextContent = 'Cerrar';
            refMenu.current.style.display = 'block'
        }else{
            refMenuBtn.current.TextContent = 'Menú';
            refMenu.current.style.display = 'none';
        }
    }

    return(
        <>
         <h2>Referencia</h2>
        <button id="menu-btn" ref={refMenuBtn} onClick={handleToggleMenu}>Menú</button>
        <nav id="menu" ref={refMenu} style={{display: "none"}}>
            <a href="#">Sección 1</a>
            <br/>
            <a href="#">Seccion 2</a>
            <br/>
            <a href="#">Seccion 3</a>
            <br/>
            <a href="#">Seccion 4</a>
            <br/>
            <a href="#">Seccion 5</a>
            <br/>
        </nav>
        </>
    )
}