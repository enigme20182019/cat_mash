import {LOAD_RANK} from "../reducers/app_reducer";

export default async (dispatch) => {
  let rawRankResponse = await fetch('http://localhost:8001/rank')
  let rankResponse = await rawRankResponse.json()
  rankResponse.sort((catA, catB) => catA.elo < catB.elo)
  dispatch({type : LOAD_RANK, payload : rankResponse})
}
