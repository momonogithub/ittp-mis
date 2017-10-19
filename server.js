const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
  .then(() => {
    const server = express()

    server.get('/index/:page', (req, res) => {
      const actualPage = '/index'
      console.log('lul')
      const queryParams = { page: req.params.id } 
      app.render(req, res, actualPage, queryParams)
    })

    server.get('/channel', (req, res) => {
      const actualPage = '/channel'
      app.render(req, res, actualPage)
    })

    server.get('/demographic', (req, res) => {
      const actualPage = '/demographic'
      app.render(req, res, actualPage)
    })

    server.get('/netflow', (req, res) => {
      const actualPage = '/netflow'
      app.render(req, res, actualPage)
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