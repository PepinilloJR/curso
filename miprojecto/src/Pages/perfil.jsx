
import { useState } from 'react'
import '../estilos.css'


export function Perfil() {
    const [iniciado, setIniciado] = useState(false)
    const [usuario, setUsuario] = useState({})
    
    
    if (iniciado === false) {
        return <>
            <form className="form" onSubmit={function (submit) {
                submit.preventDefault()
                setIniciado(true)
                setUsuario(submit)
                console.log(submit)
            }
            }>
                <h2>INICIAR SESION</h2>
                <input name='nombre' className="inputForm" type="text" />
                <input name='pass' className="inputForm" type="password"></input>
                <input  className="inputForm, botonSubmit" type="submit" value="Iniciar Sesion"></input>
            </form>
        </>
    }
    else {
        return <>
        
        </>
    }

}