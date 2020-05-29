import React from 'react';
import {Link} from 'react-router-dom'
export default class index extends React.Component {
  render() {
    const { item } = this.props;
      return  <div className='goods_top_rig'>
        {
          item.map(v => {
            return <Link key={v.gid} to={`/details/${v.gid}`}><dl key={v.gid}>
              <dt><img src={v.image} alt='' /></dt>
              <dd>{v.title}</dd>
            </dl>
            </Link>
          })
        }
    </div>
  }
}


