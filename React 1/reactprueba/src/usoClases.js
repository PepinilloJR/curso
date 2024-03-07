// una forma antigua de crear componentes era con clases
// actualmente se usan funciones como vimos ya que react 
// usa muchas tecnicas del paradigma funcional
// pero es posible crearlos con clases
// se debe realizar lo siguiente 

import { Component } from "react"

// EL extends refiere a que Presentacion hereda de la clase Component
export class Presentacion extends Component {
    // en el metodo render colocamos el return 
    render() {
        return <h1>Hola</h1>
    }

}
// luego, en el index, se usa como siempre, llamando a <Presentacion/>