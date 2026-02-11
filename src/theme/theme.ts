import { createTheme } from "@mui/material/styles";

export type ColorMode = "light" | "dark";

export function getTheme(mode: ColorMode) {
  return createTheme({
    palette: {
      mode,
      primary: { main: "#1a73e8" },
    },
    shape: { borderRadius: 12 },
    typography: {
      fontFamily: `"Inter", system-ui, -apple-system, Segoe UI, Roboto, Arial`,
    },
  });
}
