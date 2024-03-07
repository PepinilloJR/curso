import React from "react";
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { Route, Routes, Link, useParams, Outlet, NavLink} from 'react-router-dom';

import { Aplicacion } from './rutas.jsx'

// https://jsonplaceholder.typicode.com/posts

const rootElement =  document.getElementById('root')
const root = ReactDOM.createRoot(rootElement)


function App() {
    root.render(
        <BrowserRouter>
            <Aplicacion/>
        </BrowserRouter>
    )

}

App()