import Elo, {WIN_STATUS, LOOSE_STATUS} from './index.mjs'
import assert from 'assert'
let playerAR = 1600
let playerBR = 1600

assert.equal(Elo.getDelta(playerAR, playerBR, WIN_STATUS), 20)
assert.equal(Elo.getDelta(playerBR, playerAR, LOOSE_STATUS), 20)

let playerCR = 1200
let playerDR = 1400

assert.equal(Elo.getDelta(playerCR, playerDR, WIN_STATUS), 10)
assert.equal(Elo.getDelta(playerDR, playerCR, LOOSE_STATUS), 30)
