import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base:
    process.env.NODE_ENV === "production"
      ? "/Maxinum_Consulting_Test_Form/"
      : "/",
  // base: "/Maxinum_Consulting_Test_Form/",
  plugins: [react()],
});
