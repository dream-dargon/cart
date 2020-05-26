import React from 'react';
import { Icon } from 'antd'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import './style.less'
export default @connect (state => {
  return {
    data:state.login.data
  }
})
@withRouter
class index extends React.Component {

  componentDidMount () {
    window.onscroll = () => {
      if(document.documentElement.scrollTop > 100){
        document.getElementsByClassName('home_head')[0]
        .style.background = 'linear-gradient(red, white)';
      }else{
        document.getElementsByClassName('home_head')[0]
        .style.background = 'none';
      }
    }
  }

  tologin = () => {
    const { data } = this.props
    if( data ) {
      this.props.history.push('/mine')
    } else {
      this.props.history.push('/login')
    }
  }

  render() {
    return (
      <div className='home_head'>
        <div className="home_head_left" >
        <Icon type="bars" />
        </div>
        <div className="home_head_warp">
        <Icon type="search" id='icon_sear'/>
          <input placeholder='输入喜欢的宝贝名称'/>
        </div>
        <div className="home_head_right" onClick={this.tologin}>登录</div>
    </div>
    )
  }
}