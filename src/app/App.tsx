import { RouterProvider } from "react-router-dom";
import { createAppRouter } from "./routes";
import type { ColorMode } from "../theme/theme";

export default function App({
  mode,
  onToggleMode,
}: {
  mode: ColorMode;
  onToggleMode: () => void;
}) {
  const router = createAppRouter({ mode, onToggleMode });
  return <RouterProvider router={router} />;
}
