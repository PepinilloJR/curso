// vamos a usar uno de los nuevos paquetes para el LS

const picocolors = require('picocolors') // --> usamos requiere en este caso pero podemos usar como vimos con mjs export e import para node

const { stat } = require('node:fs')
const fs = require('node:fs/promises')
const path = require('node:path')

const direccion = process.argv[2] ?? '.'

async function ls(dir) {

    var archivos = []
    try {
        archivos = await fs.readdir(dir)
    } catch (err) {
        console.error(picocolors.red('No se pudo leer el directorio porque: '))
        console.error(err)
        process.exit(1)
    }
    console.log(archivos)

    const Datos = archivos.map( async (archivo) => {
        const dirArchivo = path.join(dir, archivo) 
        var stats
        try {
            stats = await fs.stat(dirArchivo)
        } catch (err) {
            console.error(picocolors.red(`no se pudo leer ${archivo}`))
            console.error(err)
            process.exit(1)
        }
        const tipo = stats.isDirectory() ? 'D' : 'F'
        const tam = stats.size
        return (`${picocolors.green(tipo)} ${picocolors(archivo.padEnd(50))} ${tam.toString()}`)
    })


    const DatosFinal = await Promise.all(Datos)

    DatosFinal.forEach( (info) => {
        console.log(info)
    })
}
ls(direccion)