const K_VALUE = 40
const CHESS_FORCE = 400

export const WIN_STATUS = 1
export const LOOSE_STATUS = 1

export default class Elo {
  static getDelta(playerAR, playerBR, status) {
    let pWin = 1 / (1 + Math.pow(10, (playerAR - playerBR) / CHESS_FORCE))

    return Math.round(K_VALUE * (status - pWin))
  }
}
