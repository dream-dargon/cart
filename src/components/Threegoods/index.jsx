import React from 'react';
import { connect } from 'react-redux'
import Recomtitle from '@@/Recomtitle'
import Recomgoods from '@@/Recomgoods'
import { getRecomm } from '@/actions/home'
import './style.less'
export default @connect(state => {
  return {
    recomGoods:state.home.recomGoods
  }
},{
  getRecomm
})
class index extends React.Component {
  componentDidMount() {
    this.props.getRecomm()
  }

  render() {
    const { recomGoods } = this.props;
    return <div>
      {
        recomGoods.map((v,i) => {
          return (
            <div key={i} className='threegoods'>
              <Recomtitle title={v.title} />
              <Recomgoods items={v.items}/>
            </div>
          )
        })
      }
      
    </div>;
  }
}


