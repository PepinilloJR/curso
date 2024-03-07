// esta es la misma api del video y del json

const express = require('express')
const fs = require('node:fs')

const app = express()

app.listen(4000, () => {
    console.log("escuchando en puerto http://localhost:4000")
})


// convierte directamente en datos de un objeto si estan haciendo post
// en este caso lo hacemos en el middleware para ponerlo en practica
app.use('/post', (req, res, next) => {
    if (req.method == 'POST') {
        let body = ''
        req.on('data', (chunk) => {
            body += chunk
        })
        req.on('end', () => {
            const data = JSON.parse(body)
            req.body = data
            next()
        })
    } 
})

// se podria haber hecho con app.use(express.json())


app.get('/video', (req, res) => {
    fs.readFile("./sas.mp4", (err, video) => {
        if (err) {
            console.log(err)
            return 
        }
        // en este caso hizo falta aclarar el content-type porque inferia que estamos mandando el archivo 
        // y no reproduciendolo
        res.setHeader('Content-Type', 'video/mp4')
        res.status(200).send(video)
    })
})


app.post("/post", (req, res) => {
    const Datos = req.body
    res.status(201).send(Datos)
    console.log(Datos)
})


app.use((req, res) => {
    res.status(404).send('<h1>ERROR 404, QUE MIERDA HACES</h1>')
})