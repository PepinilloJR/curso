const express = require('express')

// similar a como incializabamos un server, aqui se incializa
// la 'app de express' con express()
const app = express()

// configuramos el puerto
app.listen(4000, () => {
    console.log("escuchando en el puerto http://localhost:4000")
})

// las respuestas agregan una 'marca de agua' al header, que puede ser quitado
app.disable('x-powered-by')


// mas adelante explicabamos que USE se usa para determinar que 
// hacer en el middleware 
// (basicamente una operacion despues del request pero antes del response)

app.use((req, res, next) => {
    // puedo crear un middleware para filtrar entre requests
    // o incluso modificar el request antes de que express lo reciba

    // para este ejemplo solo hagamos un console.log()
    console.log('hola')
    
    // next nos indica que la peticion puede continuar, es decir, finalizar 
    // el middleware
    next()    

    // a su vez, existen muchos metodos de express para optimizar la creacion de 
    // middlewares, se acceden colocando como callbacks un metodo de express
    // al estilo app.use(express.json())

})


app.use(express.json()) // -> middleware que a toda request con contenido json le hace parse antes
                        // de pasarlo




// con express, no debemos filtrar desde una request 
// accediendo al header para saber el url, metodo, etc
// podemos utilizar las diferentes funciones para cada metodo
// como son las siguientes

// el callback debe recibir el req y la res
app.get('/prueba', (req, res) => {
    // especificamos ciertas cosas para la res

    // podemos ver que en res, debemos especificar 
    // el status y luego el contenido con un .send

    // lo interesante, es que infiere el content-type y 
    // por lo tanto, no nescesita modificar el header 
    res.status(200).send('<h1>pagina loca</h1>')


})

// para errores como 404, como no estamos usando el elemento URL directamente
// podemos tratarlo de forma global de forma ordenada, es decir, el metodo para el 404
// debe ser el ultimo de los metodos del propio app


// app use configura el middleware que usa express, si le indicamos sin una URL especifica
// para todo URL que no hayamos especificado antes, lo tomara en cuenta y realizara el callback
app.use((req, res) => {
    res.status(404).send('<h1>ERROR 404, QUE MIERDA HACES</h1>')
})
