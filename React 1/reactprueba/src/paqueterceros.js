// si quiero usar paquetes de terceros, segun la documentacion importo lo nescesario, 
// por supuesto luego de haber instalado los paqutes con el nodejs

// en este caso, estoy importando un icono de icons 8 Linea Awesome (lia) de react icons
// el nombre del icono podemos encontrarlo en su pagina o con autocompletado
import { LiaBackspaceSolid } from "react-icons/lia";

import './estilos.css'

export function Icono() {
    // llamamos al icono como una funcion cualquiera en REACT 
    return <span className="icono">
        <LiaBackspaceSolid/>
    </span>

}