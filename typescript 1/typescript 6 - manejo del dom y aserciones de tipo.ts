// veamos un ejemplo de como obetener un elemento del DOM
// como siempre en JS, usamos document.getElementByID
// busquemos un elemento canvas

// COMO CASI TODO, DEBEREMOS ESPECIFICAR QUE TIPO DE ELEMENTO HTML sera el que obtengamos
// y se hace con el prefijo as ---> "recibir elemento html cualquiera" as "elemento especifico" 
const canvas = document.getElementById('canvas') as HTMLCanvasElement

// SI FUERAMOS a recibir varios elementos refiriendo la busqueda por una clase, podemos hacerlo asi con el tipo HTMLCollectionof<elementohtml>
const canvas_ = document.getElementsByClassName('canvas') as HTMLCollectionOf<HTMLCanvasElement>

// esto es lo denominado ASERCION DE TIPOS

// pero ojo, dado esto, puede suceder que 1. devuelva null y rompamos nuestro codigo, o 2. que un elemento recibido sea de hecho un span (por ejemplo)
// esto sucede porque realmente typescript no tiene forma de saberlo una vez que se ejecuta, ya que solo sera javascript, por lo que hay que usar la ASERCION DE OTRO MODO (NO USANDOLO XD)

// para resolver esto, realmente podemos usar instanceof para detectar correctamente en tiempo real el tipo del elemento que recibimos
// esto es sin usar el AS (asercion)
// ejemplo
function recibirCanvas(elemento: HTMLCanvasElement) {
    // recordemos que instanceof es referido a las clases, por lo que es util para 
    // elementos del DOM
    if (elemento instanceof HTMLCanvasElement) {
        // aqui ya podriamos hacer algo con el elemento
        const contextoDelCanvas = canvas.getContext('2d')
    }
}
