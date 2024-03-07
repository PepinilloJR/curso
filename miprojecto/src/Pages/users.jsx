import {BrowserRouter as Router, Route, Routes, Link, useParams, Outlet, NavLink} from 'react-router-dom';

import "../estilos.css"


export function Users(){
    return <>
    <div className='cuerpo'>
        <menu className='menu'>
            <Link to="/">
                <button className='boton'>Posts</button>
            </Link>
            <Link to="/users">
                <button className='boton'>Users</button>
            </Link>
        </menu>
        <div className='post'>
            <div className='Container'>
                hola
            </div>
        </div>

        <div className='perfil'>
            <div className='Container'>
                hola
            </div>
        </div>

    </div>
    </>
}