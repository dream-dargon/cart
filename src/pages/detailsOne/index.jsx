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
    console.log(this.props)
    this.props.Detailsone(this.props.match.params.gid)
  }
  jump = () => {
    const { gid } = this.props.match.params;
    this.props.history.push(`/details/${gid}/2`)
  }
  render() {
    const { datas } = this.props;
      return  <div className='detailsOne'>
        <div>
        {
          <div>
            <img src={datas.images[0]} alt=""/>
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


