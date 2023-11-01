// AuthContext.js

import React, { useContext, useEffect, useState, createContext } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../conexion/firebase';

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUsuario(user);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ usuario }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  return useContext(AuthContext);
}

export { AuthProvider, useAuth };