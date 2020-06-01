import { GET_DETAILS_ONE, GET_DETAILS_THR_ONEPAGE,  } from '@/constants/actionTypes'
const initialState = {
    detailsOne: [],
    Detailsthr: [],
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_DETAILS_ONE:
            return {...state, detailsOne: payload.data }
        case GET_DETAILS_THR_ONEPAGE:
            return {...state, Detailsthr: payload.data }
        default:
            return state
    }
}