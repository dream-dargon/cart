import Loadable from '@@/Loadable'

const Home = Loadable(() =>
    import ('@/pages/home'))
const Login = Loadable(() =>
    import ('@/pages/login'))
const Reg = Loadable(() =>
    import ('@/pages/reg'))
const Cart = Loadable(() =>
    import ('@/pages/cart'))
const Mine = Loadable(() =>
    import ('@/pages/mine'))
const Basic = Loadable(() =>
    import ('@/layout/Basic'))
<<<<<<< HEAD
const Goods = Loadable(() =>
    import ('@/pages/goods'))
const Collection = Loadable(() =>
    import ('@/pages/collection'))
const ChangePassword = Loadable(() =>
    import ('@/pages/changePassword'))
const Iphone = Loadable(() =>
    import ('@/pages/iphone'))
const Personal = Loadable(() =>
    import ('@/pages/personal'))
<<<<<<< HEAD
const Address = Loadable(() =>
import ('@/pages/address'))
const NewAddress = Loadable(() =>
import ('@/pages/newAddress'))
=======
=======
const Details = Loadable(() =>
    import ('@/pages/details'))
>>>>>>> origin/fff
>>>>>>> bd98e4a22773f5b8d5c6fdb3c10d196040268a06
export {
    Home,//首页
    Login,//登录
    Reg,//注册
    Basic,
<<<<<<< HEAD
    Mine,//我的
    Cart,//购物车
    Goods,//分类
    Collection,//收藏
    ChangePassword,//修改密码
    Iphone,//绑定手机
    Personal,//个人资料
<<<<<<< HEAD
    Address,//地址管理
    NewAddress,//地址添加
=======
=======
    Mine,
    Cart,
    Details
>>>>>>> origin/fff
>>>>>>> bd98e4a22773f5b8d5c6fdb3c10d196040268a06
}