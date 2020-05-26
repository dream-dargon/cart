import api from "@/services/api"
import {get } from "@/utils/request"
import { GET_SWIPER_IMG, GET_HOME_NAVS, GET_HOME_RECOMMEND } from '@/constants/actionTypes'
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
export function getRecomm(options) {
    return {
        type: GET_HOME_RECOMMEND,
        payload: get(`/aps${api.recomGoods}`, options)
    }
}