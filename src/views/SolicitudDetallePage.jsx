import { useLocation, useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import "../SolicitudDetalle.css";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useState } from "react";

export default function SolicitudDetallePage() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const [showMessage, setShowMessage] = useState(null);

  if (!state) {
    return <p style={{ color: "white" }}>Error: No hay datos de la solicitud</p>;
  }

  const handleAction = (type) => {
    setShowMessage(type);

    setTimeout(() => {
      navigate("/equipos/solicitudes");
    }, 2000);
  };

  return (
    <div className="solicitud-detalle-container">
      <Sidebar />

      <main className="solicitud-detalle-content">

        <button className="back-btn" onClick={() => navigate("/equipos/solicitudes")}>
          <ArrowBackIcon /> Volver
        </button>

        <h2>Detalles de solicitud</h2>

        <div className="detalle-card">

          <p><strong>Referencia:</strong> {state.referencia}</p>
          <p><strong>Fecha solicitud:</strong> {state.fecha}</p>
          <p><strong>DTE solicitante:</strong> {state.dte}</p>
          <p><strong>Jugador involucrado:</strong> {state.jugador}</p>
          <p><strong>Acción:</strong> {state.accion}</p>

          <label><strong>Detalle:</strong></label>
          <textarea
            defaultValue={state.detalle}
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
          </div>
        </div>

        {/* Mensajes flotantes */}
        {showMessage === "ok" && (
          <div className="popup success">
            Solicitud aprobada <CheckIcon className="icon"/>
          </div>
        )}

        {showMessage === "no" && (
          <div className="popup reject">
            Solicitud rechazada <CloseIcon className="icon"/>
          </div>
        )}

      </main>
    </div>
  );
}
