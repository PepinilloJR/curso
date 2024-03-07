// una cosa importante de node.js 
// y en general de javascript, es que podemos
// manejar promesas en paralelo, de este modo
// podemos sincronizar dos funciones asincronas para que se 
// resuelvan al mismo tiempo, de modo que justamente entre estas dos
// podamos menejar el orden en el que trabajan, veamos el ejemplo

const fs = require('node:fs')

// Promise.all crea un array de promesas que cuando se resuelven
// todas las promesas dentro del array
// se devuelve un array de resultados 

Promise.all([
    fs.readFile('./archivo.txt', 'utf-8'),
    fs.readFile('./archivo2.txt', 'utf-8'),
    fs.readFile('./archivo3.txt', 'utf-8')

]).then( ([text1, text2, text3]) => {
    console.log(text1)
    console.log(text2)
    console.log(text3) // vamos a ver que el orden en este caso va a ser como el que indicamos, esto es natural ya que es 
                       // la utilidad de hacerlo en paralelo 
})