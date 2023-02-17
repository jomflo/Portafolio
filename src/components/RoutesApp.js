import React from 'react';
import {Routes, Route} from 'react-router-dom';
import { Contact } from '../pages/Contact';
import { Home } from '../pages/Home';
import { Projects } from '../pages/Projects';
import { About } from '../pages/About';

export function RoutesApp(){
    return(
        <Routes>
        <Route path="/" element={<Home/>} exact />
        <Route path="/Home" element={<Home/>} />
        <Route path="/Projects" element={<Projects/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="*" element={<h1> ERROR!!!   Pagina No Encontrada</h1>}/>
      </Routes>
    )
}