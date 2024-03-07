// aqui vamos a practicar el concepto de contexto y useContext, usado para poder comunicar 
// informacion de manera global entre componentes de react

import { useContext } from "react"
import { DataContext } from "./context/DataContext"

// consideremos un componente App() con un objeto


function Componente1 () {
    // para acceder al contexto usamos un hook llamada useContext
    // especificamos que queremos leer del contexto en la funcion
    // y especificamos de que context, en este caso del archivo DataContext 
    const { data, setData } = useContext( DataContext )
    // ahora, dentro de este componente1, tenemos acceso a data y a su setData
    // y todo cambio que le realizemos se aplicara al contexto y por lo tanto
    // a otros componentes que lo usen
}



export function App() {
    const objeto = {
        nombre: 'jkuan',
        edad: 30,
    }
    // imaginemos que esta funcion recibe dos componentes, que necesitan el objeto
    // creado aqui para funcionar, a su vez, quizas hubiera que enviarle a estos
    // metodos para setObjeto entre otras cosas, esto es un inconveniente 
    // ya que podriamos crear una jerarquia de dependencias muy grande e ilegible 

    // para ello, creamos generalmente una carpeta para los context y un archivo que los contenga

    // context sera un componente que compartira un context con todos sus elementos hijos, generalmente envolvemos 
    // todos los componentes de App() con el componente que provea el context

    return (
        <div>
            <h1>cosas</h1>
            <Componente1></Componente1>
            <Componente2></Componente2>
        </div>
    )
        


    
}