import { Outlet, Link as RouterLink, useLocation } from "react-router-dom";
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  Button
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { signOut } from "../auth/auth";
import { useNavigate } from "react-router-dom";
import type { ColorMode } from "../theme/theme";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";



const drawerWidth = 260;

export default function AppLayouts({
  mode,
  onToggleMode,
}: {
  mode: ColorMode;
  onToggleMode: () => void;
}) {

  

  const navigate = useNavigate();
  const location = useLocation();
const isDashboard = location.pathname.startsWith("/app/dashboard");




  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      <AppBar position="fixed" sx={{ zIndex: (t) => t.zIndex.drawer + 1 }}>
      <Toolbar>
  <Typography variant="h6" fontWeight={800}>
    Bank UI
  </Typography>

  <div style={{ flex: 1 }} />

  <Tooltip title={mode === "dark" ? "Switch to light" : "Switch to dark"}>
    <IconButton color="inherit" onClick={onToggleMode}>
      {mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
    </IconButton>
  </Tooltip>

  <Button
    color="inherit"
    onClick={() => {
      signOut();
      navigate("/auth/login");
    }}
  >
    Logout
  </Button>
</Toolbar>


      </AppBar>

      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: "border-box" },
        }}
      >
        <Toolbar />
        <Divider />
        <List>
        <ListItemButton component={RouterLink} to="/app/dashboard" selected={isDashboard}>

            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItemButton>
        </List>
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
}
