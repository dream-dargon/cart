import React, { Component } from 'react'
import InfiniteScroll from 'react-infinite-scroller'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Header from '@@/Header'
import { colecdata, colecDeldata } from '@/actions/collection'
import './style.less'
export default @connect( ({collection,login}) => {
  return {
    collectionData:collection.collectionData,
    pagenum:collection.pagenum,
    page:collection.page,
    loginData:login.data
  }
},{
  colecdata,
  colecDeldata
})
class index extends Component {
  state = {
    show:true
  }
  componentDidMount () {
    this.loadFunc()
  }
  loadFunc = () => {
   let { pagenum, collectionData, page, loginData} = this.props
    if ( pagenum && collectionData.length >= pagenum) {
      return false
    } else {
      this.props.colecdata(loginData.uid,++page)
    }
  }
  //删除
  del = fid => {
    localStorage.setItem('delfid',fid)
    this.setState({
      show:!this.state.show
    })
  }
  disapper = () => {
    this.setState({
      show:!this.state.show
    })
  }
  //点击确认
  appear = () => {
    const { loginData } = this.props
    this.setState({
      show:!this.state.show
    })
    const fid = localStorage.getItem('delfid')
    this.props.colecDeldata(loginData.uid,fid)
  }
  render() {
    const { collectionData =[] } = this.props
    const { show } = this.state
    return (
      <div className="pages-collection">
        <Header name = '收藏'/>
        <div className="pages-action">
        <InfiniteScroll
        initialLoad={false}
        loadMore={this.loadFunc}
        hasMore={true}
        useWindow={false}
        >
        <div className="collection-item">
        {
         collectionData.length !==0 ? collectionData.map(v => {
            return (
              <dl key={v.gid}>
                <dt><img src={v.image} alt=""/></dt>
                <dd>
                  <p className="title">{v.title}</p>
                  <p className="price">￥{v.price}</p>
                  <div className="btn">
                  <p className="buy"><Link to={`/details/${v.gid}`}>购买</Link></p>
                  <p className="del" onClick={() => this.del(v.fid)}>删除</p>
                  </div>
                </dd>
              </dl>
            )
          }) : <p style={{textAlign:'center',marginTop:'100px'}}>暂无相关数据!</p>
        }
        </div>
        </InfiniteScroll>
        </div>
        <div className={show? 'disappear' : 'appear'}>
          <div className="out">
            <p>确认要退出吗？</p>
            <div>
              <p onClick={this.disapper}>取消</p>
              <p style={{color:"orange"}} onClick={this.appear}>确定</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
