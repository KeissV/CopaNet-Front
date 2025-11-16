import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./views/LoginPage";
import DashboardPage from "./views/DashboardPage";
import UsersPage from "./views/UsersPage";
import TeamsPage from "./views/TeamsPage";
import AuditPage from "./views/AuditPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/teams" element={<TeamsPage />} />
        <Route path="/audit" element={<AuditPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

