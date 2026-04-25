import { createRoot } from "react-dom/client";
import "./index.module.scss";
import "@mantine/core/styles.css";
import { App } from "./App";

createRoot(document.getElementById("root")!).render(<App />);
