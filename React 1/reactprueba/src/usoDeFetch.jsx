// para tomar datos del backend, consideramos usar la API del navegador
// fetch, ya vista en JS

// consideremos un boton que muestra los datos del siguiente JSON
// https://jsonplaceholder.typicode.com/users



export async function ButtonBacks2() {
    // introducimos la funcion async dentro de la funcion y no hacemos a la misma en async porque react espera una funcion normal cuando queramos 
    // mandar su retorno al Render
    var listado = []
    var cap
    async function sinc () {
        // await pausa la funcion hasta que se complete una promesa
        const respuesta = await fetch("https://jsonplaceholder.typicode.com/users")
        //json() devuelve el arreglo de objetos de la respuesta json
        const lista = await respuesta.json()
        //console.log(lista)
        lista.forEach(function (elemento) {
            //console.log(elemento)
            //listado.push(elemento)
        }

        )
        // ojo, cuando retornamos lista, es la promesa de una lista, no la lista misma
        return <h1>{lista}</h1>
    }
    // para tomar el array y no la promesa, indicamos con then para que cuando finalmente tengamos el array, recien ahi intentar recorrerlo
    //sinc().then( function (array) {
    //    array.forEach(function (elemento) {
    //        console.log(elemento)
    //        listado.push(elemento)
    //    });
    //})

}

// antes de considerar el siguiente ejemplo, hay que asegurarse de conocer bien callbacks, async await y
// todo el concepto de promesas

// esta parte va a ser una explicacion mas orientada a javascript que ha react, pero es util porque 
// es lo que vamos a usar

// concepto de callback, no lo entiendo, lo voy a usar


// concepto de promesa
// cuando ejecutamos una funcion que sabemos es asincrona, es decir, JS no se frenara hasta que termine 
// si no que asume que el backend se encargara de su devolucion, la devolucion de esta sera una Promise , pueden suceder cosas graciosas
// por lo tanto, luego de la funcion asyncrona, llamamos a un metodo en esta denominada .then()
// la cual toma como parametro una funcion cuyos parametros son para la salida de la primera funcion asyncrona inmediata

// ej : fetch("https://jsonplaceholder.typicode.com/users").then( function (respuesta) { algo })

// una llamada a una funcion de estas podria enviar un error, para ello se usa .catch, que toma una funcion que manejara ese error.
// ej : fetch("https://jsonplaceholder.typicode.com/users").then( function (respuesta) { algo })
// fetch("https://jsonplaceholder.typicode.com/users").then( function (respuesta) { algo }).catch( function (error) { algo })

// luego, si en el then se crea otra funcion asincrona, es cuestion de que esta retorne una promesa, entonces luego del then() podemos colocar otro then() para manejar ese otro return
// algo asi  
// fetch("https://jsonplaceholder.typicode.com/users").then( function (respuesta) { return promesa }).then( fuction (respuesta) {algo} ).catch( function (error) { algo }) 
// el catch que ahora esta precedido por dos then, tomara el posible error de ambos, cualquiera de los dos que mande error, ese catch lo tomara


// concepto de async - await

// las funciones que sabemos tendran promesas, las definimos con async -> async function nombre () {}
// dentro de estas funciones, toda funcion que sea asincrona, debe ser llamada con await, await esperara 
// a que se reciba algo del backend antes de continuar con otras funciones por debajo 

// para percibir los errores, corremos el codigo en un encasillado denominado try { funcion asincrona }
// y la funcion para errores en catch(error) { funcion error }

// si bien en react no es posible mandar al render objetos promesa, podemos crear una funcion async main() en el index que 
// si podemos hacerla async, asi, recibimos retornos de funciones async con wait y luego estas ya podremos mostrarlas en el render

// un ejemplo

export async function ButtonBacks() {
    var array = []
    const respuesta = await fetch("https://jsonplaceholder.typicode.com/users")
    const lista = await respuesta.json()
    await lista.forEach( function (elemento) {
        array.push(elemento.name)
    }
    )
    return array
}

// una nota importante, que podes consultar mejor en la carpeta react 2 en el javascript llamado
// posts, usando los hooks useState, si queremos aplicar un cambio en una funcion async a una variable
// como puede ser una lista que se actualiza en una funcion async, debe efectuarse con setLista dentro
// de la funcion async, y no se pasara como promesa, ver el ejemplo en posts.jsx de react 2 
