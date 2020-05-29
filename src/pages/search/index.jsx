import React, { Component } from 'react'
import { Icon } from 'antd';
import { connect } from 'react-redux'
import { getHot } from '@/actions/search'
import './style.less'

const IconFont = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_1844272_2ayzyryi786.js',
});

export default @connect(state => {
  return {}
},{
  getHot
})

class Search extends Component {
  componentDidMount () {
    this.props.getHot();
  }

  render() {
    console.log(this.props)
    return (
      <div className="pages-search">
        <div className="searchHead">
          <div className="headReset">
            <IconFont type="icon-quxiao" />
          </div>
          <div className="headFind">
            <div className="findInput">
              <input type="text" placeholder='请输入宝贝名称' />
              <button><IconFont type="icon-sousuo1" /></button>
            </div>
          </div>
        </div>
        <div className="hotRecommend"></div>
      </div>
    )
  }
}
