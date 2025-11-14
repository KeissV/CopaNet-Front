import { useState } from "react";

import RecoveryEnterEmail from "./Recovery/RecoveryEnterEmail";
import RecoveryEnterCode from "./Recovery/RecoveryEnterCode";
import RecoveryNewPassword from "./Recovery/RecoveryNewPassword";

import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  IconButton,
  InputAdornment,
} from "@mui/material";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  // 🔥 CONTROL DE PANTALLAS DE RECUPERACIÓN (email → code → newpass)
  const [screen, setScreen] = useState(null);

  const openRecovery = () => {
    console.log("openRecovery called");
    setScreen("email"); // inicia en la pantalla de correo
  };


  return (
    <>
      {/* ======================= LOGIN ======================= */}
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          px: 4,
          position: "relative",
        }}
      >
        {/* TEXTO IZQUIERDO */}
        <Box
          sx={{
            flex: 1,
            color: "white",
            pl: 6,
            mt: 35,
            zIndex: 2,
            maxWidth: "40%",
            display: { xs: "none", md: "flex" },
          }}
        >
          <Typography
            variant="h3"
            fontWeight="bold"
            sx={{ lineHeight: 1.2, maxWidth: 900 }}
          >
            Gestiona torneos y equipos desde un solo lugar
          </Typography>
        </Box>

        {/* PANEL LOGIN */}
        <Paper
          sx={{
            width: 420,
            minHeight: 570,
            borderRadius: "30px",
            background: "#f5e9df",
            p: 6,
            pt: 1,
            display: "flex",
            flexDirection: "column",
            boxShadow: "0px 8px 40px rgba(0,0,0,0.28)",
            opacity: 0.97,
            mr: { xs: 0, md: 10 },
            mt: 6,
          }}
          elevation={0}
        >
          <Typography variant="h4" fontWeight="bold" sx={{ mb: 1, mt: 3 }}>
            ¡De vuelta al control!
          </Typography>

          <Typography variant="body2" fontWeight="bold" sx={{ mb: 5, mt: 4 }}>
            Inicia sesión para administrar torneos.
          </Typography>

          {/* USUARIO */}
          <Typography sx={{ color: "#000", mb: 1, mt: 2 }} fontWeight="bold">
            Correo electrónico
          </Typography>
          <TextField
            fullWidth
            InputProps={{
              sx: {
                borderRadius: "30px",
                bgcolor: "#d0cece",
                px: 2,
                height: 50,
              },
            }}
            sx={{ mb: 3 }}
          />

          {/* CONTRASEÑA */}
          <Typography sx={{ color: "#000", mb: 1, mt: 3 }} fontWeight="bold">
            Contraseña
          </Typography>
          <TextField
            fullWidth
            type={showPassword ? "text" : "password"}
            InputProps={{
              sx: {
                borderRadius: "30px",
                bgcolor: "#d0cece",
                px: 2,
                height: 50,
              },
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <Typography
            variant="caption"
            color="primary"
            sx={{
              display: "block",
              textAlign: "right",
              mt: 1,
              cursor: "pointer",
            }}
            onClick={openRecovery}
          >
            ¿Olvidaste tu contraseña?
          </Typography>

          <Button
            fullWidth
            variant="contained"
            sx={{
              mt: 4,
              py: 1.3,
              borderRadius: "50px",
              background: "#000",
              fontSize: "16px",
              "&:hover": { background: "#222" },
            }}
          >
            Iniciar sesión
          </Button>
        </Paper>
      </Box>

      {/* ======================= PANTALLAS DE RECUPERACIÓN (EN OVERLAY) ======================= */}

      {screen === "email" && (
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            bgcolor: "rgba(0,0,0,0.75)",
            backdropFilter: "blur(3px)",
            zIndex: 9999,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <RecoveryEnterEmail
            onNext={() => setScreen("code")}
            onBack={() => setScreen(null)}
          />

        </Box>
      )}

      {screen === "code" && (
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            bgcolor: "rgba(0,0,0,0.75)",
            backdropFilter: "blur(3px)",
            zIndex: 9999,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <RecoveryEnterCode
            onNext={() => setScreen("newpass")}
            onBack={() => setScreen(null)}
          />
        </Box>
      )}

      {screen === "newpass" && (
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            bgcolor: "rgba(0,0,0,0.75)",
            backdropFilter: "blur(3px)",
            zIndex: 9999,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
         <RecoveryNewPassword 
  onFinish={() => setScreen(null)}
  onBack={() => setScreen(null)}
/>

        </Box>
      )}

    </>
  );
}
