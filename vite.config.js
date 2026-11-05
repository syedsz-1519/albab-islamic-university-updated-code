export default {
  root: './',
  build: {
    outDir: 'dist',
    minify: false,
    target: 'es2020',
    emptyOutDir: true,
    copyPublicDir: false,
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name][extname]'
      }
    }
  },
  server: {
    port: 5173,
    cors: true
  }
}
