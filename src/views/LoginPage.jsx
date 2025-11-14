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

      {/* PANEl */}
      <Paper
        sx={{
          width: 420,                    // más delgado
          minHeight: 570,                // más alto = alargado
          borderRadius: "30px",
          background: "#f5e9df",
          p: 6,
          pt: 1,                         // sube el contenido
          display: "flex",
          flexDirection: "column",
         // justifyContent: "flex-start",  // coloca todo arriba
          boxShadow: "0px 8px 40px rgba(0,0,0,0.28)",
          opacity: 0.97,
          mr: { xs: 0, md: 10 },
          mt: 6,
        }}
        elevation={0}
      >

        <Typography variant="h4" fontWeight="bold" sx={{ mb: 1 , mt: 3 }}>
          ¡De vuelta al control!
        </Typography>

        <Typography variant="body2" fontWeight="bold" sx={{ mb:5, mt: 4 }}>
          Inicia sesión para administrar torneos.
        </Typography>


        {/* USUARIO */}
        <Typography sx={{ color: "#000", mb: 1, mt: 2 }} fontWeight="bold" > Correo electrónico </Typography>
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
        <Typography sx={{ color: "#000", mb: 1, mt: 3 }} fontWeight="bold" >Contraseña</Typography>
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
