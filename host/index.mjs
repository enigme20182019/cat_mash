import express from 'express'
import boot from './app/boot.mjs'

(async () => {
  const app = express()

  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    next()
  })

  app.get('/', (req, res) => {
    res.status(404)
    res.json({error : 'empty route'})
  })

  await boot()

  console.log("listen on http://localhost:8001")

  app.listen('8001')

})()

