import { defineConfig } from "vite";
import vinext from "vinext";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    vinext(),
    tsconfigPaths(),
  ],
});
