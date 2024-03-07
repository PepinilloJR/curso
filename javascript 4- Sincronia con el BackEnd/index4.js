// usaremos https://jsonplaceholder.typicode.com/ para tener datos de ejemplo

// usamos la libreria fetch , propia del navegador y javaScript, no de react
// le indicamos una direccion de donde obtener datos de backend, y lo igualamos a una variable
// recordemos que se ejecuta todo de forma asincrona, por lo tanto, se mostrara el console.log cuando se termine la funcion fetch, es decir la carga de los datos 
// entonces, para sincronizar correctamente, usamos .then() que se refiere a la finalizacion de una funcion, si queremos que se haga algo luego de la finalizacion del 
// .then, entonces le anidamos otro .then y asi, los then ademas, toman el return de la funcion anterior y se la pasa al parametro de la funcion interior del nuevo then
// cada cosa que se hace en el then, se separa con una coma, ya que es una funcion

// esto es un UL que creamos para poder mostrar los datos en el ejemplo, podrias hacerlo de otra forma
//const lista = document.createElement('ul')

//let usuarios = fetch('https://jsonplaceholder.typicode.com/users')
//                .then(function (response) {
//                    // response toma lo devuelto por la direccion a la que accedio fetch
//                    // luego, podemos cambiar el formato del response para poder leerlo correctamente
//                    // generalmente devuelve un arreglo de objetos
//                    return response.json()
//                    
//                    
//                }).then(
//                    function (data) {
//                        console.log(data)
//                        // recorremos el arreglo creando elementos li que llevan por innerText el nombre de usuario
//                        // de los objetos usuarios que estabane en el JSON
//                        data.forEach(function (elemento) {
//                            // AQUI ESTOY AGREGANDO LOS LI
//                            const li = document.createElement('li')
//                            li.innerText = elemento.username
//                            lista.append(li)
//                        }
//                            
//                        );
//                    },
//                    document.body.append(lista)
//                )


// una forma mas moderna y corta de manejar esta asincronia, es usando await
// await debe estar siendo usada dentro del contexto de una funcion async
// si sabemos que un metodo o funcion es asincrona, colocamos antes de llamarla un await, entonces 
// esperara a que el await anterior se finalice para despues ejecutar el await nuevo

// hagamos lo mismo que antes pero con await

const lista = document.createElement('ul')
async function loadData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    data.forEach(function (elemento) {
        // AQUI ESTOY AGREGANDO LOS LI
        const li = document.createElement('li')
        li.innerText = elemento.username
        lista.append(li)
        }
    )
    document.body.append(lista)
}

loadData()

