// node.js tiene modulos nativos que permiten acceder 
// a cosas con las que generalmente JavaScript no tiene

// modulo OS
// podemos acceder a metodos e informacion del sistema operativo
const os = require('node:os')
console.log('Info de sistema operativo: ', os.platform())
console.log('mas: ', os.hostname())
console.log('release: ', os.release())
console.log('algo: ', os.cpus[0]) // solo funciona para distribuciones de linux, ya que lee /proc
console.log('memoria libre: ', os.freemem() / 1024 / 1024 / 1024)
console.log('uptime: ', os.uptime() / 60 / 60 / 24)

// modulo File System o FS
// podemos acceder al sistema de archivos
const fs = require('node:fs')
const { error, dir } = require('node:console')

const datos_archivo = fs.statSync('./archivo.txt') // statSync lee los metadatos de un archivo de forma sincrona, devuelve un objeto
console.log(datos_archivo.isFile()) // ver si es un archivo
var texto = fs.readFileSync('./archivo.txt', 'utf-8') // lee el archivo por defecto como un conjunto de bytes (buffer de bytes), 
                                                      // puede aclararse la codificacion que queremos para la lectura como segundo parametro
console.log("[", texto, ']')

// si queremos crear un archivo de forma sincrona, tenemos que usar writeFileSync, y toma los siguientes parametros
// | nombre | contenido | funcion que se ejecuta cuando finaliza de escribir (callback)
fs.writeFileSync('con', 'ricardo me la come', (err) => {if (err instanceof Error) {console.log(err)}})

// podemos crear un ls basico usando un metodo de fs
// denominador readdir, que devuelve una lista con los nombres de archivos
// de un directiorio indicado

function ls(directorio) {
    if (directorio == "") {
        fs.readdir('.', (error, archivos) => {
            if (error) {
                console.error('no existe el directorio')
                return
            }
            archivos.forEach((archivo) => {
                console.log(archivo)
            })
        })
    } else {
        fs.readdir(directorio, (error, archivos) => {
            if (error) {
                console.error('no existe el directorio')
                return
            }
            archivos.forEach((archivo) => {
                console.log(archivo)
            })
        })
    }
}

ls("D:\\Elden ring\\ELDEN RING\\Game")