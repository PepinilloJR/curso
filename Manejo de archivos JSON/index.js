// teniendo un objeto, tenes una forma de convertirlo a JSON

const objeto = {
    nombre: 'Julio',
    edad: 30,
}

// teniendo el objeto, para crear el JSON con el objeto

const objeto_json = JSON.stringify(objeto)

// si tuviera un string con formato JSON, puedo convertirlo en objeto con la funcion parse

const objeto2 = JSON.parse(objeto_json)


console.log(objeto_json)

// Javascript no puede modificar los JSON de un servidor, pero si puede leer sus datos y enviar otros datos JSON si el 
// api del servidor lo permite

// Si queremos traer datos, usamos fetch

async function traerDatos() {
    const respuesta_servidor = await fetch('/objetos.JSON')
    // nos dara datos en JSON como un array que para convertir a un array de objetos de JS
    // usamos el metodo .json()
    const datos = respuesta_servidor.json() // y esto es un array de objetos 

}
