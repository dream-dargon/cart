import React from 'react'
<<<<<<< HEAD
import { BrowserRouter, Switch, Route, } from 'react-router-dom'
=======
import { BrowserRouter, Switch, Route } from 'react-router-dom'
<<<<<<< HEAD
>>>>>>> bd98e4a22773f5b8d5c6fdb3c10d196040268a06
import { 
  Login, Reg, 
  Basic, Mine, 
  Cart, Goods, 
  Collection, Iphone,
  ChangePassword, 
  Personal,
  Address,
  NewAddress,
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
        <Route path="/address" component={Address} />
        <Route path="/newAddress" component={NewAddress} />
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
