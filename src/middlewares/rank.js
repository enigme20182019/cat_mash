import {LOAD_RANK, START_LOAD} from "../reducers/app_reducer";
import {appConfig} from '../../config/app.yaml'

export default async (dispatch) => {
  dispatch({type : START_LOAD})
  let rawRankResponse = await fetch(`${appConfig.host.baseUrl}:${appConfig.host.port}/${appConfig.routes.rank}`)
  let rankResponse = await rawRankResponse.json()
  dispatch({type : LOAD_RANK, payload : rankResponse})
}