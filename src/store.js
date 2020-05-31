import { createStore, compose, combineReducers, applyMiddleware } from 'redux'
import promise from "redux-promise"
import thunk from "redux-thunk"
import { persistReducer } from 'redux-persist' // 合并 reduce
import storage from 'redux-persist/lib/storage' // 创建 store
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
<<<<<<< HEAD
import { 
    login, home, reg, mine, goods, 
    changePassword, iphone, personal, 
    collection, address,
} from "@/reducer"
=======
<<<<<<< HEAD
import { login, home, reg, mine, goods, changePassword, iphone, personal, collection } from "@/reducer"
=======
import { login, home, reg, details } from "@/reducer"
>>>>>>> origin/fff
>>>>>>> bd98e4a22773f5b8d5c6fdb3c10d196040268a06
const rootPersistConfig = {
    key: 'root',
    storage,
    stateReconciler: autoMergeLevel2,
    // 白名单 [reducer 目录内的 reduce 文件名]
<<<<<<< HEAD
    whitelist: ['login', 'home', ],
=======
<<<<<<< HEAD
    whitelist: ['login', 'home', 'mine'],
=======
    whitelist: ['login', 'home', 'details'],
>>>>>>> origin/fff
>>>>>>> bd98e4a22773f5b8d5c6fdb3c10d196040268a06
}
const myPersistReducer = persistReducer(
    rootPersistConfig,
    combineReducers({
        login,
        home,
<<<<<<< HEAD
        mine,
        reg,
        goods,
        iphone,
        personal,
        collection,
        changePassword,
<<<<<<< HEAD
        address,
=======
=======
        reg,
        details
>>>>>>> origin/fff
>>>>>>> bd98e4a22773f5b8d5c6fdb3c10d196040268a06
    }))

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
    myPersistReducer,
    composeEnhancers(applyMiddleware(promise, thunk))
)
export { store }