
import { createRequire } from 'node:module' 

import { Router } from 'express'
export const routerVid = Router()


const require = createRequire(import.meta.url)
const videos = require('./videos.json')


routerVid.get('/:titulo', (req, res) => {

    // recibo el parametro con req.params.titulo
    const titulo = req.params.titulo

    // filtro para buscar el objeto con el ID porque es una lista de videos
    const video = videos.find(objeto => objeto.titulo === titulo)
    res.json(video)
})