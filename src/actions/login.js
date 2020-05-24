import api from "@/services/api"
import { post } from "../utils/request"
import { FETCH_CART_LOGIN } from '@/constants/actionTypes'
export function loginInfo (options) {
  return {
    type:FETCH_CART_LOGIN,
    payload:post(`/aps${api.login}`,options)
  }
}
