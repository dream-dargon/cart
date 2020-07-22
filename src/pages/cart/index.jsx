import React from 'react';
import Header from '@@/Header'
import './style.less'

export default class index extends React.Component {
  render() {
    return (
      <div className='pages-cart'>
        <Header name = '购物车'/>
        <div className='cart-content'></div>
        <div className='cart-foot'>
          <div className='foot-left'>
            <p>
              <input type="checkbox" />
              全选
            </p>
            <p>
              <span>运费：<i>￥<b>0</b></i></span>
              <span>合计：<i>￥<b>0</b></i></span>
            </p>
          </div>
          <div className='foot-right'>去结算</div>
        </div>
      </div>
    );
  }
}

