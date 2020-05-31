import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
<<<<<<< HEAD
import { 
  Login, Reg, 
  Basic, Mine, 
  Cart, Goods, 
  Collection, Iphone,
  ChangePassword, 
  Personal,
  
} from './assembly'
=======
import {   Login, Reg, Basic,Mine,Cart,Details } from './assembly'
>>>>>>> origin/fff
export default class Router extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <Switch>
        <Route path="/login" component={Login} />
        <Route path="/reg" component={Reg} />
        <Route path="/collection" component={Collection} />
        <Route path="/changePassword" component={ChangePassword} />
        <Route path="/goods" component={Goods} />
        <Route path="/iphone" component={Iphone} />
        <Route path="/personal" component={Personal} />
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
