import { FETCH_CART_LOGIN } from '@/constants/actionTypes'
import { message } from 'antd'
message.config({
    top: 150,
    duration: 1,
    maxCount: 1,
});
const initialState = {
    data: false
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case FETCH_CART_LOGIN:
            if (payload.code !== 200) {
                message.info(payload.data)
                return false
            } else {
                window.location.href = "/"
            }
            return {...state, data: payload.data }

        default:
            return state
    }
}