// mas o menos vimos el uso de Response, pero nada de request (peticion)


// request es lo que pide el que se conecta al servidor
const http = require('node:http')
const { Stream } = require('node:stream')


const Puerto = 1234
const server = http.createServer((req, res) => {

    console.log('recibido')
    
    // las request se originan de un cliente, por ejemplo, desde un fetch
    // este fetch contendra datos en un objeto, estos datos o propiedades son las siguientes

    // URL -- URL que uso el cliente para hacer la peticion
    console.log(req.url)
    // HEADER -- conjunto de datos de contexto 
    // que vienen con la peticion, que la modifican y cambian su formato
    // por ejemplo, podria aparecer 'Content-Type': 'application/json',
    // lo que nos indica que el cliente nos envia informacion en formato JSON
    console.log(req.headers['user-agent'])

    // METHOD -- metodo usado en la peticion (como GET, POST, PUT, DEL)
    // con esto podemos distinguir que hacer segun una URL
    // por ejemplo, la de edificios, si quiero eliminar, guardar, etc
    console.log(req.method)

    // BODY -- el body es informacion que el cliente envia, si uso en el header las claves 'Content-Type': 'application/json',
    // entonces proablemente el body sea un objeto con el formato de json
    // el body no puede obtenerse con req.body, no existe
    // lo que si podemos es conseguir la salida del body usando una especia de pipeline, que veremos 
    // debemos saber cuando los datos esten siendo enviados, a travez de un stream (flujo de datos), por lo que 
    // usamos req.on con el evento data (recibiendo datos)
    // (recomiendo investigar cada evento de los request)

    var body = {} // tenemos que ir conformando los datos segun se van enviando
    req.on('data', (trozo) => {
        body += trozo
        objeto = JSON.parse(body) // con JSON.parse convertimos lo recibido en un objeto JSON
        console.log(objeto)
    })
    

    // como somos capaces de conocer la ruta, podemos implementar diferentes respuestas dependiendo 
    // de que ruta estamos consultando (por ejemplo en un fetch)

    if (req.url === '/') {

        // respuestas

        res.statusCode = 200 // el statusCode representa el estado de la salida, 200 es OK
                             // si la pagina no existe, podriamos enviar 404
        
        // LAS RESPUESTAS TAMBIEN TIENEN HEADER, BODY Y DEMAS COSAS QUE TAMBIEN TIENE LA PETICION

        // con setHeader podemos crear un valor del header propio
        // primero va el nombre, luego el contenido
        // existen diferentes headers que le dan cambios a la respuesta
        // por ejemplo, en content-type, se indica el tipo de medio
        // de la respuesta, junto al charset por ejemplo por si fuera html, texto plano
        res.setHeader('Content-Type', 'text/html; charset=utf-8') //--> podemos verlo en red
        // existen diferentes headers en el estandar HTTP
        res.write('')
        // como le en el header que el tipo de contenido era html, podemos formatearlo como tan
        // en su salida
        res.end('<menu>culo ñordo <button> hola </button></menu>')
    }
})

server.listen(Puerto, () => {
    console.log('server escuchando en', Puerto)
})

//si bien vimos que el createServer ya empieza con la posibilidad de manejar cada 
// request, se vuelve todo muy desargonizada, podemos dividir en cambio, usando server.on
// con el evento request, cada tipo de request, solo para ordenar mejor las cosas


// podemos crear distintos server.on, que quizas sea mas legible asi 
// el callback toma el request y la respuesta
server.on('request', (req, res) => {
    // aqui podemos hacer lo que queramos con la req e indicar una respose
    console.log(res.headers)
}) 

