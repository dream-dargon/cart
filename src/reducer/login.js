import { FETCH_CART_LOGIN } from '@/constants/actionTypes'

const initialState = {

}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case FETCH_CART_LOGIN:
    return { ...state, ...payload }

  default:
    return state
  }
}
