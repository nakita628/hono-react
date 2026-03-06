import vinext from 'vinext'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [vinext(), tsconfigPaths()],
})
