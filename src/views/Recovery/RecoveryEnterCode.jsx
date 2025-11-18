import { Box, Typography, Button, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useRef } from "react";

export default function RecoveryEnterCode({ onNext, onBack }) {
  const inputRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  const handleChange = (e, index) => {
    const value = e.target.value;

  
    if (!/^[0-9]?$/.test(value)) return;


    if (value && index < 3) {
      inputRefs[index + 1].current?.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !e.target.value && index > 0) {
      inputRefs[index - 1].current?.focus();
    }
  };

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
        Revisa tu Correo
      </Typography>

      <SendIcon sx={{ fontSize: 70, color: "#ff6600", mb: 3 }} />

      <Typography sx={{ color: "#fff", mb: 3 }}>
        Digite el código de verificación que enviamos al correo
        <br />
        <span style={{ color: "#ff6600" }}>********@gmail.com</span>
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 2,
          mb: 3,
        }}
      >
        {[0, 1, 2, 3].map((i) => (
          <TextField
            key={i}
            inputRef={inputRefs[i]}
            autoComplete="off"
            inputProps={{
              maxLength: 1,
              style: {
                textAlign: "center",
                fontSize: "28px",
                color: "#fff",
              },
            }}
            onChange={(e) => handleChange(e, i)}
            onKeyDown={(e) => handleKeyDown(e, i)}
            sx={{
              width: 55,
              height: 65,
              bgcolor: "#111",
              borderRadius: "12px",
              "& .MuiOutlinedInput-root fieldset": {
                borderColor: "#444",
                borderWidth: "2px",
              },
            }}
          />
        ))}
      </Box>

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
        Verificar
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
