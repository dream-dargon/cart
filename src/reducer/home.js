import { GET_SWIPER_IMG, GET_HOME_NAVS } from '@/constants/actionTypes'
const initialState = {
    swiperImgs: [],
    fiveNavs: []
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_SWIPER_IMG:
            return {...state, swiperImgs: payload.data }
        case GET_HOME_NAVS:
            return {...state, fiveNavs: payload.data }
        default:
            return state
    }
}