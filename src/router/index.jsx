import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import {   Login, Reg, Basic,Mine,Cart,Details } from './assembly'
export default class Router extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <Switch>
        <Route path="/login" component={Login} />
        <Route path="/reg" component={Reg} />
        <Route path='/mine' component={Mine} />
        <Route path='/cart' component={Cart} />
         <Route path="/details/:gid" component={Details} /> 
          <Route path="/" component={Basic} />
          {/* <Route path="/" component={App} /> */}
        </Switch>
      </BrowserRouter>
    )
  }
}
