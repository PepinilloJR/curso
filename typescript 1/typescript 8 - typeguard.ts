// un type guard es una funcion que usamos para comprobar que un objeto 
// es de un tipo, antes de proceder a trabajar con uno

// supongamos tenemos una situacion de un tipo general y uno especializado


type Personaje = {
    id: number
}

type PersonajeNintendo = {
    velocidad: number, 
    marca: string, 
    papa: number
}

type sonic = Personaje & PersonajeNintendo

// le indicamos que devolvera un booleano de personaje es sonic
function checkIsSonic(personaje: Personaje): personaje is sonic {
    // va a ser tipo sonic si contiene la propiedad velocidad
    // se deduce de la union entre personaje y nintendo
    return (personaje as sonic).velocidad != undefined
}

// ahora podemos usar el type guard que creamos para comprobar antes
// de realizar acciones con una instancia de sonic, sin errores en el
// javascript compilado
function jugar(personaje: Personaje) {
    if (checkIsSonic(personaje)){
        console.log(personaje.velocidad, personaje.id)
    }
}


// ahora continuamos con clases y una aclaracion sobre instance of

// clases -- las clases en javascript son prototipos, pero implementan todas las caracteristicas de 
// las clases como la herencia, propiedades privadas y publicas, constructores, etc


// clases en JAVASCRIPT (CON ALGUNAS COSAS DE TYPE) ---------------------

class Criatura {
    // propiedades
    vida: number
    // creamos metodos sin usar function, todo esto es de javascript
    // la funcion especial constructor para crear el objeto, permite recibir valores como parametros e instancia el objeto
    constructor(vida: number) {
        this.vida = vida
    }

    hablar() {
        console.log("bolas!!!")
    }
}

// puedo crear una subclase con el metodo extends
class Persona extends Criatura {
    // definimos propiedades, pueden ser readonly con typescript
    readonly nombre: string 
    edad: number
    private direccion: string // el private (de typescript) evita que se use la propiedad fuera de la clase
    // el unico problema es que no se compila, asi que si queremos que sea posta privada, usamos
    // el simbolo # antes del nombre y siempre para referirse a el
    #culo: number

    // protected es similar a private, pero si permite el acceso desde clases hijos, pero no en instancias de la clase
    protected chupar: boolean

    constructor(vida: number, nombre: string, edad: number) {
        // usamos el metodo super, que llama al constructor de la clase padre, por lo que 
        // le debemos pasar sus parametros correspondientes
        super(vida)
        this.#culo = 23
        // con this referenciamos a la clase o instancia de la clase
        this.nombre = nombre + this.#culo
        this.edad = edad
        this.chupar = true
        // lo siguiente no se permite en typescript, pero en javascript, de crear una propiedad
        // que no exite en el constructor, podemos usar un setter o un getter para accederlo
        this.sentidodelavida = null
    }
    // otros metodos
    nombreCompleto() {
        return this.nombre
    }
    // podemos redefinir el metodo hablar que era de criatura, polimorfismo papu
    hablar() {
        console.log("sin talco!!!")
    }

    // A SU VEZ, podemos definir metodos estaticos, los metodos estaticos pueden ejecutarse
    // sin instanciar un objeto, si no llamando directamente a la clase
    static quien() {
        console.log("Muchos dicen sapeeee yo digo quien te pregunto")
    }

    // getter para el sentido de la vida
    // la sintaxis es asi
    get getSentido() {
        return (this.sentidodelavida)
    }
    // setter para el sentido de la vida
    set setSentido(sentido: string) {
        this.sentidodelavida = sentido
    }
    // los setters y los getters se traduciran como una propiedad y no un metodo al ser llamados
    //  getSentido --> sin ()
    //  setSentid = valor --> sin ()
}


// para instanciar un objeto, llamamos a new, que llama al constructor de la clase para crearlo
const patricia = new Persona(10, 'juan', 10)

Persona.quien()
patricia.hablar()


// una cosa util es utilizar interfaces y clases con el metodo implements
// una interfaz y clase de mismos nombres (si queremos que no nos pida definir de nuevo las propiedades)

// en la interfaz defino las propiedades, esta podria colocarse en otro modulo y exportarse, para separarlo de las clases
// por comodidad, dentro de un archivo que debe ser .d.ts y no debe llevar codigo, solo interfaces y tipos
interface rata {
    nombre: string
    size: number
}

class rata implements rata {
    constructor(nombre: string, size: number){
        this.nombre = nombre
        this.size = size
    }

    batalla() {
        console.log("MUERTEEE")
    }
}