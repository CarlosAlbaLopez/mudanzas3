import { Link } from "react-router-dom";
import "./css/Navigation.css";

export default function Navigation() {
  return (
    <div className="navigation-container">
      <ol className="navigation-list">
        <li>
          <a href="#linktohome">Inicio</a>
        </li>
        <li>
          <a href="#linktoservices">Servicios</a>
        </li>
        <li>
          <a href="#linktocontact">Contacto</a>
        </li>
        <li>
          <Link to={"/login"}>Iniciar Sesión</Link>
        </li>
      </ol>
    </div>
  );
}
