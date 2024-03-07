// ahora usamos un protocolo mas rapido que https, denominado net
// podemos crear una forma dinamica para detectar un puerto, usando diferentes herramientas


const { rejects } = require('node:assert')
const net = require('node:net')
const { resolve } = require('node:path')

function encontrarPuerto (puertoDeseado) {
    // usamos Promise, promise es una promesa que se resuelve con otra promesa, esto se hace con
    // un parametro denominado resolve, resolve devuelve un valor pasado como argumento, que se obtubo de una funcion 
    // y este sera el valor de la promesa cuando se cumpla la promesa de resolve 
    
    // promise toma de parametro una funcion que toma a resolve y a rejects
    // rejects es otro callback que se llama cuando se rechaza la promesa por algun error
    return new Promise((resolve, rejects) => {
        // esta es la funcion que da valor al resolve
        
        //definimos un server temporal para probar el puerto
        const server = net.createServer()
        
        // intentamos iniciar con el puerto deseado
        server.listen(puertoDeseado, () => {
            // extraemos el puerto del server
            const port = server.address().port
            // ahora, podemos cerrar el server con server.close() que puede pasarse un callback que se 
            // ejecutara cuando se cierra
            server.close(() => {
                // resolvemos la promesa con el port deseado, ya que esta disponible
                resolve(port)
            })
        })
        // luego, si no se encuentra el puerto, dara error, como sabemos, todo modulo de NODE
        // tiene una funcion .on que detecta eventos y que hacer en estos casos con un callback
        server.on('error', (err) => {
            // ESTE es el codigo que resulta si el puerto esta en uso
            if (err.code === 'EADDRINUSE') {
                console.log('el puerto pedido no esta disponible, iniciando con otro')
                // resolvemos con cero, si listen toma el valor de cero, buscara el primer puerto disponible
                resolve(0) 
            } else {
                // si da otro error, sera que no hay puertos disponibles u otra cosa, ahi llamamos a rejects
                // para indicar porque se rechazo la promesa
                rejects(err)
            }
        })
    })
}

const server2 = net.createServer((req, res) => {
    res.end('hola')   
})
// encontrar puerto devuelve una promesa, asi que usamos then
encontrarPuerto(3000).then((puerto) => {
    server2.listen(puerto, () => {
        console.log("escuchando en", server2.address().port)
    })
})
