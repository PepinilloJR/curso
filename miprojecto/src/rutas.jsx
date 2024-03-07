import {BrowserRouter as Router, Route, Routes, Link, useParams, Outlet, NavLink} from 'react-router-dom';
import { Posts } from './Pages/posts';
import { Users } from './Pages/users';

import './estilos.css'

function Menu() {
    return <>
        <Routes>
            <Route path='/' element={<Posts/>}/>
            <Route path='/users' element={<Users/>}/>
        </Routes>
    </>

}


export function Aplicacion() {
    return <>
        <Menu></Menu>
    </>


} 