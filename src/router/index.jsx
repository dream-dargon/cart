import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
<<<<<<< HEAD
import {   Login, Reg, Basic, Mine, Cart, Search } from './assembly'
=======
import {   Login, Reg, Basic, Mine, Cart, Goods, } from './assembly'
>>>>>>> 78b195b08a871dedc8b6aef9b6fb4558bbc51ad5
export default class Router extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <Switch>
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
