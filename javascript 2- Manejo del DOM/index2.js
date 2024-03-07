const usuario = {
    name: "Julio",
    edad: 30,

}


// continuando con javascript, ahora vemos manipulacion del DOM o del html
// para modificar o agregar elementos al DOM, usamos el objeto document

// puedo referenciar elementos del DOM segun su ID, NAME, CLASS o TAG
// estos metodos devolveran un objeto, o una lista si son mas de uno los encontrados

const presentacion = document.getElementById("bienvenida")

presentacion.innerText = "Hola, bienvenido " + usuario.name


// el metodo createElement crea un elemente html y lo podemos guardar en una constante para 
// referenciarlo
const boton = document.createElement("button")

//  cada elemento del DOM tiene atributos propios, como inner text, que es el texto interior 
// del elemento o etiqueta creada
boton.innerText = "TOCAME PAPI"
// una forma sencilla y limitada de acceder al estilo de un elemento, con sintaxis CSS en inline
boton.style = "background: red; display: flex; justify-content:right; height: 1000px; width: 50%;"

// para interpretar eventos y responder de forma personalizada a cada uno de estos
// utilizamos un manejador de eventos, o EventListener, que es un metodo dentro de 
// cada elemento, primero le especificamos el evento, y luego una funcion en respuesta 
// al evento

boton.addEventListener("click", function () {
    alert("CUIDADO ERA UNA TRAMPA")
    document.body.innerHTML = "<h1>queso</h1>"
})

// luego, podemos agregar un elemento al final de una etiqueta ya existente en el DOM

document.body.append(boton)


// otra forma de generar un elemento HTML quizas mas personalizado es de la siguiente forma

// el metodo innerHTML, lee un string y lo traduce al HTML, este, reemplaza 
// la estructura HTML dentro del objeto que le indicamos

// document.body.innerHTML = "<h1>queso</h1>"


// luego, existe un concepto util antes de continuar con la modificacion del DOM, que es el 
// destructuring de los objetos, esto es tomar un objeto, y abstaer las propiedades que me son
// utiles para una funcion especifica en algun momento, hay 3 formas de hacer esto

function abstraer1(usuario) {
    return usuario["name"] //acceder al atributo name

}

// por parametros, referencio entre llaves {} el atributo que esperamos que tenga el objeto 

function abstraer2({name}) {
    return name //retornar al atributo name

}

// extrayendo valores
function abstraer2(usuario) {
    var {name, age} = usuario
    // ahora, name y age son referenciables
    return name //retornar al atributo name

}

// manejo mas avanzado de CSS
// considerando el estilo inline, podemos referenciar variables y constantes dentro del string
// para ello usamos los strings con los simbolos `blablabla` y referenciamos con ${nombrevariable}
const background1 = "black"
const background2 = "red"
var color = "white"
elegir1 = false

boton.style = `background: ${elegir1 ? background1 : background2}; color: ${color}; display: flex; justify-content: center; height: 1000px; width: 50%;`
// algo util de estos string literals, es que podemos crear por ejemplo, condicionales para variar
// entre que valores les colocaremos
// con la sintaxis ${boolean ? 'valor1' : 'valor 2'}
//                                ^             ^
//                                |             |
//                              ramaTrue   ramaFalse