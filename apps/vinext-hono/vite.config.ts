import { resolve } from 'node:path'
import vinext from 'vinext'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

const reactDir = resolve('node_modules/react')

export default defineConfig({
  plugins: [vinext(), tsconfigPaths()],
  resolve: {
    alias: {
      'react/jsx-runtime': resolve(reactDir, 'cjs/react-jsx-runtime.production.js'),
      'react/jsx-dev-runtime': resolve(reactDir, 'cjs/react-jsx-runtime.production.js'),
    },
  },
})
