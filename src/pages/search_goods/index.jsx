import React, { Component } from 'react'
import { Icon } from 'antd';
import { connect } from 'react-redux'
import { getKeyGoods } from '@/actions/search_goods'
import './style.less'

const IconFont = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_1844272_2ayzyryi786.js',
});


export default @connect(state => {
  return { searchGoods: state.searchGoods }
},{
  getKeyGoods
})

class SearchGoods extends Component {//点击热门搜索后
  componentDidMount () {
    this.props.getKeyGoods();
    const { params } = this.props.match;
    this.refs.inp.value = params.keys;
  }

  render() {
    console.log(this.props)
    return (
      <div className='pages-searchGoods'>
        <div className='searchGoos-head'>
          <div className='headReturn'>
            <IconFont type="icon-xiazai6" onClick={this.resetSearch} />
          </div>
          <div className='inputSearch'>
            <p>
              <span>
                <IconFont type="icon-sousuo1" onClick={this.resetSearch} />
              </span>
              <input type="text" ref='inp' />
            </p>
          </div>
          <div className='screenOut'>筛选</div>
        </div>
        <div className='searchGoos-actions'>
          <p>
            综合
            <IconFont type="icon-jiantou-copy-copy" onClick={this.resetSearch} />
          </p>
          <p>销量</p>
        </div>
        <div className='searchGoos-content'></div>
      </div>
    )
  }
}
