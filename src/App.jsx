import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./views/LoginPage";
import DashboardPage from "./views/DashboardPage";
import UsersPage from "./views/UsersPage";
import TeamsPage from "./views/TeamsPage";
import AuditPage from "./views/AuditPage";
import EquipoSolicitudesPage from "./views/EquipoSolicitudesPage";
import SolicitudDetallePage from "./views/SolicitudDetallePage";




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/teams" element={<TeamsPage />} />
        <Route path="/audit" element={<AuditPage />} />
        <Route path="/equipos/solicitudes" element={<EquipoSolicitudesPage />} />
        <Route path="/equipos/solicitud" element={<SolicitudDetallePage />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;

