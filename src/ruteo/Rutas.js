// Rutas.js

import React from 'react';
import { Routes, Route, Outlet, Switch, Redirect} from 'react-router-dom';
import Home from '../public/Home';
import AcercaDe from '../public/AcercaDe';
import Contacto from '../public/Contacto';

//////////////////////// AUTENTICACIÓN /////////////////


//////////////////////// PAG. PROTEGIDA ////////////////

//////////////////////// PAG. PUBLICOS /////////////////

function SistemaCRUDWrapper() {
  return (
    <div style={{ background:"red" }}>
      <Outlet /> {/* Aquí se renderizarán las rutas secundarias */}
    </div>
  );
}
//style={{ background:"greenyellow" }}
function Rutas() {
  return (
    <div>
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/acerca-de" element={<AcercaDe />} />
      <Route path="/contacto" element={<Contacto />} />
    </Routes> 
    </div>
  );
}

export default Rutas;
