// este es un modulo JSX

// aca, vamos a crear funciones
// ahora vemos el concepto de PROPS de react
// como vemos, las funciones pueden ser llamadas como
// etiquetas dentro del render, si a estas etiquetas le 
// pasamos parametros inventados, ej: titulo="popo"
// nosotros podemos acceder a estos desde la funcion usando 
// un parametro de la funcion llamado props, que sera un objeto 
// que lleva por atributos los parametros pasados a la funcion en su 
// "forma de etiqueta", pueden ir objetos, funciones, numeros, etc.
// veamos un ejemplo

// YA VIMOS QUE en funciones, si tomamos un objeto, podemos estructurar 
// que datos queremos, en el ejemplo, si queres solamente titulo y nombre
// en vez de llamara props en los parametros, llamamos {titulo , nombre="user"}
// (en nombre le puse un igual para ponerle un valor por defecto si no llegan a llamar y dar valor a ese parametro)

export function TirarLaPosta(props) {
    //acceso al parametro titulo de la etiqueta
    // <TirarLaPosta titulo="" />
    return <h1>{props.titulo} {props.funcion()}</h1>
}

// el concepto defaultProps se refiere a usar etiquetas personalizadas para referirse a eiquetas por defecto
// de HTML para poder reutilizar una forma modificada del default
export function Button({text}) {
   
    
    var encima = true
    function click(event){
        // aca se supone que cambia el valor de encima, el cual usamos de condicional para cambiar la clase del objeto button, pero el problema es que el render solo dibuja una vez
        // asi que no podemos cambiar dinamicamente su clase en el evento, eso debera realizarse desde CSS, AL MENOS, hasta que aprendamos a usar useState hook, que veremos mas adelante
        encima = !encima
        // un ejemplo del event
        // una funcion util, mayormente para formularios, es evitar el comportamiento por defecto de algunos eventos, por ejemplo, que se reinicie la pagina o cosas de por el estilo
        // para ello, se llama al metodo del objeto event, preventDefault(), que evita los comportamientos por defecto 
        event.preventDefault()
        console.log(event.target.style)

    }


    // ya que estamos haciendo un boton, hay que manejar los EventHandlers
    // las etiquetas html tienen bastantes eventHandlers que ya vimos hace tiempo
    // a estos EventHandlers, podemos pasarles funciones como parametro, lo que los hace
    // muy flexibles en REACT

    // si quiero el retorno de ese evento, para hacer algo con el, la funcion definida para el
    // event handler debe tener un parametro que lo reciba, puede llamarse de cualquier forma
    // pero tiene sentido llamarlo event

    // el retorno sera un objeto, en consola podemos ver sus atributos para ver si nos da lo que
    // necesitamos, como un texto escrito por el usuario

    // uno comun es el atributo Target, este hace referencia al elemento que funciona como input
    // en este caso, el button, de este Target podemos encontrar cosas como su innertext, id, class o estilo
    // entre muchas otras cosas
    return <button style={{
        background: encima ? "black" : "white",
        color: encima ? "white" : "black",
        padding: "20px",
        
    }}
    onClick={click}
     >
        {text}
    </button>

}

// el metodo defaultProps de caulquier funcion en react 
// permite dar valores por defecto a los parametros si no se ingresan
// esto es una forma, aunque ya vimos que se puede hacer en la misma funcion
// cuestion de comodidad

Button.defaultProps = {
    text: "usuario"

}
