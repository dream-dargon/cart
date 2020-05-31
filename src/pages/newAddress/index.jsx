import React, { Component } from 'react'
import Head from '@@/Header'
import './style.less'
export default class index extends Component {
  render() {
    return (
      <div className="pages-newadd">
        <Head name="新增收货地址" />
        <div className="newadd-content"></div>
      </div>
    )
  }
}
