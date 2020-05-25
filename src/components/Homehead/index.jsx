import React from 'react';
import { Icon } from 'antd'
import './style.less'
class index extends React.Component {
  

  render() {
    return (
      <header>
        <div className="Head_left" >
        <Icon type="bars" />
        </div>
        <div className="Head_warp">
        <Icon type="search" id='icon_sear'/>
          <input placeholder='输入喜欢的宝贝名称'/>
        </div>
        <div className="Head_right">登录</div>
    </header>
    )
  }
}

export default index;