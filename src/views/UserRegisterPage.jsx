import Sidebar from "../components/Sidebar";
import "../UserRegister.css";
import { useState } from "react";
import CheckIcon from "@mui/icons-material/Check";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";


export default function UserRegisterPage() {
    const [showSuccess, setShowSuccess] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        setShowPopup(true);
        setTimeout(() => setShowPopup(false), 2500);
    };

    return (
        <div className="register-container">
            <Sidebar />

            <main className="register-main">

                <button className="btn-back" onClick={() => navigate("/users")}>
                    <ArrowBackIcon /> Volver
                </button>

                <h1 className="register-title">Registro de usuarios</h1>
                <p className="register-subtext">
                    Ingrese información personal y espere la aprobación de administración.
                </p>

                {/* FORMULARIO */}
                <form className="register-box" onSubmit={handleSubmit}>

                    <div className="form-row">
                        <input type="text" placeholder="Número de identificación" required />
                        <input type="text" placeholder="Nombre completo" required />
                    </div>

                    <div className="form-row">
                        <input type="email" placeholder="Correo electrónico" required />

                        <select required>
                            <option value="">Rol</option>
                            <option value="Jugador">Jugador</option>
                            <option value="DTE">Usuario DTE</option>
                            <option value="Admin">Admin</option>
                        </select>
                    </div>

                    <div className="form-row">
                        <input type="password" placeholder="Contraseña" required />
                        <input type="password" placeholder="Confirmar contraseña" required />
                    </div>

                    <div className="btn-right">
                        <button className="btn-submit" type="submit"
                            onClick={() => {
                                setShowSuccess(true);     // Mostrar popup

                                setTimeout(() => {
                                    setShowSuccess(false);  // Ocultar popup
                                    navigate("/users");     // Regresar a usuarios
                                }, 2500);
                            }}
                        >
                            Enviar solicitud
                        </button>
                    </div>

                </form>

                {/* POPUP DE ÉXITO */}
                {showSuccess && (
                    <div className="register-success-popup">
                        <span>Solicitud de usuario enviada correctamente</span>
                        <CheckIcon className="register-success-icon" />
                    </div>
                )}


            </main>
        </div>
    );
}
