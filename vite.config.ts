import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'node:path'
import { portfolioProjects } from './src/lib/portfolio-data'

function portfolioApiPlugin(): Plugin {
  return {
    name: 'portfolio-api',
    configureServer(server) {
      server.middlewares.use('/api/portfolio/projects', (req, res, next) => {
        if (req.method !== 'GET') {
          next()
          return
        }

        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify({ projects: portfolioProjects }))
      })

      server.middlewares.use('/api/portfolio/seed', (req, res, next) => {
        if (req.method !== 'POST') {
          next()
          return
        }

        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify({ ok: true, count: portfolioProjects.length }))
      })
    },
  }
}

export default defineConfig({
  plugins: [react(), tailwindcss(), portfolioApiPlugin()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
