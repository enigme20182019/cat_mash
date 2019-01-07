import {LOAD_CATS, VOTE_CAT} from "../reducers/app_reducer";
import {appConfig} from '../../config/app.yaml'

export const vote = async (dispatch, winner, loser, votes) => {
  await fetch(`${appConfig.host.baseUrl}:${appConfig.host.port}/${appConfig.routes.vote}/${winner.id}/${loser.id}`, {method : 'POST'})
  let rawCatsResponse = await fetch(`${appConfig.host.baseUrl}:${appConfig.host.port}/${appConfig.routes.pick_cat}/?except=${votes.map((vote) => vote.id).join(',')}`)
  let cats = await rawCatsResponse.json()
  dispatch({type : VOTE_CAT, payload : cats})
}

export const pick = async (dispatch, votes) => {
  let rawCatsResponse = await fetch(`${appConfig.host.baseUrl}:${appConfig.host.port}/${appConfig.routes.pick_cat}/?except=${votes.join(',')}`)
  let catsResponse = await rawCatsResponse.json()
  dispatch({type : LOAD_CATS, payload : catsResponse})
}