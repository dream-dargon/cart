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
export {
  Home,
  Login,
  Reg,
  Basic,
  Mine,
  Cart,
  Search
=======
    import ('@/layout/Basic'))
const Goods = Loadable(() =>
import ('@/pages/goods'))
export {
    Home,
    Login,
    Reg,
    Basic,
    Mine,
    Cart,
    Goods,
>>>>>>> 78b195b08a871dedc8b6aef9b6fb4558bbc51ad5
}