import { defineConfig } from 'vite'
import { glob } from 'glob'
import { fileURLToPath } from 'url'
import path from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default defineConfig({
  root: './',
  build: {
    outDir: 'dist',
    minify: false,
    target: 'es2020',
    rollupOptions: {
      input: Object.fromEntries(
        glob.sync('*.html').map(file => [
          path.relative(__dirname, file.slice(0, file.length - 5)),
          path.resolve(__dirname, file)
        ])
      ),
      output: {
        entryFileNames: 'assets/[name].js',
        chunkFileNames: 'assets/[name].js',
        assetFileNames: 'assets/[name][extname]'
      }
    }
  },
  server: {
    port: 5173,
    open: false,
    cors: true
  }
})
