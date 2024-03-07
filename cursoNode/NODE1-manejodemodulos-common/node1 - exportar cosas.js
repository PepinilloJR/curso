// si queres exportar un modulo, como por ejemplo el siguiente
function Sum2(num1, num2) {
    return (num1 + num2) * 2
}

function Sum3(num1, num2) {
    return (num1 + num2) * 3
}
// el modo clasico pero poco recomendado, es usar la variable global module
// en la cual accedemos a la propiedad exports, este metodo se llama CommonJS

// en ella, podemos exportar funciones, o para indicar correctamente el nombre de varias funciones
// le exportamos un objeto con todas las funciones 
module.exports = {
    Sum2,
    Sum3
}