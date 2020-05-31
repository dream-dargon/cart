import React from 'react';
import { connect } from 'react-redux'
import { Detailsthrpage_action } from '@/actions/details'
// import './style.less'
export default @connect(state => {
  return {
    commentData:state.details.Detailsthr
  }
}, {
    Detailsthrpage_action
})
 class index extends React.Component {
  componentDidMount() {
    const gid = localStorage.getItem('gid');
   this.props.Detailsthrpage_action(gid)
  }
  render() {
    console.log(this.props)
    const { commentData } = this.props;
    const length = commentData.length !==0 ? commentData.length : 0
      return  <div className='detailsThr'>
        <div>商品评价({length})</div>
        {
           commentData  instanceof  Array ? commentData.map((v,i) => {
            return (
              <div key = {i} className='comments'>
                <dl>
                  <dt><img src={v.head} alt=""/></dt>
                  <dd>{v.nickname}</dd>
                </dl>
                <p>{v.content}</p>
                <p>{v.times}</p>
              </div>
            )
          }) : commentData
        }
    </div>
  }
}


