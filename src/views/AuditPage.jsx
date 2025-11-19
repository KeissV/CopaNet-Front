import Sidebar from "../components/Sidebar";
import "../Audit.css";
import SearchIcon from "@mui/icons-material/Search";
import { useState, useEffect } from "react";
import { getBitacora } from "../services/bitacoraService";  // <--- IMPORTANTE

export default function AuditPage() {
  const [bitacora, setBitacora] = useState([]);

  useEffect(() => {
    getBitacora()
      .then(data => setBitacora(data))
      .catch(err => console.error("Error cargando bitácora:", err));
  }, []);

  return (
    <div className="audit-container">
      <Sidebar />

      <main className="audit-main">

        {/* === Barra de búsqueda === */}
        <div className="audit-search-row">
          <div className="audit-search-bar">
            <input type="text" placeholder="Buscar" />
            <SearchIcon className="search-icon" />
          </div>

          <div className="audit-search-actions">
            <button className="btn-orange">Buscar</button>
            <button className="btn-purple">Filtros</button>
          </div>
        </div>

        {/* === Tabla === */}
        <div className="audit-table-container">
          <table className="audit-table">
            <thead>
              <tr>
                <th>Fecha y hora</th>
                <th>Usuario</th>
                <th>Acción</th>
                <th>Entidad</th>
                <th>Administrador</th>
                <th>Detalle</th>
              </tr>
            </thead>

            <tbody>
              {bitacora.length === 0 ? (
                <tr>
                  <td colSpan="6" style={{ textAlign: "center", padding: "20px" }}>
                    No hay datos de auditoría
                  </td>
                </tr>
              ) : (
                bitacora.map((b, idx) => (
                  <tr key={idx}>
                    <td>{b.fecha}</td>
                    <td>{b.usuario}</td>
                    <td>{b.accion}</td>
                    <td>{b.entidad}</td>
                    <td>{b.usuario}</td>
                    <td>{b.detalle}</td>
                  </tr>
                ))
              )}
            </tbody>


          </table>
        </div>

        <div className="audit-export-row">
          <button className="btn-export">Exportar</button>
        </div>

      </main>
    </div>
  );
}

