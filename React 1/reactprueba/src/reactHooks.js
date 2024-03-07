import './estilos.css'


// habiamos visto que el estado de los componentes de react no se suele actualizar de forma simple 
// como esperariamos que se haga, por ejemplo el estilo
// para realizarlo correctamente y que funcione, debemos usar reactHooks
import { useState, useEffect } from 'react'


export function Contador (){
    // para acceder al estado del elemento, consideramos la funcion useState() que devuelve 
    // un arreglo de dos valores, para acceder a estos podemos usar la siguiente sintaxis de JS
    const [contador , setearContador] = useState(0)
    // esta inicializa contador con valor 0 puesto en useState, luego, la funcion setearContador
    // se usa para actualizar el valor de contador ej setearContador(10)
    // con esta misma herramienta podriamos hacer cambios en clases, id, etc, muy util para modificar el CSS

    // otro hook util es el useEffect, este se ejecuta cada vez 
    // que valores de la interfaz de la funcion 
    // cambie en cualquier aspecto
    useEffect(function () {
        console.log("hola")

    }, [ contador ]) // el segundo valor es una Lista, si se especifica, 
            // el useEffect aplicara solo cuando cambien 
            // valores que se le ingresen a esa list
            // si esta vacia, no se aplicara a ningun cambio
            // ejecutandose solo una vez 

    return <>
    <div className='contador'>
    <h1>
        Contador: {contador}</h1>
    <button className='boton' onClick={function () {
        setearContador(contador + 1)
    }}>
        Aumentar
    </button>
    </div>
    </>

}