import {BrowserRouter as Router, Route, Routes, Link, useParams, Outlet, NavLink} from 'react-router-dom';
import React from "react";
import { useState, useEffect } from 'react';
import { GrDown } from "react-icons/gr";
import { Perfil } from './perfil';

import "../estilos.css"


function ListaPost() {
    const [lista, serLista ] = useState([])
    const [limite, setLimite ] = useState(5)

    useEffect(function (){
        LeerPost()

    }, [limite])


    async function LeerPost() {
        const respuesta = await fetch("https://jsonplaceholder.typicode.com/posts")
        const array = await respuesta.json()
        const porcion = array.slice(0, limite)

        serLista(porcion)
    }

    return <>
    {lista.map(function (post, index) {
            return <div key={`post_${index}`} className='post'>
                <h4 key={`tit_${index}`} className='postTitulo'>{post.title}</h4>
                <p key={`par_${index}`} className='postParrafo'>{post.body}</p>
            </div>
        }
        
    )}
    <button onClick={
        function () {
            setLimite(limite + 5)
        }
    } className='botonDown'>
        <GrDown/>
    </button>
    </>


}



export function Posts(){
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
        <div className='posts'>
            <div className='Container'>
                <ListaPost></ListaPost>
            </div>
        </div>

        <div className='perfil'>
            <div className='ContainerPerfil'>
                <Perfil/>
            </div>
        </div>

    </div>
    </>
}


