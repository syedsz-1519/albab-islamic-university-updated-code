import { defineConfig } from 'vite'

export default defineConfig({
  root: './',
  publicDir: 'public',
  build: {
    outDir: 'dist',
    minify: 'terser',
    target: 'es2020',
    cssCodeSplit: false,
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: undefined,
        entryFileNames: 'assets/[name].[hash].js',
        chunkFileNames: 'assets/[name].[hash].js',
        assetFileNames: 'assets/[name].[hash][extname]'
      }
    }
  },
  server: {
    port: 5173,
    open: true,
    cors: true
  }
})
