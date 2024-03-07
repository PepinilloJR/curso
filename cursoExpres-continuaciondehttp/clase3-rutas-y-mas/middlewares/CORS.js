// podemos separar el middleware y luego exportar su configuracion

import cors from "cors"

// ya que estamos, aqui hay una rapida configuracion de los origenes 
// aceptados, utilizando el paquete CORS  


// cors recibe un objeto con las diferentes configuraciones
// como si fuera un json
export const CorsConf = () => cors({

    // definimos el origen, en este caso con una funcion 
    // el origen se encuentra en el header del request
    // y asi cors decide si aceptar o no
    origin: (origin, callback) => {

    const ACCEPTED_ORIGINS = [
        'http://localhost:5173'
    ]

    if (ACCEPTED_ORIGINS.includes(origin)){
        // una vez sabemos que es un origen aceptado
        // devolvemos con el parametro callback
        // primero el error, que aca es null, porque no hay error
        // y como segundo true ---> aceptado
        //                false --> rechazado
        return callback(null, true)
    } 
    if (!origin) {
        // puede suceder que el servidor se llame a si mismo, en ese caso
        // el header no mostrara el origen, por lo que sera undefined
        // en tal caso, lo aceptamos como un descarte
        return callback(null, true)

    }

    // SI NO CUMPLE, rechazamos el pedido
    return callback(new Error('no permitido por CORS'))

   }

})


export const CorsConf2 = (req,res) => {
    // ahora sin usar el CORS
    const ACCEPTED_ORIGINS = [
        'http://localhost:5173'
    ]
    // accedo al origen
    const origen = req.header('origin')
    console.log(origen)
    if (ACCEPTED_ORIGINS.includes(origen)){
        // una vez sabemos que es un origen aceptado
        // devolvemos con el parametro callback
        // primero el error, que aca es null, porque no hay error
        // y como segundo true ---> aceptado
        //                false --> rechazado
        res.header('Access-Control-Allow-Origin', origen)
        res.header("Access-Control-Allow-Methods", 'GET, POST, PUT, DELETE, PATCH');
        res.header("Access-Control-Allow-Headers", 'Content-Type');
    } 
    else if (!origen) {
        // puede suceder que el servidor se llame a si mismo, en ese caso
        // el header no mostrara el origen, por lo que sera undefined
        // en tal caso, lo aceptamos como un descarte
        res.header('Access-Control-Allow-Origin', 'http://localhost:1234')
        res.header('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, PUT')
        res.header("Access-Control-Allow-Headers", 'Content-Type');
    }
}