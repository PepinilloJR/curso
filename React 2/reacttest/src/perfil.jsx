import './estilos.css'

import { useState, useEffect } from 'react'


export function Inicio_sesion() {

    return <form className='formulario' onSubmit={function (submit){
        submit.preventDefault()
        console.log(submit.target.nombre.value)
    }}>
        <h1>Iniciar sesion</h1>
        <input className='formularios' type="text" name='nombre'></input>
        <input className='formularios' type="password" name='contraseña'></input>
        <input className='boton' type="submit"></input>
    </form>
}