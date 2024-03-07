//continuemos con los union types, otro tipo de type (xd) 

// este tipo nos indica que un tipo escala puede ser cualquierda de los siguientes
type escala = 'chico' | 'mediano' | 'grande' | 'mas grande'

//luego, tenemos el intersection type, que similar al anterior que era un OR, aqui es un AND
// y puede servirnos para crear tipos de objetos a partir de dos tipos de objetos de una forma
// interesante y comoda


// ejemplo


// las clases son ejemplos pero no tienen puto sentido jaja
type ClaseNegativos = {
    valor: string
    conjunto: {
        signos: string
        desplazo: number
    }
}

type ClaseNaturales = {
    valor: number
}

// definimos entonces la intersection type entre los naturales y los negativos

type NumerosEnteros = ClaseNegativos & ClaseNaturales


// ahora no solo podemos combinar dos tipos, pero tambien podemos reutilizar partes de un tipo
// para definir a otro, con lo que se llama type indexing 

// ejemplo

// vemos que solo tomamos la propiedad conjunto del tipo ClaseNegativos
const valorNegativo: ClaseNegativos["conjunto"] = {
    signos: '-',
    desplazo: 4
}


// luego tenemos el operador typeof, en javascript retorna el tipo de su objeto
// en typescript, usandolo bajo el contexto de la definicion de un type, podemos usarlo
// para definir el tipo de un type en base a un objeto ya existente, como puede ser un string o una funcion

let s = "hello"
type n = typeof s //---> type n: string

function crearDireccion() {
    return {
        planet: 'tierra',
        city: 'barchelona'
    }
}

// a su vez, typeof combinado con otros operadores como puede serlo ReturnType puede ser util
// ReturnType devuelve el tipo del return de un tipo funcion, no directamente de la funcion, si 
// no de su tipo obtenido por un typeof

type Direccion = ReturnType<typeof crearDireccion>