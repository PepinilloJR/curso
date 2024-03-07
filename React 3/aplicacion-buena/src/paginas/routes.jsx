// aprovechando el conocimiento aprendido, continuamos con un concepto denominado routes
// usaremos este JSX con el nombre routes pero generalmente esto se escribe en el App o donde
// contengamos el menu con las rutas 

// importamos route, route debe instalarse como un paquete usando npm install react-router-dom 

// luego, se importa BrowserRouter, Route y Routes
import {BrowserRouter as Router, Route, Routes, Link, useParams, Outlet, NavLink} from 'react-router-dom'
import { Contacto } from './contacto'
import { About } from './about'


// con route, encerramos en esta el componente que queremos que se renderice segun una path
// escogida por nosotros sexo anal

// encerramos todos los Route en Routes, que se encarga de escoger que ruta entrar

// la ruta "/" es para el principal, es decir http://localhost:3000/ , debe definirse primero, luego, los demas debemos clarificarlos
// cabe aclarar que index sigue siendo la que se ejecuta ya que dentro tiene el render, todo esto al final debe ser pasado al render 
// que encierra todo esto en <BrowserRouter>
export function Menu() {
    // parametro path para escojer la ruta
    // parametro element para indicar que elemento renderizar en esa ruta
    
    // para que un boton nos lleve a la ruta, usamos Link, que hay que importar
    // y le introducimos el parametro to="" que define que ruta lleva el link
    // Link (es mejor usar navlink pero no me acuerdo porque, usalo y ya esta ) no hace navegacion, si no que fuerza una nueva URL a la pagina actual
    // es decir, es mas rapido y lo convierte en una Single Page App
    return <div>
        <menu>  
                <Link to="/" >
                    <button>Contacto</button>
                </Link>
                <Link to="/about">
                    <button>About</button>
                </Link>
                <Link to="/productos">
                    <button>productos</button>
                </Link>
        </menu>
        <Routes>
            <Route path='/' element={<Contacto/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/productos' element={<Listado/>}/>
            <Route path='/productos/:producto' element={<Producto/>}>
                <Route path='detalles' element={<Detalles/>} />
            </Route>
            <Route path='*' element={<h1>la pagina no existe</h1>}/>
        </Routes>
    </div>


}

// otra utilidad de router dom es el hook useParams()

// consideremos un componente que es una lista de productos, y que cuando cliqueamos en un link 
// de esos productos, nos manda a la pagina de ese producto

// para hacer esto dinamicamente, se complica bastante, ya que no queremos estar haciendo un path 
// para cada uno de esos productos y menos un componente para cada uno

// veamos como hacer esto con useParams()

// aqui devolvemos la lista a la que se accede en /productos
function Listado() {
    const lista = [
        'Bananas',
        'Manteca',
        'Coca-Cola',
        'Anfetaminas'
    ]
    var prop = lista.map(function (nombre) {
   
        // aca nos sirve bastante el uso de las comillas especiales `` para poder 
        // usar parametros de los strings
        // vemos que el to= se dirige a una direccion personalizada para cada 
        // producto dentro de productos, por lo que en el route haremos referencia a este 
        // del siguiente modo <Route path='/productos/:nombre'>, el nombre despues de los :
        // no tiene porque ser igual al que definimos aca, puede ser otro, como :producto
        return <Link key={nombre} to={`/productos/${nombre}`}>{nombre}</Link>
   
    }) 
    return prop
}

// ahora, para la pagina para cada producto, creamos su componente generico

function Producto(element) {
    // ahora usamos useParams()
    // useParams() leera la variable :producto del route que llama al elemento Producto
    // y lo guardara en el objeto producto que debe llevar el mismo nombre obligatoriamente

    const { producto } = useParams()
    // devolvemos un prop simple que muestra el nombre del producto seleccionado
    // el outlet indica donde se renderiza el componente de la ruta anidada a la ruta que lleva al producto
    return (<>
    <h1>{producto}</h1>
    <Link to="detalles">
                    <button>detalles</button>
                </Link>
                <Outlet></Outlet>
    </>
    )
}
// con este concepto en mente, podemos conocer lo que es una ruta anidada 

// si yo quisiera por ejemplo, hacer que desde un producto pueda ir a otro componente pero
// manteniendome en la URL personaliada de ese mismo producto ej: si /productos/queso
// y quiero ir a /productos/queso/parmesano, como usamos :producto, ya no es tan sencillo
// para ello usamos rutas anidadas, de modo que la ruta, ej queso, tiene anidada otras rutas relativas a queso
// 

function Detalles(){
    // al ser una ruta anidad, puede acceder a los parametros de su ruta padre
    const {producto} = useParams()
    return (
        <h1>detalles del {producto}</h1>
    )
    // luego, en el "componente padre" debemos definir donde se va a renderizar este componente detalles 
    // esto se hace usando el componente Outlet dentro del componente padre, no en el hijo o ruta anidada
}


// un dato util es el <NavLink/>
// este es nada mas que un link especial que ademas de hacer lo mismo que el link comun,
// tiene la capacidad de saber si esta activo o no, es decir, si estamos en la ruta que 
// el link nos envia, de este modo, podemos usar el metodo isActive 
// isActive es un parametro booleano que debemos pasarselo a NavLink en su parametro className

// algo asi

/*

<NavLink className={ function (isActive) {
    return isActive ? 'Active' : 'NotActive'

}}></NavLink>

de este modo, la clase del NavLink cambiara segun el valor de su isActive, pudiendo aplicarle un 
estilo diferente y asi el usuario puede saber en que pagina esta, que opcion toco, etc. */