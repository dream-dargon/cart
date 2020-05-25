import React from 'react';
import Swiper from 'swiper';
import { connect } from 'react-redux'
import 'swiper/js/swiper.min.js'
import 'swiper/css/swiper.min.css'
export default @connect(state => {
  return {
    imgs : state.home.swiperImgs
  }
})
class index extends React.Component {
  componentDidMount() {
    new Swiper('.swiper-container', {
      pagination: {
        el: '.swiper-pagination',
      },
    });
}
  render() {
    const { imgs } = this.props;
    return <div className='swip'>
      <div className="swiper-container">
        <div className="swiper-wrapper">
          {
            imgs.map((v,i)=>{
              return <div className="swiper-slide" key={i}><img src={v.image} /></div>
            })
          }
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </div>;
  }
}


