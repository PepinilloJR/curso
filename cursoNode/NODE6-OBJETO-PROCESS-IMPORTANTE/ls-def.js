// vamos a hacer ahora un ls mas definitivo, como si fuera un ls -l
// tomando en practica todo lo aprendido y algunas cosas nuevas 
// de javascript

// usaremos await y async asi que debemos exportar los modulos para promesas
const { stat } = require('node:fs')
const fs = require('node:fs/promises')
const path = require('node:path')

const direccion = process.argv[2] ?? '.'

async function ls(dir) {
    // podemos usar varios try y catch para evitar confundir errores con otros
    // debemos definir a archivos por fuera del try porque si no, no sera accesible
    var archivos = []
    try {
        archivos = await fs.readdir(dir)
    } catch (err) {
        console.error('No se pudo leer el directorio porque: ')
        console.error(err)
        process.exit(1) // le indicamos que salio con error, es lo correcto
    }
    console.log(archivos)


    // aclaro que en .map, todo se hace en paralelo, asi que no podemos mostrar
    // la informacion directamente en el map, ya que no seria de forma secuencial
    // y darian resultados incorrectos
    const Datos = archivos.map( async (archivo) => {
        const dirArchivo = path.join(dir, archivo) // creamos la direccion del archivo para usar el fs con ese archivo
        var stats
        try {
            stats = await fs.stat(dirArchivo)
        } catch (err) {
            console.error(`no se pudo leer ${archivo}`)
            console.error(err)
            process.exit(1)
        }
        // aca guardemos que informacion queremos mostrar
        const tipo = stats.isDirectory() ? 'D' : 'F'
        const tam = stats.size
        // padEnd rellena con espacios para cumplir n letras
        return (`${tipo} ${archivo.padEnd(50)} ${tam.toString()}`)
    })
    // los valores que retorna el map dentro de los datos, son promesas
    // si queremos obtener sus valores, tenemos que usar await, 
    // pero no podemos usar --> 
    // const DatosFinal = await Datos  ---> porque no es una funcion que devuelva una promesa
    // para resolverlo, usamos Promise.all(datos)

    const DatosFinal = await Promise.all(Datos)

    DatosFinal.forEach( (info) => {
        console.log(info)
    })
}
ls(direccion)





