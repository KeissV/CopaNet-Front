import { Box, Paper } from "@mui/material";

export default function RecoverModal({ open, children }) {
  if (!open) return null;

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        bgcolor: "rgba(0,0,0,0.6)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
        backdropFilter: "blur(2px)",
      }}
    >
      <Paper
        sx={{
          width: 380,
          minHeight: 480,
          background: "#000",
          borderRadius: "12px",
          p: 4,
          textAlign: "center",
          color: "white",
        }}
      >
        {children}
      </Paper>
    </Box>
  );
}
