export const DISPLAY_VOTE = 'd_vote'
export const DISPLAY_RANK = 'd_rank'
export const LOAD_CATS = 'l_cats'
export const VOTE_CAT = 'v_cat'
export const LOAD_RANK = 'l_rank'
export const START_LOAD = 's_load'
export const END_LOAD = 'e_load'

const initState = {
  display : DISPLAY_VOTE,
  loading : false,
  cats : null,
  leftCat : null,
  rightCat : null,
  rank : []
}

export const appReducer = (state = initState, action) => {
  switch(action.type) {
    case START_LOAD:
      return {...state, loading: true}
    case END_LOAD:
      return {...state, loading: false}
    case DISPLAY_RANK :
      return {...state, display: DISPLAY_RANK,}
    case DISPLAY_VOTE:
      return {...state, display: DISPLAY_VOTE}
    case LOAD_CATS :
      let cats = action.payload
      return {...state, cats: action.payload, leftCat:cats.pop(), rightCat : cats.pop()}
    case VOTE_CAT:
      return {...state, leftCat: action.payload.pop(), rightCat : action.payload.pop()}
    case LOAD_RANK:
      return {...state, rank: action.payload, loading: false}
    default:
      return state
  }
}
