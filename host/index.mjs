import express from 'express'
import boot from './app/boot.mjs'
import Elo, {WIN_STATUS, LOOSE_STATUS} from 'elo'
import yaml from 'js-yaml'
import fs from 'fs'
import path from 'path'



(async () => {

  const config = yaml.safeLoad(fs.readFileSync(path.join('config', 'app.yaml'))).appConfig

  const app = express()
  const cats = await boot()


  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    next()
  })

  app.get('/pick_cat', (req, res) => {
    let exceptParams = []
    if(req.query.except) {
      exceptParams= req.query.except.split(',').map((id) => parseInt(id))
    }

    let lessVotedCats = cats.sort((catA, catB) => {
      return (catA.upvote + catA.downvote) - (catB.upvote + catB.downvote)
    })

    let exceptCats = lessVotedCats.filter((cat) => exceptParams.indexOf(cat.id) === -1)
    if(exceptCats.length >= 2) {
      exceptCats = exceptCats.slice(0,2)
      res.json(exceptCats)
    } else {
      /* all cats have been check once */
      lessVotedCats = lessVotedCats.slice(0,2)
      res.json(lessVotedCats)
    }

  })

  app.get('/rank', (req, res) => {
    res.json(cats.sort((catA, catB) => catB.elo - catA.elo))
  })


  app.post('/vote/:winnerId/:loserId', (req, res) => {
    let winnerId = parseInt(req.params.winnerId)
    let loserId = parseInt(req.params.loserId)


    let winner = cats.find((cat) => cat.id === winnerId)
    let loser = cats.find((cat) => cat.id === loserId)

    if(winner && loser) {
      winner.elo += Elo.getDelta(winner.elo, loser.elo, WIN_STATUS)
      loser.elo += Elo.getDelta(loser.elo, winner.elo, LOOSE_STATUS)
      loser.downvote += 1
      winner.upvote += 1

      res.json({success : true})
    } else {
      res.status(503)
      res.json({message : 'Winner or loser missing'})
    }
  })

  app.get('/', (req, res) => {
    res.status(404)
    res.json({error : 'empty route'})
  })

  console.log(`listen on ${config.host.baseUrl}:${config.host.port}`)
  app.listen(config.host.port)
})()

