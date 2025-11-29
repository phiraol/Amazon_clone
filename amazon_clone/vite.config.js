import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/", // <-- ADD THIS TO FIX 404 + WRONG ASSETS PATHS ON VERCEL
});
