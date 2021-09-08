import React, { useState, useEffect } from 'react';

function Pokemon({avatar, name}){
    return(
        <figure>
            <img src={avatar} alt={name}/>
            <figcaption>{name}</figcaption>
        </figure>
    );
}

export default function AjaxHooks(){
    //Espera el arreglo de pokemons
    const [pokemons, setPokemons] = useState([]);

    /*useEffect(() => {
        let url= "https://pokeapi.co/api/v2/pokemon/";
        fetch(url)
        .then(res => res.json())
        .then(json => {
           // console.log(json);
            json.results.forEach(el => {
                fetch(el.url)
                .then((res) => res.json())
                .then((json)=> {
                    //console.log(json);
                    let pokemon = {
                        id: json.id,
                        name: json.name,
                        avatar: json.sprites.front_default,
                    };

                    setPokemons((pokemons) => [...pokemons, pokemon]);
                });
            });
        })
    }, [])*/

    useEffect(() => {
        //peticion asincrona
        const getPokemons = async (url) => {
            let res = await fetch(url),
            //la respuesta de peticion se pasa a json
            json = await res.json();

            json.results.forEach(async (el) => {
                //
                let res = await fetch(el.url),
                json = await res.json();
                
                    //console.log(json);
                    let pokemon = {
                        id: json.id,
                        name: json.name,
                        avatar: json.sprites.front_default,
                    };
                    //destructuracion del arreglo pokemon más el pokemon agregado
                    setPokemons((pokemons) => [...pokemons, pokemon]);
                });
        }
        //Llamado a api
        getPokemons("https://pokeapi.co/api/v2/pokemon/");
    }, [])


    return (
        <>
        <h2>Peticiones Asincronas en Hooks</h2>
        {/*si la longitud de el arreglo pokemon es cero mostrar el mensaje */}
            {pokemons.length === 0 ?(
            <h3>Cargando</h3>
            ):(
                //en caso contrario se recorre el arreglo pokemon y muestra sus atributos
                pokemons.map((el) =>(
                    <Pokemon key={el.id} name={el.name} avatar={el.avatar}/>
                ))
            )}
        </>
    )
}
