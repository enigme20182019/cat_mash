export const DISPLAY_VOTE = 'd_vote'
export const DISPLAY_RANK = 'd_rank'


const initState = {
  display : DISPLAY_VOTE,
  cats : null,
  rank : []
}


export const appReducer = (state = initState, action) => {
  switch(action.type) {
    case DISPLAY_RANK :
      return {...state, display: DISPLAY_RANK}
    case DISPLAY_VOTE:
      return {...state, display: DISPLAY_VOTE}
    default:
      return state
  }
}