import React from 'react';
import { Icon } from 'antd'
import './style.less'
class index extends React.Component {
  

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
        <div className="home_head_right">登录</div>
    </div>
    )
  }
}

export default index;