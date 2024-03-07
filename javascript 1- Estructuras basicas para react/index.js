// LA DEFINICION de variables es igual a python y C++
// las listas son tal que lista = [0,1,2,3,4,5], despues aprender bien sus metodos
// y los condicionales son similares a c++, hay algunos ejemplos
// el codigo puede ser indentado o con corchetes para indicar la pertenencia a distinstas
// estructuras de control y funciones


// Creacion de funciones 

function hola_mundo(texto, bola){
    console.log('hola mundo')
    console.log(texto)
    console.log(texto, bola)
    return "bolas"
}

bola = hola_mundo("caca", "pedo")
console.log(bola)

function funcion_objeto_funcion(para) {
    // una funcion puede devolver un objeto 
    // creado en el momento o tambien puede devolver otra funcion
    // con otro return
    return function (para2) {
        // las variables de la funcion anterior se heredan
        return para2+para
    }
}

// si se quiere llamar a la funcion dentro de la funcion 
// debemos hacer dos veces () una para la primera y otra 
// para la segunda, para sus parametros
console.log(funcion_objeto_funcion(4)(5))

// todos los valores de los parametros se inicializan en NaN (que es el null tipico)
// el tipo de valor se llama undefined 

// podemos cambiar el valor con el que se inicializan los parametros 
// igualandolo a un valor en su definicion

function condicional(para1, para2 = 1){
    if (para1 === undefined){
        return "No se definio nada"
    }
    else {
        return "vaya polla me llevas chaval"

    }

}


console.log(condicional())


// objetos de javascript
// usamos el valor constant, constant no puede ser reedefinido luego de haberle asignado valor
// por lo tanto, un constant debe ser inicializada con un valor justo despues de declararla
// esto no significa que el objeto pueda modificarse, pero siempre estara asignada al mismo objeto


nombre = "julio"
// podemos añadir como atributos del objeto variables de afuera de su declaracion
// si la variable lleva el mismo nombre que el atributo, ej: nombre: nombre
// entonces podemos acortar y solo poner:  nombre
const usuario = {
    nombre,  //asi se declaran las propiedades o atributos del objeto, separadas por comas
    apellido: "pedro",
    edad: 30,
    direccion: { //las llaves indican que lo que estamos igualando es un objeto, por lo tanto, podemos crear un objeto como atributo de otro objeto 
        calle: "humberto primo",
        pais: "dulce reino",
        lista: function () {
            return this.pais

        }
    },
    amigos: ["julian", "homero"],
    activo: true,
    // para los metodos, los definimos como un atributo, pero los igualamos a una funcion, donde definiremos que hace el metodo

    lista_atributos: function () {
        return [this.nombre, this.apellido, this.edad, this.direccion.lista()]
        // con this hacemos referencia al propio objeto, 
    }


}

// si no sabemos si el objeto tendra o no tendra un metodo o atributo definido, procedemos con
// condicionales del siguiente modo
if (usuario.lista_atributos){
    lista = usuario.lista_atributos()
}
// otra forma de ver esa condicional, por ejemplo, en la entrada de una funcion, usamos ? antes de llamar al atributo o metodo
console.log(usuario?.lista_atributos())

// asi se hace el tipico for, tambien existe el for ( i in lista) 
// la longitud del array se ve con .length
for (var i=0; i < lista.length; i++){
    console.log(lista[i])
}


// otra forma de crear funciones es de la siguiente forma, denominada
// arrow functions

const mostrar_holamundo = () => {
    return "hola gurdo"
}

// las arrow functions pueden implementarse inline, con el => como un return

const mostrar_mundoso = () => "hola gurdo"

// si quisiera devolver un objeto tendria que agregar parentesis para no confundir 
// el objeto con la sintaxis de la funcion

const mostar_objeto = () => ({nombre: "juan", edad: "sox"})


// si quiero reutilizar codigo en otros archivos, debo usar la funcion export

export function add(x, y) {
    return x + y

}
export function less(x, y) {
    return x - y

}

// tambien pueden exportarse variables, objetos, etc.

export const objeto = {
    nombre: 'sexo'
}

// luego, en el archivo para usar esa funcion, excribimos 
// import add from "direccion del archivo"
// si queremos varias, las llamamos dentro de un {}
// import {add, less} from "direccion del archivo"
// para que funcione, el script que se desea usar como modulo, debe agregarse al HTML con un 
// type="module"


