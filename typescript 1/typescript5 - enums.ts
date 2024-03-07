// usando enums, podemos enumerar ciertas constantes, que por defecto vendran del 0 a un numero N
// ejemplo

enum TiposDeError {
    NOT_FOUND,
    UNAUTHORIZED,
    FORBIDDEN
}
// estos tipos de error, son constantes que en javascript se traducen como 0, 1, 2
// PODEMOS CAMBIAR el valor de las constantes igualandolas, si es de forma numerica
enum TiposDeError2 {
    NOT_FOUND = 'notFound',
    UNAUTHORIZED = 'unauthorized',
    FORBIDDEN = 'forbidden'
}

// si es de forma numerica, podemos inicializar la primer constante y las demas se iran 
// inicializando con un valor +1 del anterior
enum TiposDeError3 {
    NOT_FOUND = 1,
    UNAUTHORIZED, // 2
    FORBIDDEN // 3
}
// estas estructuras pueden ser utiles para cases o demas situaciones de varias opciones

// tambien podemos para hacer reverse mappings, por ejemplo

enum Jugadores {
    JUGADOR1,
    JUGADOR2,
    JUGADOR3
}
let pedro = Jugadores.JUGADOR2
let NumeroDeJugador = Jugadores[pedro]

// a veces se pude usar la siguiente expresion
// aplicar const hara que la compilacion se realice con menos codigo de javascript, pero
// no podremos realizar ciertas funciones como el reverse mappings de forma tan sencilla
const enum Jugadores2 {
    JUGADOR4 = 4,
    JUGADOR5,
    JUGADOR6
}



// se debe aclarar que tipodeerror es un tipo de la enumeracion tiposdeerror2
function mostrarError (tipodeerror: TiposDeError2) {
    if (tipodeerror === TiposDeError2.NOT_FOUND) {
        console.log("no se encontro el recurso")
    }
}


