import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import "../EquipoSolicitudes.css";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useState } from "react";

export default function EquipoSolicitudesPage() {
  const navigate = useNavigate();
  const [selectedRow, setSelectedRow] = useState(null);

  const handleBack = () => navigate("/teams");

  const solicitudes = [
    {
      referencia: "#4566175",
      dte: "Heriberto Gómez",
      accion: "Baja",
      jugador: "Luis Gómez",
      fecha: "14/11/2025",
      detalle: "Solicitud por cambio interno"
    },
    {
      referencia: "#4566275",
      dte: "Juan Gómez",
      accion: "Alta",
      jugador: "Otto Chavez",
      fecha: "14/11/2025",
      detalle: "Nuevo ingreso al equipo"
    },
    {
      referencia: "#4566875",
      dte: "Michael Pérez",
      accion: "Baja",
      jugador: "Ricardo Mondragon",
      fecha: "14/11/2025",
      detalle: "Cambio de residencia"
    },
    {
      referencia: "#4564675",
      dte: "Carlos Monge",
      accion: "Alta",
      jugador: "Teodoro López",
      fecha: "14/11/2025",
      detalle: "Jugador transferido"
    },
    {
      referencia: "#4566475",
      dte: "Rodrigo Hernández",
      accion: "Sustitución",
      jugador: "Juan Fonseca",
      fecha: "14/11/2025",
      detalle: "Sustituye por lesión"
    },
  ];

  return (
    <div className="equipos-container">
      <Sidebar />

      <main className="equipos-main">

        {/* Botón Volver */}
        <button className="btn-back" onClick={handleBack}>
          <ArrowBackIcon /> Volver
        </button>

        {/* Fila de búsqueda */}
        <div className="search-row">
          <div className="search-bar">
            <input type="text" placeholder="Buscar" />
            <SearchIcon className="search-icon" />
          </div>

          <div className="search-actions">
            <button className="btn-orange">Buscar</button>
            <button className="btn-purple">
              Filtros <FilterListIcon />
            </button>
          </div>
        </div>

        {/* Título */}
        <h1 className="equipos-title">Solicitudes Modificación de Plantilla</h1>

        {/* Tabla */}
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Referencia</th>
                <th>DTE</th>
                <th>Acción</th>
                <th>Jugador involucrado</th>
                <th>Detalle</th>
              </tr>
            </thead>

            <tbody>
              {solicitudes.map((s, i) => (
                <tr
                  key={i}
                  className={selectedRow === i ? "selected-row" : ""}
                  onClick={() => navigate("/equipos/solicitud", { state: s })}

                >
                  <td>{s.referencia}</td>
                  <td>{s.dte}</td>
                  <td>{s.accion}</td>
                  <td>{s.jugador}</td>
                  <td className="detail-btn">…</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </main>
    </div>
  );
}
