import React, { Component } from 'react'
import { Icon } from 'antd';
import { connect } from 'react-redux'
import { getHot } from '@/actions/search'
import './style.less'

const IconFont = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_1844272_2ayzyryi786.js',
});

export default @connect(state => {
  return { hot: state.Search.hotRecommend }
},{
  getHot
})

class Search extends Component {
  componentDidMount () {
    this.props.getHot();
  }

  resetSearch = () =>{
    this.props.history.push('/')
  }

  btnClick = (val) => {
    localStorage.setItem('keys',val);
    this.props.history.push(`/searchGoodsIndex/${val}`)
  }

  render() {
    const { hot} = this.props;
    return (
      <div className="pages-search">
        <div className="searchHead">
          <div className="headReset">
            <IconFont type="icon-quxiao" onClick={this.resetSearch} />
          </div>
          <div className="headFind">
            <div className="findInput">
              <input type="text" placeholder='请输入宝贝名称' />
              <button><IconFont type="icon-sousuo1" /></button>
            </div>
          </div>
        </div>
        <div className="recommendDiv">
          <div className="hotRecommend">
            <p>热门推荐</p>
            <div>
              {
                hot.map((v, i) => {
                  return (
                    <button key={i} onClick={() => this.btnClick(v.title)}>
                      {v.title}
                    </button>
                  )
                })
              }
            </div>
          </div>
          
        </div>
      </div>
    )
  }
}
