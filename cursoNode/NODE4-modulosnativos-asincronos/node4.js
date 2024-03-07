// cuando usamos funciones asincronas, conocemos el uso de promesas
// donde usamos .then, los await, etc

// usar asincronas es mas optimizado ya que no se bloquea el uso del thread (multiprogramacion)

// los modulosnativos de Node sin embargo, tambien utilizan los callbacks para poder realizar funciones
// a espera de que una funcion asincrona se cumpla

const fs = require('node:fs') // si queremos manejarlos como promesas, incluimos 'node:fs/promises'


// podemos ver que la siguiente funcion se maneja con callbacks y de forma asincrona
fs.writeFile('archivo.txt', 'caca pedo pis', () => {
    fs.readFile('archivo.txt', 'utf-8' , (err, text) => {
        console.log(text)
    } )
})
// lo mas probable es que este console.log salga primero 
console.log('rataaaaa')


// con promesas, podemos hacerlo asi 
const fs2 = require('node:fs/promises')
const { default: test } = require('node:test')

// usando .then para manejar las promesas
fs2.writeFile('archivo2.txt', 'sexo sexo sexooooooo').then((err) => {
    fs2.readFile('archivo2.txt', 'utf-8').then(text2 => {
        console.log(text2)
    }) 
})

// si sucediera que un modulo no tiene la version de promesas, usamos promisify
const { promisify } = require('node:util') // asi podemos obtener solo una funcion de un modulo de NODE.JS
const { text } = require('stream/consumers')
const readFilePromiseVersion = promisify(fs.readFile) // ahora usando este, si readFile no tuviera version con promesas
                                                      // podria usarse readFilePromiseVersion que creamos con promisify

// podemos usar tambien los await y el async 
async function usoDeAwait() {
    await fs2.writeFile('archivo3.txt', 'sexo sexo sexooooooo2')
    text3 = await fs2.readFile('archivo3.txt', 'utf-8')
    console.log(text3)
}

usoDeAwait()