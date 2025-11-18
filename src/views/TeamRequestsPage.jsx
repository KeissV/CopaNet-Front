import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import "../RequestsDetails.css";
import "../TeamRequests.css";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

export default function TeamRequestsPage() {
  const navigate = useNavigate();
  const [selectedSolicitud, setSelectedSolicitud] = useState(null);
  const [showMessage, setShowMessage] = useState(null);

  const handleBack = () => navigate("/teams");

  const handleAction = (type) => {
    setShowMessage(type);
    setSelectedSolicitud(null);

    setTimeout(() => {
      setShowMessage(null);
    }, 2000);
  };

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
    {
      referencia: "#4566475",
      dte: "Rodrigo Hernández",
      accion: "Sustitución",
      jugador: "Juan Fonseca",
      fecha: "14/11/2025",
      detalle: "Sustituye por lesión"
    },
    {
      referencia: "#4566475",
      dte: "Rodrigo Hernández",
      accion: "Sustitución",
      jugador: "Juan Fonseca",
      fecha: "14/11/2025",
      detalle: "Sustituye por lesión"
    }
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
          <div className="table-scroll">
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
                    onClick={() => setSelectedSolicitud(s)}
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
        </div>



        {/* ================= MODAL DETALLE ================= */}
        {selectedSolicitud && (
          <div className="delete-modal-overlay"> {/* Reutilizamos el overlay del modal */}
            <div className="detalle-modal-card">
              <h2>Detalles de solicitud</h2>

              <p><strong>Referencia:</strong> {selectedSolicitud.referencia}</p>
              <p><strong>Fecha solicitud:</strong> {selectedSolicitud.fecha}</p>
              <p><strong>DTE solicitante:</strong> {selectedSolicitud.dte}</p>
              <p><strong>Jugador involucrado:</strong> {selectedSolicitud.jugador}</p>
              <p><strong>Acción:</strong> {selectedSolicitud.accion}</p>

              <label><strong>Detalle:</strong></label>
              <textarea
                defaultValue={selectedSolicitud.detalle}
                className="detalle-area"
                readOnly
              />

              <div className="acciones">
                <button className="btn-approve" onClick={() => handleAction("ok")}>
                  Aprobar
                </button>

                <button className="btn-reject" onClick={() => handleAction("no")}>
                  Rechazar
                </button>

                <button className="btn-cancel" onClick={() => setSelectedSolicitud(null)}>
                  Cerrar
                </button>
              </div>

            </div>
          </div>
        )}

        {/* POPUPS */}
       {showMessage === "ok" && (
  <div className="popup success">
    <span>Solicitud de modificación aprobada</span>
    <CheckIcon className="icon" />
  </div>
)}

{showMessage === "no" && (
  <div className="popup reject">
    <span>Solicitud de modificación rechazada</span>
    <CloseIcon className="icon" />
  </div>
)}

      </main>
    </div>
  );
}
