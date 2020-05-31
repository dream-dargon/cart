import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Head from '@@/Header'
import { IconFont } from '@@/IconFont'
import { getAddress } from '@/actions/address'
import './style.less'
export default @connect (state => {
  return {
    addressData: state.address.addressData,
    loginData:state.login.data
  }
},{
  getAddress
})
class index extends Component {
  componentDidMount () {
    const { loginData } = this.props
    this.props.getAddress(loginData.uid)
  }
  render() {
    const { addressData } = this.props
    return (
      <div className="pages-address">
        <Head name="收货地址管理" />
        <div className="address-content">
        {
         addressData ? addressData.map( v => {
            return (
              <ul key={v.aid}>
              <li>
                <p>
                  <span className="name">{v.name}</span>
                  <span className="phone">{v.cellphone}</span>
                </p>
                <p><span>{parseInt(v.isdefault) === 1 ? "[默认]" : null}</span>
                  {v.province}{v.city}{v.area}{v.address}
                </p>
              </li>
              <li>
                <IconFont className="icons" type="icon-iconfontxiangxia1copy19" />
              </li>
            </ul>
            )
          }) : <p>暂无收货地址</p>
        }
        </div>
        <div className="add-main">
          <button><Link to='/newAddress'>+添加新地址</Link></button>
        </div>
      </div>
    )
  }
}
