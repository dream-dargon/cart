import api from "@/services/api"
import { get } from "@/utils/request"
import { 
  GET_SWIPER_IMG, 
  GET_HOME_NAVS,
  RECOMMEND_DATA 
} from '@/constants/actionTypes'
export function getSwiper(options) {
  return {
    type: GET_SWIPER_IMG,
    payload: get(`/aps${api.swiperImgs}`, options)
  }
}
export function getNavs(options) {
  return {
    type: GET_HOME_NAVS,
    payload: get(`/aps${api.fiveNavs}`, options)
  }
}

export function getRecommend(options) {
  return {
    type: RECOMMEND_DATA,
    payload: get(`/aps${api.recommend}`, options)
  }
}