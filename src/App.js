import React from 'react'
import { useAuth} from "./ruteo/AuthContext"
import BarraRutasPublic from './ruteo/BarraRutasPublic';
import BarraRutasProtected from './ruteo/BarraRutasProtected';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Dashboard from './public/Dashboard';
import Home from './public/Home';

console.log('\x1b[33m%s\x1b[0m', 'Hola soy Sandra');
const App = () => {
  const { user } = useAuth();
  return (
    <div>
      <h1>App.js</h1>
      ¡Hola soy Sandra!
      <Router>
      {user ? <BarraRutasProtected /> : <BarraRutasPublic />}
       
      </Router>
    </div>
  )
}

export default App

