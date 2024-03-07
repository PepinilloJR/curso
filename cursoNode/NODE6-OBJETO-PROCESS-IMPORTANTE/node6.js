const os = require('node:os')

// otro objeto global de node es process
// con este accedemos a caracteristcas del proceso actual y de demas procesos

// podemos acceder a los argumentos de entrada con process.argv
// retorna una lista con todos los argumentos
// los primeros dos son el node y el otro el archivo.js ejecutado por node
console.log(process.argv)

// con process podemos considerar callbacks para eventos del proceso
// para eso usamos .on('evento', funcion)
process.on('exit', () => {
    //limpio la consola
    console.clear()
})

// podemos manejar variables de entorno, como en linux padreee
console.log(process.env.VARIABLE)

// podemos salir 0 -> todo bien
//         salir 1 -> con errores
// usamos .exit(0|1)
process.exit(1)