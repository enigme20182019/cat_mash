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

      res.json([winner, loser])
    } else {
      res.status(503)
      res.json({message : 'Winner or loser missing'})
    }
  })

  app.get('/', (req, res) => {
    res.status(404)
    res.json({error : 'empty route'})
  })


  console.log("listen on http://localhost:8001")

  app.listen('8001')

})()

