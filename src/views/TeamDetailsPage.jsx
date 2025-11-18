import { useLocation, useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import "../TeamDetails.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function TeamDetailsPage() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const handleBack = () => navigate("/teams");

  if (!state) {
    return <p style={{ color: "white" }}>⚠ No hay datos del equipo</p>;
  }

  return (
    <div className="team-details-container">
      <Sidebar />

      <main className="team-details-main">

        <button className="btn-back" onClick={handleBack}>
          <ArrowBackIcon /> Volver
        </button>

        <h1 className="details-title">Detalles del Equipo</h1>

        <div className="info-grid">
          <p><strong>Identificador:</strong> {state.id}</p>
          <p><strong>Nombre del equipo:</strong> {state.nombre}</p>
          <p><strong>DTE responsable:</strong> {state.dte}</p>
          <p><strong>Estado:</strong> {state.estado}</p>
        </div>

        <h2 className="section-title">Plantilla activa</h2>
        <div className="details-table">
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Identificación</th>
                <th>Jugador</th>
                <th>Camiseta</th>
                <th>Posición</th>
              </tr>
            </thead>
            <tbody>
              {state.jugadores?.map((jugador, i) => (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{jugador.cedula}</td>
                  <td>{jugador.nombre}</td>
                  <td>{jugador.camiseta}</td>
                  <td>{jugador.posicion}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="section-title">Torneos Asociados</h2>
        <div className="details-table">
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Torneo</th>
                <th>Estado</th>
                <th>Fecha inicio</th>
                <th>Fecha Fin</th>
              </tr>
            </thead>
            <tbody>
              {state.torneos?.map((t, i) => (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{t.nombre}</td>
                  <td>{t.estado}</td>
                  <td>{t.fechaInicio}</td>
                  <td>{t.fechaFin}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </main>
    </div>
  );
}
