import React from 'react';
import { connect } from 'react-redux'
export default @connect(state => {
  return {
     datas:state.details.detailsOne
  }
})
class index extends React.Component {
 
  render() {
    const { bodys } = this.props.datas
    return <div className='detailsTwo'>
         {bodys ? bodys : '暂无详情'}
    </div>
  }
}


