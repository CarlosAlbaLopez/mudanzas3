import "./css/Admin.css";
import { Link } from "react-router-dom";

export default function Admin() {
  return (
    <div>
      <div className="admin-panel">
        <Link to={"/expenses"} className="panel-option">
          Gastos
        </Link>
        <Link to={"/crm"} className="panel-option">
          Ingresos
        </Link>
        <Link to={"/calendar"} className="panel-option">
          Calendario
        </Link>
        <Link to={"/stats"} className="panel-option">
          Estadísticas
        </Link>
      </div>
    </div>
  );
}
