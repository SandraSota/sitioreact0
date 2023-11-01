//InicioSesion.js
import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../conexion/firebase'; // Importa el objeto auth 
import { useNavigate } from 'react-router';

//import Button from 'react-bootstrap/Button';
//import Form from 'react-bootstrap/Form';

function InicioSesion() {
  const [correo, setCorreo] = useState('');
  const [contraseña, setContraseña] = useState('');

  const navigate = useNavigate(); // Utiliza useNavigate para la navegación
  
  return (
    <div>
      <form>
        <h1>Correo Electrónico</h1> <br/>
        <input value={correo} 
          type="email" placeholder="Correo Electrónico" /> <br />
        <input value={contraseña}  
          type="password" placeholder="Contraseña"  /> <br />
        <button>Iniciar</button>
      </form>
    </div>    
  );
}

export default InicioSesion;