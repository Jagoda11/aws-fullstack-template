import path from 'path'

import express from 'express'

const app = express()
const PORT = Number(process.env.PORT || 3000)

// Simple request logger
app.use((req, _res, next) => {
  const now = new Date().toISOString()
  console.log(`[${now}] ${req.method} ${req.url}`)
  next()
})

// Example API route
app.get('/api/hello', (_req, res) => {
  res.json({ message: 'Hello from the Backend!' })
})

// Serve static frontend (production build)
const frontendDist = path.join(__dirname, '..', '..', 'frontend', 'dist')
app.use(express.static(frontendDist))

// SPA fallback (use app.use to avoid path-to-regexp parsing of string patterns)
app.use((_req, res) => {
  res.sendFile(path.join(frontendDist, 'index.html'))
})

// Start server and capture instance for graceful shutdown
const server = app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`)
})

// Graceful shutdown helper
const shutdown = (signal: string) => {
  console.log(`Received ${signal}. Closing server...`)
  server.close((err?: Error) => {
    if (err) {
      console.error('Error during server close:', err)
      process.exit(1)
    }
    console.log('Server closed. Exiting.')
    process.exit(0)
  })
}

process.on('SIGINT', () => shutdown('SIGINT'))
process.on('SIGTERM', () => shutdown('SIGTERM'))

process.on('uncaughtException', (err) => {
  console.error('Uncaught exception:', err)
  process.exit(1)
})

process.on('unhandledRejection', (reason) => {
  console.error('Unhandled rejection:', reason)
  process.exit(1)
})
