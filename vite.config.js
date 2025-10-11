import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslintPlugin from "vite-plugin-eslint";

export default defineConfig({
  plugins: [
    react(),
    eslintPlugin({
      cache: false,
      include: ["./src/**/*.{js,jsx,ts,tsx}"],
      exclude: [],
    }),
  ],
  test: {
    globals: true,
    testTimeout: 10000,
    environment: "jsdom",
    coverage: {
      exclude: [
        "*.config.js",
        "src/**/index.ts",
        "src/**/*.types.ts",
        "src/index.tsx",
        "src/react-app-env.d.ts",
        "src/reportWebVitals.ts",
        "src/setupTests.ts",
      ],
    },
  },
  build: {
    outDir: "build", // CRA's default build output
  },
});
