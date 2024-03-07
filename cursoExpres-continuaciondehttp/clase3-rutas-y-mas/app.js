
// como estamos usando moduleJS recordar cambiar el type en el json a module

import express, { json } from 'express'
import fs from 'node:fs'
import { createRequire } from 'node:module' 


// importamos los routers 
import { routerImg } from './rutas/imagenes.js'
import { routerVid } from './rutas/videos.js'
import { CorsConf2 } from './middlewares/CORS.js'

const app = express()

app.disable('x-powered-by')

app.use((req, res, next) => {
    // aprovecho para configurar el CORS
    CorsConf2(req,res)
    next()
})

// en el middleware, aplicamos a cada router una ruta como raiz
app.use('/imagenes', routerImg)
app.use('/videos', routerVid)


app.use(json())


const PORT = process.env.PORT ?? 1234

app.listen(PORT, () => {
    console.log(`sas escuchando en http://localhost:${PORT} lmaoooo` )
})

app.get('/', (req, res) => {
    // puedo usar un send alternativo para json que es .json')
    res.status(200).json({ message: 'pagina principal' })

})



