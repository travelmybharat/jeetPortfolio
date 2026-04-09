import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    target: "esnext",
    minify: "esbuild",
    rollupOptions: {
      output: {
        manualChunks: {
          three: ["three", "three-stdlib"],
          r3f: [
            "@react-three/fiber",
            "@react-three/drei",
            "@react-three/postprocessing",
          ],
          gsap: ["gsap", "@gsap/react"],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },
});
