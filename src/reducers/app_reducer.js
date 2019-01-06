export const DISPLAY_VOTE = 'd_vote'
export const DISPLAY_RANK = 'd_rank'
export const LOAD_CATS = 'l_cats'


const initState = {
  display : DISPLAY_VOTE,
  cats : null,
  leftCat : null,
  rightCat : null,
  rank : []
}


export const appReducer = (state = initState, action) => {
  switch(action.type) {
    case DISPLAY_RANK :
      return {...state, display: DISPLAY_RANK}
    case DISPLAY_VOTE:
      return {...state, display: DISPLAY_VOTE}
    case LOAD_CATS :
      let cats = action.payload
      return {...state, cats: action.payload, leftCat:cats.pop(), rightCat:cats.pop()}
    default:
      return state
  }
}