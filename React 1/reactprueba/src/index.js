import { TirarLaPosta, Button } from './modules'
import { Boton } from './Estilos'
import { ButtonBacks } from './usoDeFetch'
// modulo de react icons, util supongo
import { Contador } from './reactHooks';
import { FaBeer } from 'react-icons/fa';
import { IconName } from "react-icons/lia";


import { Icono } from './paqueterceros';

// importo react
import React from 'react'
// importo react-dom/client para manipular el DOM
import ReactDOM from 'react-dom/client'
// importamos los hooks
import { useState, useEffect } from 'react'
// seleccionamos el elemento con ID root de nuesto html principal index en la carpeta public
const rootElement = document.getElementById('root')
// le indicamos a nuestro ReactDOM cual es el elemento root, o mas bien lo creamos
const root = ReactDOM.createRoot(rootElement)


// root basicamente es la primer componente, un bloque que engloba a todos los demas bloques,
// la raiz de todas las demas cosas que implementaremos

// comenzamos con la funcion del root llamada render(), el cual toma como entrada elementos HTML y los coloca en el body
root.render(<h1>hola mundo!</h1>)

// creacion de componentes
// cada componente en react es una funcion con su primera letra en mayuscula (siempre)
function Saludar() {
    const user = {
        name: "Simon",
        edad: 30,
    }
    // con react, puedo retornar piezas de HTML, esto es porque React utiliza JSX
    // que no es javascript puro, si no una combinacion de JS con HTML
    // si creamos un modulo de JSX, se recomiendo colocarle la extension .jsx para avisar de que 
    // no es un modulo de JS solamente.

    // como puedo interpretar codigo, puedo usar por ejemplo, condicionales en linea 
    // con un valor ternario {booleano ? bla : bla }

    // si queremos printear un objeto completo, podemos usar 
    // JSON.stringify(objeto) y lo muestra en un formato de JSON 
    // pensalo, si JSON puede devolver un arreglo de objetos
    // yo puedo escribir un objeto en un JSON y tiene sentido 
    // poder mostrarlo en este formato
    return <div>
            <h1>Hola {JSON.stringify(user)} todo bien</h1>
            <menu>
                <Button/>
            </menu>
           </div>
}

// en react, si queremos agregar el retorno o codigo de una funcion dentro del HTML
// que vamos a renderizar, usamos llaves { } para indicar que es codigo de JS
// otra forma, es llamar a la funcion como si fuera una etiqueta de HTML, cosa que react permite
// el ultimo ejemplo es la mas eficiente y legible 

// lo importante en render es que siempre debe existir un unico elemento padre, en nuestro caso <div>, y todo lo demas va dentro
// si queremos evitar crear estos elementos padres, podemos usar elementos fragment que son <></>, cuando se muestra la aplicacion
// estos elementos fragment no existiran

// encerramos en una funcion main que es asincrona el render, asi podemos renderizar bases de datos que suelen contener operaciones asincronas
async function main(){
    const lista = await ButtonBacks()
    // luego usamos en el render lista.map para generar etiquetas con los innerText de la lista, map muestra el nombre y luego index (segundo parametro), 
    // que es la posicion del arreglo
    // otros metodos de arreglos pueden ser filter, sort, find
    root.render(<>
        { Saludar() }
        
        <Saludar></Saludar>
    
        <Saludar/>
        <TirarLaPosta titulo="TITULOS!!!"
                      funcion={function (){
                        return "bolas cuadradas"
    
                      }
    
                    
                    }
        />
        <Boton ready={false}/>
        
        <ul>{lista.map(function (nombre, index) {
            return <li key={index}>{nombre}</li> 
        })}</ul>
        <Icono/>
        <Contador/>
        </>
        )
}
main()

