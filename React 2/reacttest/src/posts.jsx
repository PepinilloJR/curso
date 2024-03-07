import { useState, useEffect } from 'react'
import { LiaAngleDownSolid } from "react-icons/lia";
import './estilos.css'

export function Post() {
    const [lista, setLista ] = useState([])
    const [limite, setLimite] = useState(5) 
    // uso useEffect para actualizar la lista solo cuando cambia el limite, ampliando la porcion de posts

    useEffect(function (){
        TomarLista()

    }, [limite])

    async function TomarLista() {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts")
        const lista = await response.json()
        const porcion = lista.slice(0, limite)
        // uso setLista para actualizar la variable Lista sin provocar una promesa
        setLista(porcion)
    }
    
    
    return <>
        <h1>Posteos del dia</h1>
        {lista.map(function (nombre, index){
            console.log(index)
            return <div key={index} className='post'>{nombre.title}</div>
        }
        )}
        <button onClick={function() {setLimite(limite + 5)}}>{LiaAngleDownSolid()}</button>
    </>

}
