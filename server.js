const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
  .then(() => {
    const server = express()

    server.get('/', (req, res) => {
      const actualPage = '/index'
      app.render(req, res, actualPage)
    })

    server.get('/portfolio/:page/:display', async (req, res) => {
      const actualPage = '/portfolio'
      const queryParams = { page: req.params.page, display: `/${req.params.display}` }
      app.render(req, res, actualPage, queryParams)
    })

    server.get('/channel/:display', (req, res) => {
      const actualPage = '/channel'
      const queryParams = { display: `/${req.params.display}` }
      app.render(req, res, actualPage, queryParams)
    })

    server.get('/demographic/:display', (req, res) => {
      const actualPage = '/demographic'
      const queryParams = { display: `/${req.params.display}` }
      app.render(req, res, actualPage, queryParams)
    })

    server.get('/netflow/:display', (req, res) => {
      const actualPage = '/netflow'
      const queryParams = { display: `/${req.params.display}` }
      app.render(req, res, actualPage, queryParams)
    })
    
    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(8080, (err) => {
      if (err) throw err
      console.log('> Ready on http://localhost:8080')
    })
  })
  .catch((ex) => {
    console.error(ex.stack)
    process.exit(1)
  })