// objetos

let heroe = {
    nombre: 'thor',
    edad: 1500 // una vez que creamos un objeto, no podemos añadirle mas atributos de la nada, deben ser creados en su instancia
} 
// podemos crear por ejemplo una funcion que cree objetos con los atributos tipicos del heroe
function crearHeroe(name: string, age: number): object {
    return {
        nombre: name,
        edad: age
    }
}
// pero sucede un problema, siendo este un lenguaje como tipado, desde javascript, no podemos saber si el objeto de esa funcion son del mismo tipo
// que todos los demas objetos heroe, para ello typescript usa los --Type alias--

// antes de ir a los objetos de javascript, cabe aclarar que los type alias no solo se reduce a eso
// podemos ir indicando a un tipo, que sea de un formato, que contenga otro tipo, y asi, veamos un ejemplo
// creamos un tipo palabra
type palabra = `${string}` // una palabra es todo string que sea un string, redundante pero util al ejemplo

type Codigo = `${palabra}-${palabra}-${palabra}-${palabra}-${palabra}` // este es el formato de un tipo Codigo, por lo tanto todo codigo, debe tener ese formato para ser "aceptado" como tipo codigo
// este concepto es al que se refiere como Template union types
// cabe aclarar que en tiempo de ejecucion, no servira por ejemplo, para validar un correo electronico, todo esto es para la compilacion, una vez que se ejecute, sera javascript y no servira

// ahora, para los objetos, la sintaxis es la siguiente
// definimos un tipo con type

type heroes = {
    readonly id?: Codigo, // podemos indicar que son solo readonly a la hora de codear, (no al compilar), para hacerlo realmente inmutable, usamos la funcion freeze()
    nombre: string,
    edad: number
    esActivo?: boolean // podemos agregar propiedades opcionales, pueden o no tenerlo, ayuda a evitar errores si vamos a agregar esta propiedad a un solo objeto
                       // o por cualquier cambio que no queremos afectar a otros objetos que no lo usan
}

// a partir de aqui, podemos definir a los objetos con el tipo heroes que creamos
// ejemplo


let heroe2: heroes = {
    nombre: 'thor2',
    edad: 1501
}

// y podemos indicar en la funcion crearHeroe, que el objeto que vamos a retornar, sera de tipo heroe
function crearHeroe2(name: string, age: number): heroes {
    return {
        id: crypto.randomUUID(), // esta funcion da un codigo con el formato que escoguimos nosotros
        // si intentaramos id: "123", daria error
        nombre: name,
        edad: age,
        esActivo: true
    }
}

const heroe3 = Object.freeze(crearHeroe2('thor3', 1502)) // podemos ver que ahora heroe3 es tipo heroes, y es ademas inmutable

// desactivando al heroe, vemos que como no todos tienen la propiedad, podemos usar ? para aclararlo, por ejemplo, si quisieramos mostrar si es true o false con un toString()
// debemos asegurarnos que no sea undefinded, con ? podemos hacer esto mismo
console.log(heroe2.esActivo?.toString())
// si mas adelante queremos agregarle la propiedad al heroe, simplemente le asignamos un valor, y dejara de ser undefinder
heroe2.esActivo = true
heroe3.edad = 30 //-> da error porque es inmutable