import Loadable from '@@/Loadable'

const Home = Loadable(() =>
  import('@/pages/home'))
const Login = Loadable(() =>
  import('@/pages/login'))
const Reg = Loadable(() =>
  import('@/pages/reg'))
const Cart = Loadable(() =>
  import('@/pages/cart'))
const Mine = Loadable(() =>
  import('@/pages/mine'))
const Basic = Loadable(() =>
<<<<<<< HEAD
  import('@/layout/Basic'))
const Search = Loadable(() =>
  import('@/pages/search'))
const SearchGoods = Loadable(() =>
  import ('@/pages/search_goods'))
const Goods = Loadable(() =>
  import ('@/pages/goods'))
=======
    import ('@/layout/Basic'))
const Details = Loadable(() =>
    import ('@/pages/details'))
>>>>>>> fff
export {
    Home,
    Login,
    Reg,
    Basic,
    Mine,
    Cart,
<<<<<<< HEAD
    Search,
    SearchGoods,
    Goods,
=======
    Details
>>>>>>> fff
}