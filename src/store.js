import { createStore, compose, combineReducers, applyMiddleware } from 'redux'
import promise from "redux-promise"
import thunk from "redux-thunk"
import { persistReducer } from 'redux-persist' // 合并 reduce
import storage from 'redux-persist/lib/storage' // 创建 store
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
<<<<<<< HEAD
import { login, home, reg, mine, Search } from "@/reducer"
=======
import { login, home, reg, mine, goods } from "@/reducer"
>>>>>>> 78b195b08a871dedc8b6aef9b6fb4558bbc51ad5
const rootPersistConfig = {
    key: 'root',
    storage,
    stateReconciler: autoMergeLevel2,
    // 白名单 [reducer 目录内的 reduce 文件名]
    whitelist: ['login', 'home', 'Search'],
}
const myPersistReducer = persistReducer(
    rootPersistConfig,
    combineReducers({
        login,
        home,
        mine,
        reg,
<<<<<<< HEAD
        Search,
=======
        goods,
>>>>>>> 78b195b08a871dedc8b6aef9b6fb4558bbc51ad5
    }))

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
    myPersistReducer,
    composeEnhancers(applyMiddleware(promise, thunk))
)
export { store }