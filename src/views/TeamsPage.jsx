import Sidebar from "../components/Sidebar";
import "../Teams.css";
import SearchIcon from "@mui/icons-material/Search";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function TeamsPage() {
  const navigate = useNavigate();
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  // 🔥 Datos de ejemplo (mientras no hay Backend)
  const equiposData = [
    {
      id: "#4568909",
      nombre: "Los Titanes",
      dte: "José Pérez",
      plantilla: 11,
      estado: "Activo",
      jugadores: [
        { cedula: "207890123", nombre: "Luis Ramírez", camiseta: "10", posicion: "Delantero" },
        { cedula: "209876543", nombre: "Mario López", camiseta: "8", posicion: "Mediocampista" }
      ],
      torneos: [
        { nombre: "Verano 2026", estado: "Activo", fechaInicio: "12/01/2026", fechaFin: "30/04/2026" }
      ]
    },
    ...Array.from({ length: 6 }).map((_, i) => ({
      id: `00${i + 1}`,
      nombre: `Equipo ${i + 1}`,
      dte: `DTE ${i + 1}`,
      plantilla: Math.floor(Math.random() * 10) + 5,
      estado: ["Activo", "Inactivo", "Pendiente"][i % 3],
      jugadores: [],
      torneos: []
    }))
  ];

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
            onClick={() => navigate("/teams/requests")}
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
              {equiposData.map((eq, i) => (
                <tr
                  key={i}
                  onClick={() => navigate("/teams/details", { state: eq })}
                  style={{ cursor: "pointer" }}
                >
                  <td>{eq.id}</td>
                  <td>{eq.nombre}</td>
                  <td>{eq.dte}</td>
                  <td>{eq.plantilla}</td>
                  <td>{eq.estado}</td>
                  <td className="td-actions">
                    <button
                      className="btn-delete"
                      onClick={(e) => {
                        e.stopPropagation();
                        openDeleteModal(eq.nombre);
                      }}
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
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
