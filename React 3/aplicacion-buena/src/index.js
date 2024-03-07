import React from "react";
import ReactDOM from 'react-dom/client'
import { useEffect, useState } from "react";
import {BrowserRouter} from "react-router-dom"
import { Menu } from "./paginas/routes";

const rootElement = document.getElementById('root')
// le indicamos a nuestro ReactDOM cual es el elemento root, o mas bien lo creamos
const root = ReactDOM.createRoot(rootElement)


// para el router, todo debe estar dentro de BrowserRouter a la hora de hacer el render
function Main() {
    root.render(
        <BrowserRouter>
        {Menu()}
        </BrowserRouter>
    )
}


Main() 