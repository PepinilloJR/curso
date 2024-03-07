// si queremos exportar de forma moderna, usamos archivos .mjs
// que permiten el uso de exports e imports en node.js

export function pow(num, exp) {
    var resultado = 1
    for (let i=0; i < exp; i ++) {
        resultado = num * resultado 
    }
    return resultado
}