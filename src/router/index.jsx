import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Login, Reg, Basic, Mine, Cart, Search, Goods, SearchGoods } from './assembly'
export default class Router extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <Switch>
        <Route path='/searchGoodsIndex/:keys' component={SearchGoods} />
        <Route path="/searchGoods" component={Search} />
        <Route path="/login" component={Login} />
        <Route path="/reg" component={Reg} />
        <Route path="/goods" component={Goods} />
        <Route path='/mine' component={Mine} />
        <Route path='/cart' component={Cart} />
          {/* <Route path="/home" component={Home} /> */}
          <Route path="/" component={Basic} />
          {/* <Route path="/" component={App} /> */}
        </Switch>
      </BrowserRouter>
    )
  }
}
