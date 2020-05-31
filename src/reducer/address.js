import { FETCH_ADDRESS } from '@/constants/actionTypes'
const initialState = {
  addressData:[]
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case FETCH_ADDRESS:
    if ( parseInt(payload.code) !== 200 ) {
      return false
    }
  return { ...state, addressData:payload.data }
  default:
    return state
  }
}