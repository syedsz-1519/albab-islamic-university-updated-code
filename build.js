import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// Create dist directory
const distDir = path.join(__dirname, 'dist')
if (fs.existsSync(distDir)) {
  fs.rmSync(distDir, { recursive: true })
}
fs.mkdirSync(distDir, { recursive: true })

// Copy HTML files
const htmlFiles = fs.readdirSync(__dirname).filter(f => f.endsWith('.html'))
htmlFiles.forEach(file => {
  fs.copyFileSync(
    path.join(__dirname, file),
    path.join(distDir, file)
  )
})

// Copy assets directory
const assetsDir = path.join(__dirname, 'assets')
if (fs.existsSync(assetsDir)) {
  const destAssetsDir = path.join(distDir, 'assets')
  fs.mkdirSync(destAssetsDir, { recursive: true })
  fs.readdirSync(assetsDir).forEach(file => {
    fs.copyFileSync(
      path.join(assetsDir, file),
      path.join(destAssetsDir, file)
    )
  })
}

// Copy config files
const configFiles = ['robots.txt', 'sitemap.xml', 'vercel.json']
configFiles.forEach(file => {
  const src = path.join(__dirname, file)
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, path.join(distDir, file))
  }
})

console.log('✓ Build complete: dist/ directory ready for deployment')
