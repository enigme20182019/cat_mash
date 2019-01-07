import {LOAD_RANK, START_LOAD} from "../reducers/app_reducer";

export default async (dispatch) => {
  dispatch({type : START_LOAD})
  let rawRankResponse = await fetch('http://localhost:8001/rank')
  let rankResponse = await rawRankResponse.json()
  dispatch({type : LOAD_RANK, payload : rankResponse})
}