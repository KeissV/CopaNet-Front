import Sidebar from "../components/Sidebar";
import "../Users.css";
import { useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { useState } from "react";
import CheckIcon from "@mui/icons-material/Check";




export default function UsersPage() {
  const navigate = useNavigate();

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showDeletePopup, setShowDeletePopup] = useState(false);


  return (
    <div className="users-container">
      <Sidebar />

      <main className="users-main">

        {/* BUSCADOR */}
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

        {/* BOTONES REGISTRAR / SOLICITUDES */}
        <div className="actions-row">
          <button
            className="btn-register"
            onClick={() => navigate("/user/register")}  // 👈 AQUÍ LA NAVEGACIÓN
          >
            <PersonAddAltIcon style={{ marginRight: "10px" }} />
            Registrar
          </button>

          <button
            className="btn-solicitudes"
            onClick={() => navigate("/user/requests")}
          >
            <HelpOutlineIcon style={{ marginRight: "10px" }} />
            Solicitudes
          </button>
        </div>

        {/* TABLA USUARIOS */}
        <div className="users-table-container">
          <table className="users-table">
            <thead>
              <tr>
                <th>Identificación</th>
                <th>Nombre</th>
                <th>Rol</th>
                <th>Estado</th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>00121</td>
                <td>Laura Jiménez</td>
                <td>laura.j@gmail.com</td>
                <td>Admin</td>
                <td>-</td>
                <td className="td-actions">
                  <button className="btn-delete" onClick={(e) => {
                    e.stopPropagation();
                    setSelectedUser("Laura Jiménez");// o user.name dependiendo de tu campo
                    setShowDeleteModal(true);
                  }}
                  >Eliminar</button>
                  <button className="btn-modify" onClick={() => navigate("/users/edit")}>
                    Modificar
                  </button>
                </td>
              </tr>

              <tr>
                <td>00122</td>
                <td>Kevin Mora</td>
                <td>kevmora@gmail.com</td>
                <td>Jugador</td>
                <td>Titanes FC</td>
                <td className="td-actions">
                  <button className="btn-delete">Eliminar</button>
                  <button className="btn-modify">Modificar</button>
                </td>
              </tr>

              <tr>
                <td>00123</td>
                <td>Ana López</td>
                <td>ana.lopez@gmail.com</td>
                <td>Jugadora</td>
                <td>Guerreros</td>
                <td className="td-actions">
                  <button className="btn-delete">Eliminar</button>
                  <button className="btn-modify">Modificar</button>
                </td>
              </tr>

              <tr>
                <td>00124</td>
                <td>Diego Vargas</td>
                <td>dvargas@gmail.com</td>
                <td>Entrenador</td>
                <td>Águilas FC</td>
                <td className="td-actions">
                  <button className="btn-delete">Eliminar</button>
                  <button className="btn-modify">Modificar</button>
                </td>
              </tr>

              <tr>
                <td>00125</td>
                <td>María Navarro</td>
                <td>mnavarro@gmail.com</td>
                <td>Jugadora</td>
                <td>Leones del Sur</td>
                <td className="td-actions">
                  <button className="btn-delete">Eliminar</button>
                  <button className="btn-modify">Modificar</button>
                </td>
              </tr>

              <tr>
                <td>00126</td>
                <td>José Castillo</td>
                <td>jcastillo@gmail.com</td>
                <td>Jugador</td>
                <td>Lobos FC</td>
                <td className="td-actions">
                  <button className="btn-delete">Eliminar</button>
                  <button className="btn-modify">Modificar</button>
                </td>
              </tr>

              <tr>
                <td>00127</td>
                <td>Camila Rivera</td>
                <td>cami.r@gmail.com</td>
                <td>Admin</td>
                <td>-</td>
                <td className="td-actions">
                  <button className="btn-delete">Eliminar</button>
                  <button className="btn-modify">Modificar</button>
                </td>
              </tr>

              <tr>
                <td>00128</td>
                <td>Andrés Méndez</td>
                <td>andres.m@gmail.com</td>
                <td>Jugador</td>
                <td>Halcones</td>
                <td className="td-actions">
                  <button className="btn-delete">Eliminar</button>
                  <button className="btn-modify">Modificar</button>
                </td>
              </tr>

              <tr>
                <td>00129</td>
                <td>Sofía Herrera</td>
                <td>sofi.h@gmail.com</td>
                <td>Jugadora</td>
                <td>Titanes FC</td>
                <td className="td-actions">
                  <button className="btn-delete">Eliminar</button>
                  <button className="btn-modify">Modificar</button>
                </td>
              </tr>

              <tr>
                <td>00130</td>
                <td>Ricardo Peña</td>
                <td>ricardo.p@gmail.com</td>
                <td>Jugador</td>
                <td>Guerreros</td>
                <td className="td-actions">
                  <button className="btn-delete">Eliminar</button>
                  <button className="btn-modify">Modificar</button>
                </td>
              </tr>
            </tbody>

          </table>
        </div>

        {showDeleteModal && (
          <div className="delete-overlay">
            <div className="delete-modal-box">

              <h2 className="delete-title">
                ¿Está seguro de eliminar al usuario {selectedUser}?
              </h2>

              <p className="delete-subtext">
                Escriba su contraseña de administrador para confirmar
              </p>

              <input
                type="password"
                className="delete-input"
                placeholder="Contraseña"
              />

              <input
                type="password"
                className="delete-input"
                placeholder="Confirmar contraseña"
              />

              <div className="delete-buttons">
                <button
                  className="btn-confirm-delete"
                  onClick={() => {
                    setShowDeleteModal(false);
                    setShowDeletePopup(true);

                    setTimeout(() => {
                      setShowDeletePopup(false);
                    }, 2500);
                  }}
                >
                  Confirmar
                </button>

                <button
                  className="btn-cancel-delete"
                  onClick={() => setShowDeleteModal(false)}
                >
                  Cancelar
                </button>
              </div>

            </div>
          </div>
        )}

        {showDeletePopup && (
          <div className="popup-delete-success">
            <span>Usuario eliminado correctamente</span>
            <CheckIcon className="popup-check" />
          </div>
        )}


      </main>
    </div>
  );
}

