// CON REACT, podemos importar estilos CSS directamente a JavaScript
import './estilos.css'
// luego, funciona similar a cuando lo importabamos a HTML
// podemos dar en cada HTML una clase ej className="botonRojo"
// (para evitar errores en react usamos el parametro className en vez de class)
// o podemos definirle un estilo a cada etiqueta, como en HTML y CSS normal

// los estilos en react tambien podemos realizarlos en javaScript
// de modo que cada estilo sera un objeto, cuyos atributos usaremos como
// si fueran los de CSS 

// por ejemplo, si queremos crear un boton estilado, podemos hacer lo siguiente
export function Boton({ ready=false }) {
    // creamos un estilo, la entrada de cada atributo debe ser un string
    // si queremos ver que estilos hay por si nos olvidamos cosas de css
    // debemos precionar CTRL + Espacio
    const botonStyle = {
        background: "black",
        color: "white",
        padding: "20px",
        
    }
    return (
        // primer ejemplo con estilo por Objeto
        <>
        <button style={botonStyle}>
            BOTON COLORIDO
        </button>
        <button className="boton">
            BOTON COLORIDO
        </button>
        {/* puedo crear condicionales de estilo con clases, por ejemplo */ }
        <button className={ready ? "boton" : "botonMalo"}>
            BOTON COLORIDO
        </button>
        </>
    )
}