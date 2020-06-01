import React from 'react';
import { Link } from 'react-router-dom'
import Seventoprig from '@@/Seventoprig'
import './style.less'
export default class index extends React.Component {
  getDatas = () => {
    let arrs = []
    const { item } = this.props
    item.forEach((v,i) => {
      if (i !== 0) {
        arrs.push(v) 
      }
    })
    return {arrs}
  }
  render() {
    const { item } = this.props;
    const { arrs }=this.getDatas()
    return (
      <div  className='home_goods_seven_top'>
        {
          item.map((v, i) => {
            return i === 0 ? <div className='goods_top_left' key={v.gid}>
            <dl>
            <Link to={`/details/${v.gid}`}>
            <dd>{v.title}</dd>
              <dt>
              <p style={{color:'#CB385D'}}>精品打折</p>
              <img src={v.image} alt='' /></dt>
            </Link>
            </dl>
          </div> : null
          })
        }
        <Seventoprig item={arrs}/>
      </div>);
    }
  }
  
