import React from 'react';
export default class index extends React.Component {
  render() {
    const { item } = this.props;
      return  <div className='goods_top_rig'>
        {
          item.map(v => {
            return <dl key={v.gid}>
              <dt><img src={v.image} alt='' /></dt>
              <dd>{v.title}</dd>
            </dl>
          })
        }
    </div>
  }
}


