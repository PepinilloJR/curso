// para ejecutar el archivo, se hace "node (direccion)"

console.log("eres un ratata")

// como en NODE no hay una ventana, objetos globales como WINDOW no son accesibles al ejecutar el JS en node
// para acceder a esos elementos, podemos usar en cambio, globalThis

// globalThis es una variable global para todo entorno, en el navegador, globalThis apunta a Window
// pero en Node.js a otro elemento, basicamente, globalThis es una variable u objeto global el cual contiene
// todos los elementos globales que solemos usar, como la consola por ejemplo, es una propiedad de globalThis
// |
// |
// v
globalThis.console.log(globalThis)
console.log(globalThis.window) // tambien contiene a window, pero aun asi no funcionara en node.js porque no hay ninguna ventana

// para importar un modulo, tenemos dos formas, la primera es la clasica (common JS) y no recomendada
const sum = require('./node1 - exportar cosas.js')

// en este caso exportamos un objeto con varias funciones
console.log(sum.Sum2(1,2))
console.log(sum.Sum3(1,2))
