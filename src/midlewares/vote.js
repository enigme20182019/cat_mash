import {VOTE_CAT} from "../reducers/app_reducer";

export default async (dispatch, winner, loser, votes) => {
  await fetch(`http://localhost:8001/vote/${winner.id}/${loser.id}`, {method : 'POST'})
  let rawCatsResponse = await fetch(`http://localhost:8001/pick_cat/?except=${votes.map((vote) => vote.id).join(',')}`)
  let cats = await rawCatsResponse.json()
  dispatch({type : VOTE_CAT, payload : cats})
}