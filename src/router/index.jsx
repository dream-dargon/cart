import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { App, Home, Login, Reg, Basic,Mine,Cart } from './assembly'
export default class Router extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <Switch>
        <Route path="/login" component={Login} />
        <Route path="/reg" component={Reg} />
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
