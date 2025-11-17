import Sidebar from "../components/Sidebar";
import "../Teams.css";
import SearchIcon from "@mui/icons-material/Search";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { useState } from "react";
import { useNavigate } from "react-router-dom"; // 👈 IMPORTANTE

export default function TeamsPage() {
  const navigate = useNavigate(); // 👈 PARA NAVEGAR
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const openDeleteModal = (teamName) => {
    setSelectedTeam(teamName);
    setShowDeleteModal(true);
  };

  const closeDeleteModal = () => {
    setShowDeleteModal(false);
    setSelectedTeam(null);
  };

  return (
    <div className="teams-container">
      <Sidebar />

      <main className="teams-main">

        {/* ===== BUSCADOR ===== */}
        <div className="search-row">
          <div className="search-bar">
            <input type="text" placeholder="Buscar" />
            <SearchIcon className="search-icon" />
          </div>

          <div className="search-actions">
            <button className="btn-orange">Buscar</button>
            <button className="btn-purple">Filtros</button>
          </div>
        </div>

        {/* ===== SOLICITUDES ===== */}
        <div className="teams-actions-row">
          <button
            className="btn-solicitudes-teams"
            onClick={() => navigate("/equipos/solicitudes")} // 👈 NAVEGA A LA VISTA DE SOLICITUDES
          >
            <HelpOutlineIcon style={{ marginRight: "10px" }} />
            Solicitudes
          </button>
        </div>

        {/* ===== TABLA ===== */}
        <div className="teams-table-container">
          <table className="teams-table">
            <thead>
              <tr>
                <th>Identificador</th>
                <th>Equipo</th>
                <th>DTE</th>
                <th>Plantilla<br />(jugadores)</th>
                <th>Estado</th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>#4568909</td>
                <td>Los Titanes</td>
                <td>José Pérez</td>
                <td>11</td>
                <td>Activo</td>
                <td className="td-actions">
                  <button
                    className="btn-delete"
                    onClick={() => openDeleteModal("Los Titanes")}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>

              <tr>
                <td>#3429839</td>
                <td>Copa Buena</td>
                <td>Roberto Gómez</td>
                <td>11</td>
                <td>Inactivo</td>
                <td className="td-actions">
                  <button className="btn-delete">Eliminar</button>
                </td>
              </tr>

              <tr>
                <td>#5379283</td>
                <td>Golfito FC</td>
                <td>Adrián Mora</td>
                <td>7</td>
                <td>Activo</td>
                <td className="td-actions">
                  <button className="btn-delete">Eliminar</button>
                </td>
              </tr>

              <tr>
                <td>#8478574</td>
                <td>Los Halcones</td>
                <td>Dario Peña</td>
                <td>5</td>
                <td>Pendiente</td>
                <td className="td-actions">
                  <button className="btn-delete">Eliminar</button>
                </td>
              </tr>

              {/* 10 EQUIPOS DE EJEMPLO */}
              <tr><td>001</td><td>Titanes FC</td><td>Carlos Méndez</td><td>Verano 2026</td><td>12/11/2025</td><td className="td-actions"><button className="btn-delete">Eliminar</button></td></tr>
              <tr><td>002</td><td>Águilas del Valle</td><td>Ricardo Araya</td><td>Invierno 2026</td><td>08/11/2025</td><td className="td-actions"><button className="btn-delete">Eliminar</button></td></tr>
              <tr><td>003</td><td>Guerreros del Sur</td><td>Melissa Quesada</td><td>Verano 2027</td><td>11/11/2025</td><td className="td-actions"><button className="btn-delete">Eliminar</button></td></tr>
              <tr><td>004</td><td>Halcones Dorados</td><td>José Mora</td><td>Primavera 2026</td><td>05/11/2025</td><td className="td-actions"><button className="btn-delete">Eliminar</button></td></tr>
              <tr><td>005</td><td>Lobos FC</td><td>Daniel Rojas</td><td>Invierno 2027</td><td>15/11/2025</td><td className="td-actions"><button className="btn-delete">Eliminar</button></td></tr>
              <tr><td>006</td><td>Leones del Norte</td><td>Hernán Gutiérrez</td><td>Otoño 2026</td><td>09/11/2025</td><td className="td-actions"><button className="btn-delete">Eliminar</button></td></tr>
              <tr><td>007</td><td>Furia Roja</td><td>Marco Soto</td><td>Primavera 2027</td><td>13/11/2025</td><td className="td-actions"><button className="btn-delete">Eliminar</button></td></tr>
              <tr><td>008</td><td>Trueno Azul</td><td>Iván Fernández</td><td>Verano 2026</td><td>07/11/2025</td><td className="td-actions"><button className="btn-delete">Eliminar</button></td></tr>
              <tr><td>009</td><td>Centinelas</td><td>Oscar Navarro</td><td>Invierno 2026</td><td>10/11/2025</td><td className="td-actions"><button className="btn-delete">Eliminar</button></td></tr>
              <tr><td>010</td><td>Leopards Elite</td><td>Adriana Solano</td><td>Otoño 2026</td><td>03/11/2025</td><td className="td-actions"><button className="btn-delete">Eliminar</button></td></tr>

            </tbody>
          </table>
        </div>

        {/* ===== MODAL ELIMINAR ===== */}
        {showDeleteModal && (
          <div className="delete-modal-overlay">
            <div className="delete-modal">
              <h2>¿Está seguro de eliminar al equipo {selectedTeam}?</h2>
              <p className="modal-subtext">Escriba su contraseña para confirmar</p>

              <input type="password" placeholder="Contraseña" className="modal-input" />
              <input type="password" placeholder="Confirmar contraseña" className="modal-input" />

              <div className="modal-buttons">
                <button
                  className="btn-confirm"
                  onClick={() => {
                    setShowDeleteModal(false);
                    setShowSuccessMessage(true);
                    setTimeout(() => setShowSuccessMessage(false), 2500);
                  }}
                >
                  Confirmar
                </button>

                <button className="btn-cancel" onClick={closeDeleteModal}>
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ===== POPUP DE ÉXITO ===== */}
        {showSuccessMessage && (
          <div className="success-popup">
            <span>Equipo eliminado correctamente</span>
            <span className="success-check">✔</span>
          </div>
        )}

      </main>
    </div>
  );
}
