// NuevoRegistro.js
import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../conexion/firebase';

function NuevoRegistro() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 
  return (
    <div>
      <form>
        <h1>Nuevo Registro</h1>
        <input value={email} 
          type="email" placeholder="Correo Electrónico" /> <br />
        <input value={password} 
          type="password" placeholder="Contraseña"  /> <br />
        <button >Registrarse</button>
      </form>
    </div>
  );
}

export default NuevoRegistro;
