import { GET_KEY_GOODS } from '@/constants/actionTypes'
import api from '@/services/api'
import { post } from '@/utils/request'

export function getKeyGoods (options) {//点击热门推荐搜索后触发事件
  return {
    type: GET_KEY_GOODS,
    payload: post(`/aps${api.searchKeyGoods}`)
  }
}