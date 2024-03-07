// para scripts que manejaran funciones asyncronas, sera necesario usar la extension .mts asi para poder exportar o importar modulos

// hagamos el tipico fetch para una base de datos 
try {
    const response = await fetch("http://localhost:3000/lista")
    const datos: Array<object> = await response.json() // podemos ver que datos es tipo any, lo que complica las cosas
    // incluso se colocamos que es un array de objetos, que sucede con las propiedades de cada objeto y asi?

} catch (error) {
    console.error(error)
}

// hay que declarar correctamente los tipos de toda la estructura de datos

type Item = {
    numeroaula: number
    edificio: string
    capacidad: number
}

type ListaDatos = Item[]

try {
    const response = await fetch("http://localhost:3000/lista")
    const datos = await response.json() as ListaDatos // usando el as para indicar el tipo ListaDatos
    // ahora datos tendra todos los tipados correctos y ademas, autocompletara ciertas cosas ya que 
    //reconoce todos los items y sus tipos

    datos.map((item) => {console.log(item.edificio)})
    // debemos considerar que de nuevo, esto no valida los tipos de ningun modo, por lo que si la base de datos
    // da un dato incorrecto para lo que sea que los usemos, podria resultar en error

} catch (error) {
    console.error(error)
}


// veamos un nuevo elemento de typescript

// interfaces 

// las interfaces son como los types, pero permiten ciertas propiedades que pasaremos a notar

// interfaz normal, no se utiliza =

interface carro {
    ruedas: number,
    asientos: number
}

// podemos extender de una interfaz al crear otra, no ncesitamos declarar de nuevo ruedas y asientos
// para ello usamos la expresion extends, similar al usar interseccion con los types pero mejor, ahorra mas texto

interface carrFerrari extends carro {
    modelo: string
}

// a su vez, por alguna estupida razon, podemos seguir definiendo carrFerrari mas adelante

interface carrFerrari {
    precio: number
    conducir: (posicion: number) => void // puedo definir una funcion que tomara numbers y no retorna
}

// instanciemos un objeto auto que sera un carrFerrari

const auto: carrFerrari = {
    ruedas: 4,
    asientos: 4,
    modelo: 'deluxe',
    precio: 400,
    conducir: (posicion) => {console.log(posicion + 1)} 
}

// las iterfaces no pueden ser usadas para crear tipos mas primitivos 