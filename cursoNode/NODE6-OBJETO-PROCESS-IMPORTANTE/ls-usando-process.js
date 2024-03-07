// podemos hacer un mejor ls con el objeto process aprendido

const fs = require('node:fs')

const direccion = process.argv[2] || '.' // aca podemos usar ?? que usa el segundo si el anterior es null o undefined

// usando callbacks
fs.readdir(direccion, (err, archivos) => {
    if (err) {
        console.error('directorio no existe o ingreso sin \'\' el texto')
        return
    }
    archivos.forEach(archivo => {
        console.log(archivo)
    })
})