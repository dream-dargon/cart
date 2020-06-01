import React from 'react';
import { connect } from 'react-redux'
import { Detailsone } from '@/actions/details'
import  DetailsThr from '@/pages/detailsThr'
import './style.less'
export default @connect(state => {
  return {
    datas: state.details.detailsOne
  }
}, {
  Detailsone
})
 class index extends React.Component {
  componentDidMount() {
    this.props.Detailsone(this.props.match.params.gid)
  }
  jump = () => {
    const { gid } = this.props.match.params;
    this.props.history.replace(`/details/${gid}/2`)
  }
  render() {
    const { datas } = this.props;
      return  <div className='detailsOne'>
        <div>
        {
          <div className="detail-info">
              <img src={datas.images[0]} alt=""/>
              <p>{datas.title}</p>
              <p style={{color:'red'}}>￥{datas.price}</p>
              <p className="three"><span>快递：{datas.freight}元</span><span>月销量{datas.sales}件</span></p>
         </div> 
        }
        <DetailsThr/>
          <div className='morejudge'> <p onClick={() =>this.jump()}>查看更多评价</p> </div>
      </div>
        <div className='detailsOne_tabbar'>
            <p>收藏</p>
            <p>加入购物车</p>
         </div>
    </div>
  }
}


