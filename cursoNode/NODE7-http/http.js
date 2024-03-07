// para crear un backend, y por lo tanto un servidor y demas
// podemos empezar usando el modulo de http de node

// http es un protocolo de transferencia de hipertexto (html)
// utiliza IP y TCP, http se usa generalmente para manejar
// clientes, servidores, proxies y generalmente para el desarrollo web

// http es un protocolo sin estado, no guarda informacion sobre 
// conexiones anteriores, esto es importante porque deberemos usar otros elementos
// como cookies u otros metodos del lado del cliente que pueda ayudar al servidad
// a "recordar"

const http = require('node:http')

// creamos el server como metodo del http, req es un request y res es un response 
// al y desde el servidor respectivamente 
const server = http.createServer((req, res) => {
    console.log('request received')
    res.end('hola ridicula')
})

// el servidor escucha, debe hacerlo desde un puerto, con listen
// determinamos su puerto y un callback para cuando empiece a escuchar
server.listen(27015, () => {
    console.log('server escuchando en el puerto', server.address().port)
})


