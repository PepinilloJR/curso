// incluimos al modulo nativo path

const path = require('node:path')

// es importante el manejo de rutas de forma dinamica
// recordemos que windows usea \ y unix usa /

// podemos ver que separador usa usando path.sep
console.log(path.sep)

// para crear rutas de forma segura y dinamica, usamos path.join()
// le vamos dando como argumentos cada
const DireccionArchivo = path.join('.','content', 'subfolder', 'archivo.txt')
console.log(DireccionArchivo)

// basename devuelve el nombre de un fichero pasandole su direccion, si especificamous
// un segundo parametro, se va quitando letras desde el final, podemos usarlo para quitarle la extension

// tecnicamente devuelve la ultima porcion de una direccion string
const base = path.basename(DireccionArchivo, '.txt')
console.log(base)

// podemos obtener la extension de forma correcta usando path.extname()
const extension = path.extname(DireccionArchivo)
console.log(extension)