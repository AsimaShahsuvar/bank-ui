import React from "react";
import ReactDOM from "react-dom/client";
import { CssBaseline, ThemeProvider } from "@mui/material";
import App from "./app/App";
import { getTheme, type ColorMode } from "./theme/theme";

const MODE_KEY = "bankui_color_mode";

function getInitialMode(): ColorMode {
  const saved = localStorage.getItem(MODE_KEY);
  return saved === "dark" ? "dark" : "light";
}

function Root() {
  const [mode, setMode] = React.useState<ColorMode>(getInitialMode());

  const theme = React.useMemo(() => getTheme(mode), [mode]);

  const toggleMode = React.useCallback(() => {
    setMode((prev) => {
      const next = prev === "light" ? "dark" : "light";
      localStorage.setItem(MODE_KEY, next);
      return next;
    });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App mode={mode} onToggleMode={toggleMode} />
    </ThemeProvider>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
