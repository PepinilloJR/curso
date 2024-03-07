import { useState, useEffect } from 'react'
import React from 'react'

// importo react-dom/client para manipular el DOM
import ReactDOM from 'react-dom/client'
// importamos los hooks

// imports de modulos 

import { CajaMenu } from './menu';
import { Post } from './posts';
import { Inicio_sesion } from './perfil';
import './estilos.css'


// seleccionamos el elemento con ID root de nuesto html principal index en la carpeta public
const rootElement = document.getElementById('root')
// le indicamos a nuestro ReactDOM cual es el elemento root, o mas bien lo creamos
const root = ReactDOM.createRoot(rootElement)


function Main() {
    root.render(<>
    <CajaMenu/>
    <div className='cuerpo'>
        <div className='posts-flexbox'>
            <Post></Post>
        </div>
        <div className='perfil'>
            <Inicio_sesion/>
        </div>
    </div>

    </>)

}

Main()

