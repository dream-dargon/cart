import React from 'react';
import { connect } from 'react-redux'
<<<<<<< HEAD
import './style.less'
=======
import { getNavs } from '@/actions/home'

>>>>>>> 6708b6c3a6fb9a5ceb479c8fba7e5720c16fd68b
export default @connect(state => {
  return {
    navs : state.home.fiveNavs
  }
}, {
  getNavs
})
class index extends React.Component {
  componentDidMount() {
    this.props.getNavs()
  }
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


