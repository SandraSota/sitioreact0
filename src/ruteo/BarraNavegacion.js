import { Link } from 'react-router-dom';
//import "./estilos.css";

//style={{ background:"silver" }}
//style="--bs-scroll-height: 100px;"
function BarraNavegacion() {
  return (
    <nav style={{ background:"silver" }}>
      <ul>
        <li> <Link to="/home">Home</Link></li>
        <li> <Link to="/acerca-de">Acerca de</Link></li>
        <li> <Link to="/contacto">Contacto</Link></li>
        <li> <Link to="/app-lista">App Lista</Link></li>
        <li> <Link to="/inicio-sesion">Iniciar sesión</Link></li>
        <li> <Link to="/nuevo-registro">Nuevo registro</Link></li>
      </ul>
    </nav>
  );
}

export default BarraNavegacion;