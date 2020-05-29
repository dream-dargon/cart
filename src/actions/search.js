import { SEARCH_HOT_RECOMMEND } from '@/constants/actionTypes'
import api from '@/services/api'
import { get } from '@/utils/request'

export function getHot (options) {
  return { 
    type: SEARCH_HOT_RECOMMEND,
    payload: get(`aps${api.hotSearch}`)
  }
}