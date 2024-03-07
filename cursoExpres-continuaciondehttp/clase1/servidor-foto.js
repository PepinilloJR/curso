const http = require('node:http')
const fs = require('node:fs')
const { json } = require('stream/consumers')

const server = http.createServer()
server.listen(4000, (server) => {
    console.log('escuchando en http://localhost:4000/')
})

server.on('request', (req, res) => {
    console.log(req.url)
    if (req.url === '/imagen') {
        console.log('hola')
        // vamps a entregar una imagen, para ello, seteamos un header 
        // correspondiente
        res.setHeader('Content-Type', 'video/mp4')
        // archivos como videos, son manejados como un dato tipo buffer de bytes
        // los binarios de este dato son enviados al navegador con el header correspondiente
        // con esto, el navegador lo transformara en un video

        // de la misma forma, podemos enviar este buffer al cliente y que lo maneje de forma similar
        const imagen = fs.readFile("./sas.mp4", (err, video) => {
            res.end(video)
        })
    }
})

// ahora veamos ejemplos con los metodos
server.on('request', (req, res) => {
    const method = req.method
    const url = req.url

    var body = ''

    // con el siguiente switch voy a ir filtrando seguin que metodo haya elegido la peticion
    switch(method) {
        case 'GET': {
            switch(url) {
                case '/jsonn': {
                    // mostramos valores de un JSON, en este caso leyendolo con fs
                    res.setHeader('Content-Type', "text/html")
                    fs.readFile("./archivo.JSON", (err, data) => {
                    // convertimos el binario en un objeto JSON
                    console.log(JSON.parse(data))
                    const lista = JSON.parse(data)

                        // tomamos un valor del objeto
                    const valor = lista[1].BOLAS
                    console.log(valor)
                    // lo mandamos como un HTML, si el content type hubiera sido aplication/json
                    // se descargaria un archivo
                    res.end(`<h1>${valor}</h1>`)
                    })
                    break
                }
                case '/json/download': {
                    // en este caso, descarga el json
                    res.setHeader('Content-Type', "aplication/json")
                    fs.readFile("./archivo.JSON", (err, archivo) => {
                    console.log('descargando...')
                    res.end(archivo)
                    })
                    break
                }
            }}
        case 'POST': {
            switch(url) {
                case '/post': {
                        var objeto = {}
                        // voy creando el body con el stream 
                        req.on('data', (chunk) => {
                            body += chunk
                        })
                        // cuando termina la peticion, el evento es 'end'
                        req.on('end', () => {
                            // parseo body una vez ya completo en el objeto
                            objeto = JSON.parse(body)
                            // aqui abria que ampliar la base de datos
                            // pero para este tema, se va de las manos
                            // por ahora mostrar que es posible obtener el objeto
                            console.log(objeto.EDAD)
                        })

                    } 
                }
            }
        }

})