import { useState } from "react";

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

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundImage: "url('src/assets/Prueba de Fondo.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundAttachment: "fixed",
       
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
          mt: 10,
          zIndex: 2,
          maxWidth: "40%",
          display: { xs: "none", md: "flex" },
        }}
      >
        <Typography
          variant="h3"
          fontWeight="bold"
          sx={{ lineHeight: 1.2, maxWidth: 400 }}
        >
          Gestiona torneos y equipos desde un solo lugar
        </Typography>
      </Box>

      {/* PANEL DERECHO */}
      <Paper
        sx={{
          width: { xs: "90%", sm: 420 },
          borderRadius: "30px",
          background: "#f3e7de",
          p: 5,
          zIndex: 3,
          position: "relative",
          mr: { xs: 0, md: 60 },
          mt: 6,
          opacity: 0.92,
        }}
        elevation={10}
      >
        <Typography variant="h4" fontWeight="bold">
          ¡De vuelta al control!
        </Typography>
        <Typography variant="body2" sx={{ mb: 4 }}>
          Inicia sesión para administrar torneos.
        </Typography>

        {/* FORMULARIO */}
        <TextField
          fullWidth
          label="Correo electrónico"
          placeholder="Ingresa tu correo"
          InputProps={{
            sx: {
              borderRadius: "30px",
              bgcolor: "#c9c9c9",
            },
          }}
          sx={{ mb: 3 }}
        />

        <TextField
          fullWidth
          label="Contraseña"
          type={showPassword ? "text" : "password"}
          placeholder="Ingresa tu contraseña"
          InputProps={{
            sx: {
              borderRadius: "30px",
              bgcolor: "#c9c9c9",
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
  );
}
