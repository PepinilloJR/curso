
// Tipado fuerte de typescript -----------------------------------------------------------------------------------------------------------------------------------------------------------------------

// typescript es de tipado fuerte, por lo que nombre se queda com string
const nombre: string = "juan"

const ingorar: any = "rodriguez" // con any ignoramos el tipado de typescript

const persona: object = {
    name: 'Pedro',
    age: 30
}


// podemos indicar los tipos 
function suma(a: number, b: number) {
    return a + b
}

suma(3, 3)

// funciones y demas -----------------------------------------------------------------------------------------------------------------------------------------------------------------------

// si queres indicar el tipo de las propiedades de un objeto en una funcion, no podemos hacer con propiedad: tipo, ya que esa notacion es para igualar un valor 
// dentro de las propiedades de los objetos

// debemos usar la siguiente notacion 
function saludar({name, age}: { name: string, age: number}) {
    console.log(`Hola ${name}, tienes ${age}`)
}

saludar({ name: "Pedro", age: 1})


// puedo definir que retornaran las funciones tambien, del siguiente modo

function saludar2(nombre: string): number {
    console.log("basta", nombre)
    return 1
}

// veamos el siguiente callback, de paso usando las arrow functions de javascript

const saludarDeUnaFuncion = (funcion) => {
    return funcion("hola")
}

saludarDeUnaFuncion( (frase) => {
    console.log(frase)
})

// esto presenta problemas porque no declaramos nada y no se esta infiriendo los tipos
// lo correcto seria lo siguiente

// a funcion no podemos pasarle Function, porque seria demasiado general para la tarea especifica de nuestra funcion
// lo correcto seria lo siguiente

// indicamos que la funcion es una funcion, que toma como parametro un name: string, y que retorna void, es decir, nada o cualquier cosa

// es recomendable empezar a usar funciones tipo arrow para estas cosas, podemos hacer lo mismo con las otras pero es obvio que seria mas largo
const saludarDeUnaFuncion_fix = (funcion: (name: string) => void) => {
    return funcion("hola")
}

// definimos la funcion especifica que queremos para saludarDeUnaFuncion_fix
const decirFrase = (frase: string) => {console.log(frase)}

saludarDeUnaFuncion_fix(decirFrase)


// Errores y never -----------------------------------------------------------------------------------------------------------------------------------------------------------------------

// si sabemos que una funcion nunca va a devolver nada, es buena practica usar el tipo never
// por ejemplo, una funcion que muestra errores

function tirarError(mensaje: string): never {
    // esto es javascript, podemos usar throw para crear una exception
    // en este caso, estamos mostrando un nuevo objeto error con el mensaje 
    // usando un nuevo constructor de Error para crearlo

    throw new Error(mensaje)

    // hablando de errores, podemos usar distintos metodos de un error
    // aunque los siguientes comandos no se ejecutaran porque la funcion termina en el primer error
    const error: Error = Error("error")
    // podemos ver el nombre del error
    console.log(error.name)
    // podemos ver el mensaje del error
    console.log(error.message)
    // podemos ver la ruta del archivo que lo genero, y otra que dice el numero de linea, solo en firefox
    //console.log(error.fileName)
    //console.log(error.lineNumber)
    
    // podemos ver el tipo de error usando la palabra instanceof que indica true si el objeto anterior es una instancia de una clase o tipo de objeto indicado
    // ejemplos
    console.log(error instanceof EvalError) // error que ocurre de la funcion eval()
    //console.log(error instanceof InternalError) // si es un error interno de javascript (stackoverflow por ejemplo)
    console.log(error instanceof ReferenceError) // error por una referencia
    // hay muchos tipos de errores, y todos puede detectarse con instanceof

    try {
        // hacemos un try que tira un error por defecto, activando instantaneamente el catch para el ejemplo
        throw new ReferenceError("hay!!")
    } catch (e) {
        if (e instanceof ReferenceError){
            // detectamos que es por referencia, tira esto
            console.log("es un error de referencia")
        } else {
            console.error(e)
        }
    }

}