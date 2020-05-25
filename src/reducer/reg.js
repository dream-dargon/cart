import { FETCH_REG } from '@/constants/actionTypes'
import { message } from 'antd'
const initialState = {
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case FETCH_REG:
   if(payload.code !== 200) {
    message.info(payload.data)
    return false
  } else {
    window.location.href="/login"
  }
  return { ...state, code:payload }
  default:
    return state
  }
}
