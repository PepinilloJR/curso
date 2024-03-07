import './estilos.css'


function Botones() {
    const ListaBotones = ['Edificios', 'Eventos', 'Asistencias', 'Posts']
    var prop = ListaBotones.map(function (texto, index){
        return <button key={index} className='boton'>{texto}</button>
    })
    return prop
}


export function CajaMenu() {
    return <>
        <menu className="menu">
            {Botones()}
            </menu>
    </>

}