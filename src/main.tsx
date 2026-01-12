import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "@fontsource/geist-sans";
import "@fontsource/geist-mono";

createRoot(document.getElementById("root")!).render(<App />);
