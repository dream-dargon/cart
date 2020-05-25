import React from 'react';
import { connect } from 'react-redux'
import './style.less'
export default @connect(state => {
  return {
    navs : state.home.fiveNavs
  }
})
class index extends React.Component {
 
  render() {
    const { navs } = this.props;
    return <div className='home_navs'>
      {
        navs.map(v => {
          return (<dl key={v.cid}>
            <dt><img src={v.image} alt='' /></dt>
            <dd>{v.title}</dd>
          </dl>)
        })
     }
    </div>;
  }
}


