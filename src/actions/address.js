import api from "@/services/api"
import { get } from "../utils/request"
import { FETCH_ADDRESS } from '@/constants/actionTypes'

export function getAddress (uid) {
  return {
    type:FETCH_ADDRESS,
    payload:get(`/aps${api.address}&uid=`+uid)
  }
}