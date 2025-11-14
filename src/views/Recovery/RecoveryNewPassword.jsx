import { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  IconButton,
  InputAdornment,
} from "@mui/material";

import LoopIcon from "@mui/icons-material/Loop";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

export default function RecoveryNewPassword({ onFinish, onBack }) {
  const [showPass1, setShowPass1] = useState(false);
  const [showPass2, setShowPass2] = useState(false);

  return (
    <Box
      sx={{
        width: 380,
        bgcolor: "#000",
        borderRadius: "30px",
        p: 4,
        textAlign: "center",
      }}
    >
      <Typography
        variant="h5"
        fontWeight="bold"
        sx={{ color: "#ff6600", mb: 2 }}
      >
        Cambia Contraseña
      </Typography>

      <LoopIcon sx={{ fontSize: 70, color: "#ff6600", mb: 3 }} />

      {/* NUEVA CONTRASEÑA */}
      <TextField
        fullWidth
        type={showPass1 ? "text" : "password"}
        placeholder="Nueva contraseña"
        InputProps={{
          sx: {
            bgcolor: "#111",
            borderRadius: "12px",
            input: { color: "#fff" },
          },
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={() => setShowPass1(!showPass1)}>
                {showPass1 ? (
                  <Visibility sx={{ color: "#fff" }} />
                ) : (
                  <VisibilityOff sx={{ color: "#fff" }} />
                )}
              </IconButton>
            </InputAdornment>
          ),
        }}
        sx={{ mb: 3 }}
      />

      {/* CONFIRMAR CONTRASEÑA */}
      <TextField
        fullWidth
        type={showPass2 ? "text" : "password"}
        placeholder="Confirmar Nueva Contraseña"
        InputProps={{
          sx: {
            bgcolor: "#111",
            borderRadius: "12px",
            input: { color: "#fff" },
          },
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={() => setShowPass2(!showPass2)}>
                {showPass2 ? (
                  <Visibility sx={{ color: "#fff" }} />
                ) : (
                  <VisibilityOff sx={{ color: "#fff" }} />
                )}
              </IconButton>
            </InputAdornment>
          ),
        }}
        sx={{ mb: 3 }}
      />

      <Button
        fullWidth
        variant="contained"
        onClick={onFinish}
        sx={{
          bgcolor: "#fff",
          color: "#000",
          borderRadius: "12px",
          "&:hover": { bgcolor: "#e5e5e5" },
        }}
      >
        Enviar
      </Button>

      <Typography
        sx={{
          mt: 3,
          color: "#fff",
          cursor: "pointer",
          fontSize: "14px",
        }}
        onClick={onBack}
      >
        Volver a Iniciar Sesión
      </Typography>
    </Box>
  );
}
