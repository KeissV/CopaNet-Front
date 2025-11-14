import { Box, Typography, TextField, Button } from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";

export default function RecoveryEnterEmail({ onNext, onBack }) {
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
        Olvidé Contraseña
      </Typography>

      <LockIcon sx={{ fontSize: 70, color: "#ff6600", mb: 3 }} />

      <Typography sx={{ color: "#fff", mb: 3 }}>
        Te enviaremos un correo para cambiar la contraseña
      </Typography>

      <TextField
        fullWidth
        placeholder="Correo"
        InputProps={{
          sx: {
            bgcolor: "#111",
            borderRadius: "12px",
            input: { color: "#fff" },
          },
        }}
        sx={{ mb: 3 }}
      />

      <Button
        fullWidth
        variant="contained"
        onClick={onNext}
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
