import { Outlet } from "react-router-dom";
import { Box, Container, Paper } from "@mui/material";

export default function AuthLayout() {
  return (
    <Box sx={{ minHeight: "100vh", display: "grid", placeItems: "center", p: 2 }}>
      <Container maxWidth="sm">
        <Paper sx={{ p: 4, borderRadius: 3 }}>
          <Outlet />
        </Paper>
      </Container>
    </Box>
  );
}
