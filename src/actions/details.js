import api from "@/services/api"
import {get } from "@/utils/request"
import { GET_DETAILS_ONE, GET_DETAILS_THR_ONEPAGE, } from '@/constants/actionTypes'
export function Detailsone(options) {
    return {
        type: GET_DETAILS_ONE,
        payload: get(`/aps${api.detailsOne}&gid=${options}`)
    }
}
export function Detailsthrpage_action(options) {
    return {
        type: GET_DETAILS_THR_ONEPAGE,
        payload: get(`/aps${api.detailsThrpage}&gid=${options}`)
    }
}