import Sidebar from "../components/Sidebar";
import "../Audit.css";
import SearchIcon from "@mui/icons-material/Search";

export default function AuditPage() {
  return (
    <div className="audit-container">
      <Sidebar />

      <main className="audit-main">

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
  <tr className="audit-row-highlight">
    <td>21/09/2025<br/>14:22</td>
    <td>admin01</td>
    <td>Eliminar</td>
    <td>Usuarios</td>
    <td>admin01</td>
    <td>Se eliminó el usuario "Mariano Fuentes"</td>
  </tr>

  <tr>
    <td>14/09/2025<br/>07:38</td>
    <td>admin01</td>
    <td>Crear</td>
    <td>Torneos</td>
    <td>admin01</td>
    <td>Se creó el torneo "Verano 2026"</td>
  </tr>

  <tr>
    <td>20/09/2025<br/>19:38</td>
    <td>José Pérez</td>
    <td>Crear</td>
    <td>Equipos</td>
    <td>admin01</td>
    <td>Se creó el equipo "Los Titanes"</td>
  </tr>

  <tr>
    <td>22/09/2025<br/>09:14</td>
    <td>admin01</td>
    <td>Modificar</td>
    <td>Usuarios</td>
    <td>admin01</td>
    <td>Se actualizó la contraseña del usuario "Heriberto Gómez"</td>
  </tr>

  <tr>
    <td>23/09/2025<br/>16:05</td>
    <td>admin02</td>
    <td>Eliminar</td>
    <td>Equipos</td>
    <td>admin02</td>
    <td>Se eliminó el equipo "Copa Buena"</td>
  </tr>

  <tr>
    <td>24/09/2025<br/>11:32</td>
    <td>admin01</td>
    <td>Crear</td>
    <td>Usuarios</td>
    <td>admin01</td>
    <td>Se registró el usuario "Miguel Arrieta"</td>
  </tr>

  <tr>
    <td>25/09/2025<br/>14:57</td>
    <td>Marcela</td>
    <td>Acceso</td>
    <td>Sistema</td>
    <td>admin01</td>
    <td>Intento de inicio de sesión exitoso</td>
  </tr>

  <tr>
    <td>26/09/2025<br/>10:21</td>
    <td>Marcela</td>
    <td>Error</td>
    <td>Sistema</td>
    <td>admin01</td>
    <td>Intento fallido de inicio de sesión</td>
  </tr>

  <tr>
    <td>27/09/2025<br/>13:45</td>
    <td>Heriberto Gómez</td>
    <td>Modificar</td>
    <td>Equipos</td>
    <td>admin01</td>
    <td>Se actualizó la plantilla del equipo "Golfito FC"</td>
  </tr>

  <tr>
    <td>28/09/2025<br/>08:00</td>
    <td>admin02</td>
    <td>Crear</td>
    <td>Pagos</td>
    <td>admin02</td>
    <td>Se registró pago de inscripción del equipo "Los Halcones"</td>
  </tr>

  <tr>
    <td>29/09/2025<br/>12:18</td>
    <td>admin01</td>
    <td>Aprobar</td>
    <td>Pagos</td>
    <td>admin01</td>
    <td>Se aprobó el comprobante #55489</td>
  </tr>

  <tr>
    <td>30/09/2025<br/>16:49</td>
    <td>admin01</td>
    <td>Modificar</td>
    <td>Torneos</td>
    <td>admin01</td>
    <td>Se cambió fecha del torneo "Invierno 2026"</td>
  </tr>

  <tr>
    <td>01/10/2025<br/>09:32</td>
    <td>José Pérez</td>
    <td>Acceso</td>
    <td>Sistema</td>
    <td>admin01</td>
    <td>Inicio de sesión exitoso</td>
  </tr>

  <tr>
    <td>02/10/2025<br/>15:40</td>
    <td>admin02</td>
    <td>Eliminar</td>
    <td>Pagos</td>
    <td>admin02</td>
    <td>Se eliminó un comprobante duplicado</td>
  </tr>

  <tr>
    <td>03/10/2025<br/>07:55</td>
    <td>Marcela</td>
    <td>Crear</td>
    <td>Equipos</td>
    <td>admin01</td>
    <td>Registró el equipo "Los Guerreros"</td>
  </tr>

  <tr>
    <td>04/10/2025<br/>18:33</td>
    <td>admin02</td>
    <td>Modificar</td>
    <td>Usuarios</td>
    <td>admin02</td>
    <td>Se cambió el rol de "Roberto Gómez" a Administrador</td>
  </tr>

  <tr>
    <td>05/10/2025<br/>11:10</td>
    <td>admin01</td>
    <td>Crear</td>
    <td>Torneos</td>
    <td>admin01</td>
    <td>Se creó el torneo "Primavera 2027"</td>
  </tr>

  <tr>
    <td>06/10/2025<br/>13:22</td>
    <td>Marcela</td>
    <td>Acceso</td>
    <td>Sistema</td>
    <td>admin01</td>
    <td>Intento de acceso desde nueva IP</td>
  </tr>

  <tr>
    <td>07/10/2025<br/>10:47</td>
    <td>admin01</td>
    <td>Eliminar</td>
    <td>Equipos</td>
    <td>admin01</td>
    <td>Se eliminó el equipo "Los Dragones"</td>
  </tr>

  <tr>
    <td>08/10/2025<br/>09:15</td>
    <td>admin02</td>
    <td>Modificar</td>
    <td>Pagos</td>
    <td>admin02</td>
    <td>Se corrigió monto del pago #99012</td>
  </tr>
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
