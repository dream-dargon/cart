import React from 'react'
import { NavLink,Switch,Route } from 'react-router-dom'
import { Icon } from 'antd';
import DetailsOne from '@/pages/detailsOne'
import DetailsTwo from '@/pages/detailsTwo'
import DetailsThr from '@/pages/detailsThr'
import './style.less'
import imgs from '@/assets/zuo.png'
export default class index extends React.Component {
  onBack = () => {
    this.props.history.go(-1)
  }
  render() {
    const { gid } = this.props.match.params
    localStorage.setItem('gid',gid)
    return (
      <div className="pages-details">
        <div className='pages-details-head'>
          <div onClick={this.onBack}><img src={imgs} alt=""/></div>
          <ul>
            <li><NavLink to={`/details/${gid}`} exact replace activeClassName='thre'>商品</NavLink></li>  
            <li><NavLink to={`/details/${gid}/1`}  activeClassName='thre' replace>详情</NavLink></li>
            <li><NavLink to={`/details/${gid}/2`}  activeClassName='thre' replace>评价</NavLink></li>
          </ul>
          <div onClick={()=>{this.props.history.push('/cart')}}><Icon type="shopping-cart" /></div>    
        </div>
        <Switch>
            <Route path='/details/:gid/0'  component={DetailsOne}/>
            <Route path='/details/:gid/1' component={DetailsTwo}/>
            <Route path='/details/:gid/2' component={DetailsThr} />
            <Route path='/details/:gid' component={DetailsOne} />          
          </Switch>
      </div>
    )
  }
}
