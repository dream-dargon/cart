import { GET_KEY_GOODS } from '@/constants/actionTypes'

const initialState = {//点击热门推荐搜索后数据
  endData: []
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case GET_KEY_GOODS:
  console.log(payload,11)
    return { ...state, endData: [...payload.data] }

  default:
    return state
  }
}
