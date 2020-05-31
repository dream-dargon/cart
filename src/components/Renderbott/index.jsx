import React from 'react';
<<<<<<< HEAD
import './style.less'
=======
import { Link } from 'react-router-dom'
>>>>>>> origin/fff
export default class index extends React.Component {
  render() {
    const { item } = this.props;
    return (
      <div className='home_goods_seven_bot'>
      {
        item.map(v => {
          return <dl key={v.gid}><Link key={v.gid} to={`/details/${v.gid}`}>
            <dt><img src={v.image} alt='' /></dt>
            <dd>{v.title}</dd>
            <p>￥{v.price}</p></Link>
          </dl>
        })
      }
    </div>);
  }
}