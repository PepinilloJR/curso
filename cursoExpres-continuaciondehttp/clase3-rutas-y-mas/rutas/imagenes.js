import fs from 'node:fs'
import { createRequire } from 'node:module' 

// un router nos permite dividir y administrar de mejor forma nuestras rutas
// es como una interfaz que mueve la raiz a, por ejemplo, la ruta de imagenes
// por lo que esta puede ser tratada como la ruta raiz, a partir del router (y no del app, que es el principal)


// en cambio, en el middleware de app, que nuestro modulo de express principal, debe ser llamado un router para una direccion especifica
// esto se ve en app.js, ir ahi para ver como es


import { Router } from 'express'
export const routerImg = Router() // inicilizamos el router, recordar exportarlo para poder usarlo en App

const require = createRequire(import.meta.url)
const imagenes = require('./imagenes.json')

routerImg.get('/', (req, res) => {
    // extraemos los parametros que queremos usar
    const { nombre, esgrande } = req.query
    let ImagenFiltrada = imagenes
    if (nombre) {
        ImagenFiltrada = imagenes.find(imagen => imagen.nombre === nombre)
    }
    res.json(ImagenFiltrada)
})


routerImg.post('/', (req, res) => {
    console.log("hola")
    const {
        nombre,
        esGrande
    } = req.body // como usamos en el middleware express.json()
                 // no es nescesario usar on.data y recoger cada chunk
    console.log(req.body)

    if (typeof nombre === 'string' && (esGrande === "true" || esGrande === "false")) {
        const nImagen = {
            id: (length + 3),
            nombre: nombre,
            esGrande: esGrande
        }
        imagenes.push(nImagen)
        fs.writeFile('./imagenes.json', JSON.stringify(imagenes), (err) => {
            console.log(err)
        })
        res.status(201).json(nImagen)
    } else {
        res.status(400).send("los valores ingresados no cumplen con los requisitos")
    }
    
})

routerImg.patch('/:id', (req, res) => {
    const id = req.params.id

    // como manejamos una lista, en vez de encontrar la imagen, buscamos su indice
    // en la lista, buscandolo con el ID que ingresa el cliente
    const imagenIndex = imagenes.findIndex(imagen => imagen.id === Number(id))

    if (imagenIndex === -1) {
        return res.status(404).json({ mensaje: "imagen no encontrada"})
    }
    // ahora que sabes que existe la imagen, la obtenemos 
    const imagen = imagenes[imagenIndex]
    // obtenemos los valores que ingreso el cliente
    const {nombre, esGrande} = req.body
    if (typeof nombre === 'string' && (esGrande === "true" || esGrande === "false")) {
        const nImagen = {
            id: imagenes[imagenIndex].id,
            nombre: nombre,
            esGrande: esGrande
        }
        imagenes[imagenIndex] = nImagen
        fs.writeFile('./imagenes.json', JSON.stringify(imagenes), (err) => {
            console.log(err)
        })
        res.status(201).json(nImagen)
    } else {
        res.status(400).send("los valores ingresados no cumplen con los requisitos")
    }
})


routerImg.delete("/:id", (req, res) => {
    const id = req.params.id
    const imagenIndex = imagenes.findIndex((imagen) => {
        //console.log(typeof id, id)
        //console.log(typeof toString(imagen.id), imagen.id)
        return imagen.id === Number(id)})
    console.log(imagenIndex)
    if (imagenIndex === -1) {
        return res.status(404).json({ mensaje: "imagen no encontrada"})
    } else {
        const nuevoImagenes = imagenes.splice(imagenIndex, 1) 
        fs.writeFile('./imagenes.json', JSON.stringify(imagenes), (err) => {
            console.log(err)
        })
        res.status(200)
    }
})