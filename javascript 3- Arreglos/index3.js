const nombres = ['ryan', 'pedrito', 'ricardito']

// metodo foreach
// por cada elemento ejecuta una funcion que toma el elemento guardado en esa iteracion y lo pasa como parametro a la funcion, si lo indicamos como tal


nombres.forEach( function (name) {
    const boton = document.createElement("button")
    boton.innerText = name
    document.body.append(boton)

}
)

// metodo map
// el map hara lo mismo que foreach, pero retornara los valores del return en un nuevo arreglo
const newNombres = nombres.map( function (name) {
    return name+"queso"

}
)

// metodo find
// lo mismo que foreach, pero tomara el return que cumpla con una condicion indicada en la funcion

const nombreHallado = nombres.find( function (name) {
    if (name === "ryan") {
        return name
    }


}
)

// metodo filter
// es un map que funciona como un find, es decir, devolvera un arreglo con elementos que cumplan con la condicion

const nombresHallados = nombres.filter( function (name) {
    if (name !== "ryan") {
        return name
    }


}
)
// metodo concat
// concat concatena un conjunto de arreglos en uno solo, tambien agrega elementos al final del array

const concatenada = nombres.concat(newNombres, nombresHallados, nombreHallado)

// una forma similar es con el operador spread "..." 
const concatenada1 = [...newNombres, ...nombresHallados, ...nombreHallado]


console.log(newNombres)
console.log(nombreHallado)
console.log(nombresHallados)
console.log(concatenada)
console.log(concatenada1)

