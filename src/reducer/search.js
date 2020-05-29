import { SEARCH_HOT_RECOMMEND } from '@/constants/actionTypes'

const initialState = {
  hotRecommend: []
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case SEARCH_HOT_RECOMMEND:
    console.log(payload)
    return { ...state, ...payload };

  default:
    return state
  }
}
