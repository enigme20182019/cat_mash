import express from 'express'
import boot from './app/boot.mjs'
import List from 'list'
import Elo, {WIN_STATUS, LOOSE_STATUS} from 'elo'

(async () => {
  const app = express()
  const cats = await boot()


  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    next()
  })

  app.get('/cats', (req, res) => {
    let lessVotedCats = cats.sort((catA, catB) => {
      return (catA.upvote + catB.downvote) < (catB.upvote + catB.downvote)
    }).slice(0, 10)
    List.shuffle(lessVotedCats)
    res.json(lessVotedCats)
  })


  app.post('/vote/:winnerId/:looserId', (req, res) => {
    let winnerId = parseInt(req.params.winnerId)
    let looserId = parseInt(req.params.looserId)


    let winner = cats.find((cat) => cat.id === winnerId)
    let looser = cats.find((cat) => cat.id === looserId)

    if(winner && looser) {
      winner.elo += Elo.getDelta(winner.elo, looser.elo, WIN_STATUS)
      looser.elo -= Elo.getDelta(looser.elo, winner.elo, LOOSE_STATUS)

      res.json([winner, looser])
    } else {
      res.status(503)
      res.json({message : 'Winner or looser missing'})
    }
  })

  app.get('/', (req, res) => {
    res.status(404)
    res.json({error : 'empty route'})
  })


  console.log("listen on http://localhost:8001")

  app.listen('8001')

})()

