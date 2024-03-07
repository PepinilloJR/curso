import { createContext, useState } from "react";


export const DataContext = createContext();


export const DataProvider = function ({ children }) {
    // el componente Provider del DataContext es el que se encarga de 
    // enviar el DataContext a todos los componente hijos de este, que 
    // denotamos como children 

    // podemos crear un Estado por ejemplo, y que este sea compartido a todos los children

    const [data, setData] = useState(5)

    // luego, los valores que queremos compartir, lo devolvemos como un objeto con las variables y funciones
    // que queremos compartir, usando el parametro value del Provider 
    // al final, el componente DataProvider debe encerrar a todos los demas componentes que usan su contexto
    return (
        <DataContext.Provider value={
            {
                data,
                setData
            }   
        }>
            {children}
        </DataContext.Provider>
    )
}