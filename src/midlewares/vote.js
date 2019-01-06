import {VOTE_CAT} from "../reducers/app_reducer";

export default async (dispatch, winner, loser) => {
  await fetch(`http://localhost:8001/vote/${winner.id}/${loser.id}`, {method : 'POST'})
  dispatch({type : VOTE_CAT})
}