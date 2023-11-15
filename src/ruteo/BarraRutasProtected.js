import { Routes, Route, Outlet, Switch, Redirect} from 'react-router-dom';

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from './AuthContext';
import { getAuth, signOut } from 'firebase/auth';
//import "./BarraNavegacion.css";
import { useNavigate } from 'react-router-dom';

///////////////// PROTEGIDA - SistemaCRUD //////////////
import SistemaCRUD from '../protegido/SistemaCRUD';
import ListaDeAlumnos from '../protegido/sistemacrud/ListaDeAlumnos';

///////////////// PROTEGIDA - SistemaFILE //////////////
import SistemaFILE from '../protegido/SistemaFILE';
import Fotos from '../protegido/sistemafile/Fotos';

//////////////////////// PAG. PUBLICOS /////////////////
import RegisterForm from '../login/RegisterForm';
import LoginForm from '../login/LoginForm';
import ListaDeProfesores from '../protegido/sistemacrud/ListaDeProfesores';
import ListaDeCarreras from '../protegido/sistemacrud/ListaDeCarreras';
import ListaDeCursos from '../protegido/sistemacrud/ListaDeCursos';
import ListaDeDeportes from '../protegido/sistemacrud/ListaDeDeportes';
import AppLista from '../protegido/sistemacrud/AppLista';
import Videos from '../protegido/sistemafile/Videos';
import DocPdf from '../protegido/sistemafile/DocPdf';
import ListaDeEgresados from '../protegido/sistemacrud/ListaDeEgresados';

const BarraRutasProtected = () => {
    const { user } = useAuth();
    const auth = getAuth();
    const navigate = useNavigate();
  
    const handleSignOut = () => {
      if (user) {
        signOut(auth)
          .then(() => {
            // Cierre de sesión exitoso
            navigate('/home'); // Redirigir a ruta /home
          })
          .catch((error) => {
            console.error('Error al cerrar sesión:', error);
          });
      }
    }
  
    return (
      <div>
        <nav>
          <div id="login">
            <ul>
              {user ? (         ////////  Para cerrar sesión   ///////////
                  <li><Link onClick={handleSignOut} > Cerrar sesión </Link> </li> 
                  ) : (
                  <li> <Link to="/iniciarsesion">Iniciar sesión</Link> </li>
                )}

                <li><Link to="/nuevoregistro">Registrar</Link></li>

                {user ? (         ////////  Usuario autenticado  ///////////
                  <li>Usuario autenticado: <span> {user.email}</span> </li> 
                  ) : (
                  null
                )}
              
            </ul>
          </div>
              
          <div id="menu">
            <ul>
              <li><Link to="/sistema-crud/carreras">Carreras</Link> </li>
              <li><Link to="/sistema-crud/deportes">Deportes</Link> </li>
              <li><Link to="/sistema-crud/egresados">Egresados</Link> </li>
              <li><Link to="/sistema-crud/alumnos">Alumnos</Link> </li>


              <li><Link to="/sistema-file/videos">Videos</Link> </li>
              <li><Link to="/sistema-file/fotos">Fotos</Link> </li>
              <li><Link to="/sistema-file/docpdf">Pdf</Link> </li>
              <li><Link to="/sistema-file/docword">Word</Link> </li>
              
            </ul>
          </div>
        </nav>
  
        <Routes>

          <Route path="/iniciarsesion" element={<LoginForm />} />
          <Route path="/nuevoregistro" element={<RegisterForm />} />

          
          <Route path="/sistema-crud" element={<MarcoParaSistemaCRUD />}>
            <Route index element={<SistemaCRUD />} />
            <Route path="alumnos" element={<AppLista />} />
          </Route>
  
          <Route path="/sistema-crud" element={<MarcoParaSistemaCRUD />}>
            <Route index element={<SistemaCRUD />} />
            <Route path="egresados" element={<ListaDeEgresados />} />
          </Route>

          <Route path="/sistema-crud" element={<MarcoParaSistemaCRUD />}>
            <Route index element={<SistemaCRUD />} />
            <Route path="carreras" element={<ListaDeCarreras />} />
          </Route>
  
          <Route path="/sistema-crud" element={<MarcoParaSistemaCRUD />}>
            <Route index element={<SistemaCRUD />} />
            <Route path="deportes" element={<ListaDeDeportes />} />
          </Route>

          <Route path="/sistema-file" element={<MarcoParaSistemaFILE />}>
            <Route index element={<SistemaFILE />} />
            <Route path="fotos" element={<Fotos />} />
          </Route>

          <Route path="/sistema-file" element={<MarcoParaSistemaFILE />}>
            <Route index element={<SistemaFILE />} />
            <Route path="videos" element={<Videos />} />
          </Route>

          <Route path="/sistema-file" element={<MarcoParaSistemaFILE />}>
            <Route index element={<SistemaFILE />} />
            <Route path="docpdf" element={<DocPdf />} />
          </Route>

          <Route path="/sistema-file" element={<MarcoParaSistemaFILE />}>
            <Route index element={<SistemaFILE />} />
            <Route path="docword" element={<Fotos />} />
          </Route>
  
        </Routes>        
      </div>
    )
}

export default BarraRutasProtected;

function MarcoParaSistemaCRUD() {
    return (
      <div>
        <h1>Marco sistema CRUD</h1>
        < Outlet /> {/* Aquí se mostrarán las rutas secundarias */}
      </div>
    );
  }
  
function MarcoParaSistemaFILE() {
    return (
      <div>
        <h1>Marco Sistema FILES</h1>
        < Outlet /> {/* Aquí se mostrarán las rutas secundarias */}
      </div>
    );
}
  


  
  /*
  
                {user ? (         ////////  Para cerrar sesión   ///////////
                <li><Link onClick={handleSignOut} > Cerrar sesión </Link> </li> 
                ) : (
                <li> <Link to="/iniciarsesion">Iniciar sesión</Link> </li>
              )}

              <li><Link to="/nuevoregistro">Registrar</Link></li>

              {user ? (         ////////  Usuario autenticado  ///////////
                <li>Usuario autenticado: <span> {user.email}</span> </li> 
                ) : (
                null
              )}
  
  
  /*
  
  
  /*
  const handleSignOut = () => {
      if (user) {
        signOut(auth)
          .then(() => {
            // Cierre de sesión exitoso
            navigate('/home'); // Redirigir a ruta /home
          })
          .catch((error) => {
            console.error('Error al cerrar sesión:', error);
          });
      }
    }
  */
  
